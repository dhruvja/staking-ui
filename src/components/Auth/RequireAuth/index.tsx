import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate, useLocation } from "react-router-dom";

import Loading from "src/components/Loading";

import useAuth from "../useAuth";

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  useWallet();

  if (isLoggedIn) return children;

  return <Loading />;
};

export default RequireAuth;
