import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { AnchorProvider } from "@project-serum/anchor";

export const useProvider = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  if (!wallet) {
    throw new Error("No wallet found");
  }

  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });

  return provider;
};
