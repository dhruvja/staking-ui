import { useWallet } from "@solana/wallet-adapter-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "src/components/Navbar";
import Tabbar from "src/components/Tabbar";

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
    <div className="bg-app text-white h-screen w-screen grid grid-cols-[auto,1fr] overflow-hidden">
      <Tabbar />
      <div className="grid grid-rows-[auto,1fr] overflow-hidden">
        <Navbar />
        <div className="overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Web3ConnectedLayout;
