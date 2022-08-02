import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from "react";

import { FetchResult } from "@apollo/client";
import { toast } from "react-toastify";
import { GraphQLError } from "graphql";
import { useLocation, useNavigate } from "react-router-dom";

import {
  EmailVerificationMutation,
  ErrorMsg,
  FullProfileFragment,
  Maybe,
  RequestEmailVerificationMutation,
  SignupMutation,
  useContinueWithLinkedinMutation,
  useEmailVerificationMutation,
  useLoginMutation,
  User,
  useRegeneratePasswordMutation,
  useRegeneratePasswordRequestMutation,
  useRequestEmailVerificationMutation,
  useSignupMutation,
} from "src/generated/graphql";

import { TOKEN_KEY, TOKEN_RENEW_KEY } from "src/app-constants";

import { sha256 } from "src/utils";

type AuthContextType = {
  user: Maybe<User>;
  setUser: Dispatch<SetStateAction<Maybe<User>>>;
  userProfile: Maybe<FullProfileFragment> | undefined;
  setUserProfile: (profile: Maybe<FullProfileFragment> | undefined) => void;
  login: (email: string, password: string) => void;
  getLinkedinToken: () => void;
  continueWithLinkedin: (token: string) => void;
  signup: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => Promise<FetchResult>;
  logout: () => void;
  token: string | null;
  setToken: Dispatch<SetStateAction<Maybe<string>>>;
  renewToken: string | null;
  setRenewToken: Dispatch<SetStateAction<Maybe<string>>>;
  error: Maybe<GraphQLError>;
  regeneratePasswordRequest: (email: string) => void;
  regeneratePassword: (
    regeneratePasswordRequest: string,
    password: string,
    repeatedPassword: string
  ) => void;
  checkEmailVerification: (emailVerificationID: string) => Promise<void>;
  requestEmailVerification: (email: string) => Promise<boolean>;
  isLoggedIn: boolean;
  isOnboarding: boolean;
  isEmailVerified?: boolean;
  emailVerificationRequest: (emailVerificationID: string) => Promise<void>;
  email: string | null;
};

export const AuthContext = createContext<AuthContextType>(null!);

type AuthProviderProps = {
  children: ReactNode;
};

