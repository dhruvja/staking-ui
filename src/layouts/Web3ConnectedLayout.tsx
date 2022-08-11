import { useWallet } from "@solana/wallet-adapter-react";
import { base58_to_binary } from "base58-js";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "src/components/Auth/useAuth";
import Loading from "src/components/Loading";

const ConnectToUser = () => {
  const { login } = useAuth();
  const wallet = useWallet();
  useEffect(() => {
    const asyncFn = async () => {
      const message = "dorse";
      const encodedMessage = new TextEncoder().encode(message);

      const signature = await wallet.signMessage?.(encodedMessage);

      const publicKey = wallet.publicKey?.toString();

      if (!publicKey) {
        throw new Error("No public key");
      }

      const bytes = base58_to_binary(publicKey.toString());
      console.log(bytes);
      console.log(
        Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString(
          "hex"
        )
      );

      const publicKeyHex = Buffer.from(
        bytes.buffer,
        bytes.byteOffset,
        bytes.byteLength
      ).toString("hex");

      if (!signature) {
        throw new Error("No signature");
      }

      const signatureHex = Buffer.from(
        signature.buffer,
        signature.byteOffset,
        signature.byteLength
      ).toString("hex");

      login({
        message,
        publicKey: publicKeyHex,
        signature: signatureHex,
      });
    };

    asyncFn();
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
};

const Web3ConnectedLayout = () => {
  const { connected } = useWallet();
  const { isLoggedIn } = useAuth();
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

  if (!isLoggedIn) {
    return <ConnectToUser />;
  }

  return <Outlet />;
};

export default Web3ConnectedLayout;
