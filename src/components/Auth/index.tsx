import { createContext, ReactNode, useState } from "react";

import { useLocation } from "react-router-dom";

import { useLoginAsStakerMutation, User } from "src/generated/graphql";

import { TOKEN_KEY } from "src/app-constants";
import { Profile } from "src/types/models";

type AuthContextType = {
  user: User | undefined;
  login: (data: {
    signature: string;
    message: string;
    publicKey: string;
  }) => void;
  token: string | null;
  logout: () => void;
  isLoggedIn: boolean;
  userProfile: Profile | undefined;
};

export const AuthContext = createContext<AuthContextType>(null!);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [userProfile, setUserProfile] = useState<Profile | undefined>(
    undefined
  );

  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY) || null
  );

  // const location = useLocation();

  // const [fromPath, setFromPath] = useState<string | undefined>(
  //   // @ts-ignore
  //   location?.state?.from?.pathname
  // );

  const [triggerLogin, { client }] = useLoginAsStakerMutation({
    onCompleted: (data) => {
      if (data.loginAsStaker) {
        setUser(data.loginAsStaker.user);
        setUserProfile(data.loginAsStaker.profile ?? undefined);
        setToken(data.loginAsStaker.token);
        localStorage.setItem(TOKEN_KEY, data.loginAsStaker.token);
      }
    },
  });

  const login = async (data: {
    signature: string;
    message: string;
    publicKey: string;
  }) => {
    await triggerLogin({
      variables: {
        loginData: {
          signature: data.signature,
          message: data.message,
          publicKey: data.publicKey,
        },
      },
    });
  };

  const logout = () => {};

  const value = {
    user,
    login,
    token,
    isLoggedIn: !!user && !!userProfile && !!token,
    logout,
    userProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
