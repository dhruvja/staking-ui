import React, { useCallback, useMemo, useState } from "react";
import { Container, TextField, Divider, Alert } from "@mui/material";
import "./App.css";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  Transaction,
} from "@solana/web3.js";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import Navbar from "./Navbar";
import StakeButton from "./StakeButton";
import kp from "./keypair.json";
import general from "./idl/general.json";

const { SystemProgram } = web3;

// Create a keypair for the account that will hold the GIF data.
const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = web3.Keypair.fromSecretKey(secret);

// Get our program's id from the IDL file.
const programID = new PublicKey(general.metadata.address);

// Set our network to devnet.
const network = clusterApiUrl("devnet");

// Controls how we want to acknowledge when a transaction is "done".

const connection = new Connection(network, "confirmed");

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

  const getProvider = () => {
    if (!window.solana) return;
    const provider = new AnchorProvider(
      connection,
      window.solana,
      AnchorProvider.defaultOptions()
    );
    return provider;
  };

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
