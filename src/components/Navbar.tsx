import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <div className="border-b border-b-gray-700 p-5 flex items-center justify-between">
      <div className="text-3xl">Staking</div>
      <WalletMultiButton />
    </div>
  );
};

export default Navbar;
