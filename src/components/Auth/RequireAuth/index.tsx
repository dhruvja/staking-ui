import { Navigate, useLocation } from "react-router-dom";

import Loading from "src/components/Loading";

import useAuth from "../useAuth";

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props): JSX.Element => {
  const { user, userProfile, token, isOnboarding } = useAuth();
  const location = useLocation();

  if (user && userProfile && token) return children;

  if (!token)
    return <Navigate to="/signin" state={{ from: location }} replace />;

  if (isOnboarding) return <Navigate to="/signup/profile" />;

  return <Loading />;
};

export default RequireAuth;
