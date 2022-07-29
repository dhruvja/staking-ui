import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useGetNavBarTitle } from "src/hooks/navbar";

const Navbar = () => {
  const title = useGetNavBarTitle();
  return (
    <div className="border-b border-b-gray-700 p-5 flex items-center justify-between">
      <div className="text-3xl">{title}</div>
      <WalletMultiButton />
    </div>
  );
};

export default Navbar;
