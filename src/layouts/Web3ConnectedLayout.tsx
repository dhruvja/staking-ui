import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "src/components/Navbar";

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

  return (
    <div className="bg-app text-white h-screen w-screen grid grid-rows-[auto,1fr] overflow-hidden">
      <Navbar />
      <div className="overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Web3ConnectedLayout;
