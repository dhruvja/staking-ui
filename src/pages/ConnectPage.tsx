import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Navigate, useLocation } from "react-router-dom";
import { paths } from "src/pagesPaths";

const ConnectPage = () => {
  const { connected } = useWallet();
  const location = useLocation();

  if (connected) {
    const path = (location.state as { from?: string })?.from || paths.home;
    return <Navigate to={path} />;
  }

  return (
    <div className="bg-app text-white h-screen w-screen flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl">Connect to your wallet</h1>
      <WalletMultiButton />
    </div>
  );
};

export default ConnectPage;
