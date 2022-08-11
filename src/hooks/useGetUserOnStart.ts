import { toast } from "react-toastify";

import { useGetUserQuery } from "src/generated/graphql";

import useAuth from "src/components/Auth/useAuth";

const useGetUserOnStart = () => {
  // const { setUser, token, setToken } = useAuth();

  // const query = useGetUserQuery({
  //   variables: {
  //     renewToken: token ?? "",
  //   },
  //   skip: !token,
  //   // onCompleted: (data) => {
  //   //   if (!data?.getUser) return;
  //   //   setUser(data.getUser.user);

  //   //   if (!data.getUser.profile) return;
  //   //   setUserProfile(data.getUser.profile);
  //   // },
  //   // onError: ({ message }) => {
  //   //   if (message === "jwt expired") {
  //   //     toast.error("Session expired");
  //   //   }
  //   //   setToken(null);
  //   //   setUser(null);
  //   //   setUserProfile(null);
  //   // },
  // });

  // if (!query.called) return true;
  // if (query.loading) return false;
  // if (query.error) return true;
  // if (isLoggedIn) return true;
  return false;
};

export default useGetUserOnStart;