const probablyLinks = ["linkedin", "github", "web"];
type ProfileKey = keyof FullProfileFragment;
const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  //  when user doesn't exist yet in signup flow
  const [email, setEmail] = useState<string | null>(null);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>();
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false);
  const [userProfile, setRawUserProfile] = useState<
    Maybe<FullProfileFragment> | undefined
  >(null);

  // applied ts hacks s.t. all links without http protocol prefixed have it prepended.
  const setUserProfile = useCallback(
    (profile: Maybe<FullProfileFragment> | undefined) => {
      if (!profile) return undefined;
      const retProfile = {} as FullProfileFragment;

      (Object.keys(profile) as ProfileKey[]).forEach((key: ProfileKey) => {
        if (
          probablyLinks.includes(key) &&
          profile[key] &&
          !/^http(s)?/.test(profile[key] as string)
        ) {
          (retProfile[key] as any) = `https://${profile[key]}`;
        } else {
          (retProfile[key] as any) = profile[key];
        }
      });
      setRawUserProfile(retProfile);
    },
    []
  );

  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY) || null
  );
  const [renewToken, setRenewToken] = useState<string | null>(
    localStorage.getItem(TOKEN_RENEW_KEY) || null
  );
  const [error, setError] = useState<GraphQLError | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const [fromPath, setFromPath] = useState<string | undefined>(
    // @ts-ignore
    location?.state?.from?.pathname
  );

  const setLogin = ({
    user,
    profile,
    token,
  }: {
    user: User;
    profile?: Maybe<FullProfileFragment>;
    token: string;
  }) => {
    if (!profile) {
      // setSignUp({ user, token });
    } else {
      setError(null);
      localStorage.setItem(TOKEN_KEY, token);
      setUser(user);
      setToken(token);
      setUserProfile(profile);
      navigate(fromPath || "/", { state: location.state });
    }
  };

  const [triggerLogin, { client }] = useLoginMutation({
    fetchPolicy: "network-only",
    onError: ({ graphQLErrors, networkError, clientErrors }) => {
      graphQLErrors.forEach((error) => {
        setError(error);
        if (error.message === ErrorMsg.EmailNotVerified) {
          toast.error("Email is not verified, please verify email");
        } else if (error.message === ErrorMsg.Unauthorized) {
          toast.error("Wrong email or password");
        } else if (error.message === ErrorMsg.UserNotFound) {
          toast.error("User not found");
        }
      });
      // console.log({ graphQLErrors, networkError, clientErrors });
    },
    onCompleted: (data) => {
      if (data.login) {
        setLogin({
          token: data.login.token,
          user: data.login.user,
          profile: data.login.profile,
        });

        if (!data.login.profile) {
          setIsOnboarding(true);
        }
      }
    },
  });

  const [triggerContinueWithLinkedin] = useContinueWithLinkedinMutation({
    fetchPolicy: "network-only",
    onError: ({ graphQLErrors, networkError, clientErrors }) => {
      graphQLErrors.forEach((error) => {
        setError(error);
      });
      clientErrors.forEach((error) => {
        setError(error as GraphQLError);
      });
      if (networkError) {
        setError(error);
      }
    },
    onCompleted: (data) => {
      if (data.continueWithLinkedin) {
        if (data.continueWithLinkedin.photoUrl) {
          localStorage.setItem(
            `linkedin-photo-url-${data.continueWithLinkedin.user.id}`,
            data.continueWithLinkedin.photoUrl
          );
          localStorage.setItem(
            `onboarding-user-id`,
            data.continueWithLinkedin.user.id
          );
        }
        setLogin({
          user: data.continueWithLinkedin.user,
          profile: data.continueWithLinkedin.profile,
          token: data.continueWithLinkedin.token,
        });
        console.log({ data });
        localStorage.setItem(TOKEN_KEY, data.continueWithLinkedin.token);
        setEmail(data.continueWithLinkedin.user.email);
        setIsEmailVerified(true);

        if (data.continueWithLinkedin.profile?.name) {
          // in signin flow
          navigate("/find-jobs");
          setUser(data.continueWithLinkedin.user);
          setUserProfile(data.continueWithLinkedin.profile);
        } else {
          // hasn't onboarded yet
          navigate("/signup/profile");
        }
      }
    },
  });

  const [triggerEmailVerification] = useEmailVerificationMutation({
    fetchPolicy: "network-only",
    onError: ({ graphQLErrors }) => {
      for (let error of graphQLErrors) {
        toast.error(error.message);
        setIsEmailVerified(false);
      }
    },
    onCompleted: (data: EmailVerificationMutation) => {
      if (data.emailVerification) {
        setToken(data.emailVerification.token);
        localStorage.setItem(TOKEN_KEY, data.emailVerification.token);
        setIsEmailVerified(true);
        setEmail(data.emailVerification.user.email);
        toast.success("Email verified");
        navigate("/signup/profile");
      } else {
        setIsEmailVerified(false);
        toast.error("Email verification failed");
      }
    },
  });

  const emailVerificationRequest = async (emailVerificationID: string) => {
    const res = await triggerEmailVerification({
      variables: {
        emailVerificationID,
      },
    });
  };

  const checkEmailVerification = async (emailVerificationID: string) => {
    await triggerEmailVerification({
      variables: { emailVerificationID },
    });
  };

  const [triggerRequestEmailVerification] = useRequestEmailVerificationMutation(
    {
      fetchPolicy: "network-only",
      onError: ({ graphQLErrors }) => {
        for (let error of graphQLErrors) {
          toast.error(error.message);
        }
      },
      onCompleted: (data: RequestEmailVerificationMutation) => {
        if (data.requestEmailVerification) {
          toast.success("Verification email was sent");
        }
      },
    }
  );

  const requestEmailVerification = async (email: string) => {
    const res = await triggerRequestEmailVerification({ variables: { email } });
    return !!res.data?.requestEmailVerification;
  };

  const [triggerSignup] = useSignupMutation({
    fetchPolicy: "network-only",
    onError: ({ graphQLErrors }) => {
      for (let error of graphQLErrors) {
        toast.error(error.message);
      }
    },
    onCompleted: (data: SignupMutation) => {
      if (data.signup) {
        toast.success(
          "Signed up successfully and requested email verification"
        );
      }
    },
  });

  const [triggerRegeneratePasswordRequest] =
    useRegeneratePasswordRequestMutation({
      fetchPolicy: "network-only",
      onError: ({ graphQLErrors, networkError, clientErrors }) => {
        graphQLErrors.forEach((error) => {
          setError(error);
        });
        clientErrors.forEach((error) => {
          setError(error as GraphQLError);
        });
        if (networkError) {
          setError(error);
        }
      },
      onCompleted: (data) => {
        setError(null);
        if (data.regeneratePasswordRequest) {
          toast.success("Email has been sent!");
        }
      },
    });

  const [triggerRegeneratePassword] = useRegeneratePasswordMutation({
    fetchPolicy: "network-only",
    onError: ({ graphQLErrors, networkError, clientErrors }) => {
      graphQLErrors.forEach((error) => {
        setError(error);
      });
      clientErrors.forEach((error) => {
        setError(error as GraphQLError);
      });
      if (networkError) {
        setError(error);
      }
    },
    onCompleted: (data) => {
      setError(null);
      if (data.regeneratePassword) {
        toast.success("Password successfully recovered");
        navigate("/signin");
      }
    },
  });

  const login = async (email: string, password: string) => {
    const hashedPassword = await sha256(password);
    await triggerLogin({
      variables: { email, password: hashedPassword },
    });
  };

  const getLinkedinToken = async () => {
    const randomState = Math.random().toString().split(".")[1];
    window.location.replace(
      `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=779bi6uesb43pe&scope=r_liteprofile%20r_emailaddress&state=${randomState}&redirect_uri=${
        process.env.REACT_APP_LINKEDIN_REDIRECT ||
        "http://localhost:3000/signin/linkedin"
      }`
    );
  };

  const continueWithLinkedin = useCallback(
    async (token: string) => {
      return await triggerContinueWithLinkedin({
        variables: {
          token,
        },
      });
    },
    [triggerContinueWithLinkedin]
  );

  const signup = async (
    email: string,
    password: string
  ): Promise<FetchResult> => {
    const hashedPassword = await sha256(password);

    return await triggerSignup({
      variables: {
        email,
        password: hashedPassword,
        repeatedPassword: hashedPassword,
      },
    });
  };

  const logout = async () => {
    setFromPath("/");
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
    setUserProfile(null);
    await client.clearStore();
    navigate("/signin");
  };

  const regeneratePasswordRequest = async (email: string) => {
    const { errors } = await triggerRegeneratePasswordRequest({
      variables: { email },
    });

    if (errors) {
      throw errors;
    }
  };

  const regeneratePassword = async (
    id: string,
    password: string,
    repeatedPassword: string
  ) => {
    await triggerRegeneratePassword({
      variables: {
        regeneratePasswordRequest: id,
        password,
        repeatedPassword,
      },
    });
  };

  const value = {
    user,
    setUser,
    userProfile,
    setUserProfile,
    login,
    getLinkedinToken,
    continueWithLinkedin,
    signup,
    logout,
    token,
    setToken,
    renewToken,
    setRenewToken,
    error,
    regeneratePasswordRequest,
    regeneratePassword,
    isLoggedIn: !!token,
    isOnboarding,
    isEmailVerified,
    emailVerificationRequest,
    requestEmailVerification,
    checkEmailVerification,
    email,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
