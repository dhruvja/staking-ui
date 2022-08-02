import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Web3ConnectedLayout = () => {
  const { connected } = useWallet();
  const location = useLocation();

  if (!connected) {
    return (
      <Navigate
        to="/connect"
        state={{
          from: location.pathname,
        }}
      />
    );
  }

  return <Outlet />;
};

export default Web3ConnectedLayout;
