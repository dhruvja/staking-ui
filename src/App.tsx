import React, { useCallback, useMemo, useState } from "react";
import { Container, TextField, Divider, Alert } from "@mui/material";
import "./App.css";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import Navbar from "./Navbar";
import StakeButton from "./StakeButton";

require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isOk, setIsOk] = useState<boolean | undefined>(undefined);

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const confirmSuccess = useCallback(() => {
    setIsOk(true);
  }, []);

  const renderAlert = () => {
    if (isOk) {
      return (
        <Alert
          sx={{ mt: "16px" }}
          severity="success"
          onClose={() => {
            setIsOk(false);
          }}
        >
          Successful transaction
        </Alert>
      );
    }
    if (error) {
      return (
        <Alert
          sx={{ mt: "16px" }}
          severity="error"
          onClose={() => {
            setError(undefined);
          }}
        >
          {error}
        </Alert>
      );
    }
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Navbar />

          <div className="staking__wrapper">
            <Container className="staking__container" fixed>
              <TextField
                id="staking-amount"
                label="Amount"
                type="search"
                value={amount}
                onChange={(e) => {
                  if (!isNaN(Number(e.target.value))) {
                    setAmount(Number(e.target.value));
                  }
                }}
              />
              <Divider orientation="vertical" variant="middle" flexItem />
              <StakeButton
                amount={amount}
                setError={setError}
                confirmSuccess={confirmSuccess}
              />
              {renderAlert()}
            </Container>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
