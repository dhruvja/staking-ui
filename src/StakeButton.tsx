import React, { FC, useCallback, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { LoadingButton as Button } from "@mui/lab";

type Props = {
  amount: number;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
  confirmSuccess: VoidFunction;
};

const StakeButton: FC<Props> = ({ amount, setError, confirmSuccess }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    setLoading(true);
    if (!publicKey) throw new WalletNotConnectedError();

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey, // TODO: change
          lamports: 1, // TODO: change
        })
      );

      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, "processed");

      confirmSuccess();
    } catch (e) {
      setError((e as Error)?.message || "Error");
    } finally {
      setLoading(false);
    }
  }, [publicKey, sendTransaction, connection, confirmSuccess, setError]);

  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      disabled={!publicKey || loading}
      loading={loading}
    >
      STAKE
    </Button>
  );
};

export default StakeButton;
