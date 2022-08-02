import { useEffect, useState } from "react";
import { Application, ApplicationStakeInfo } from "./../types/models";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { AnchorProvider } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import * as spl from "@solana/spl-token";
import {
  getApplicationProgram,
  getJobProgram,
  getGeneralProgram,
  getCandidateStakingProgram,
  tokenMint,
} from "src/utils/web3";

export const useWallet = () => {
  const wallet = useAnchorWallet();

  if (!wallet) {
    throw new Error("No wallet found");
  }

  return wallet;
};

export const useProvider = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });

  return provider;
};

export const useStakeWeb3 = () => {
  const wallet = useWallet();
  const provider = useProvider();

  const stake = async (application: Application, amount: number) => {
    const applicationProgram = getApplicationProgram(provider);
    const jobProgram = getJobProgram(provider);
    const generalProgram = getGeneralProgram(provider);
    const candidateStakingProgram = getCandidateStakingProgram(provider);

    const applicationId = application.id;
    const jobAdId = application.jobAd.id;

    const [generalPDA, generalBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("general")],
        generalProgram.programId
      );

    const [applicationPDA, applicationBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("application"),
          Buffer.from(applicationId.substring(0, 18)),
          Buffer.from(applicationId.substring(18, 36)),
        ],
        applicationProgram.programId
      );

    const [jobPDA, jobBump] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("jobfactory"),
        Buffer.from(jobAdId.substring(0, 18)),
        Buffer.from(jobAdId.substring(18, 36)),
      ],
      jobProgram.programId
    );

    const [candidatePDA, candidateBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("candidate"),
          Buffer.from(applicationId.substring(0, 18)),
          Buffer.from(applicationId.substring(18, 36)),
          wallet.publicKey.toBuffer(),
        ],
        candidateStakingProgram.programId
      );

    const [walletPDA, walletBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("wallet"),
          Buffer.from(jobAdId.substring(0, 18)),
          Buffer.from(jobAdId.substring(18, 36)),
        ],
        candidateStakingProgram.programId
      );

    const USDCMint = new PublicKey(tokenMint);

    const userTokenAccount = await spl.getAssociatedTokenAddress(
      USDCMint,
      wallet.publicKey,
      false,
      spl.TOKEN_PROGRAM_ID,
      spl.ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const deposit = new anchor.BN(amount * 10 ** 6);

    try {
      const state =
        await candidateStakingProgram.account.candidateParameter.fetch(
          candidatePDA
        );
      console.log("fetch candidate param", state.stakedAmount);
    } catch (error) {
      console.log("fetch candidate param err", error);

      try {
        const tx = await candidateStakingProgram.methods
          .initialize(jobAdId, applicationId, jobBump)
          .accounts({
            baseAccount: candidatePDA,
            jobAccount: jobPDA,
            escrowWalletState: walletPDA,
            tokenMint: USDCMint,
            authority: wallet.publicKey,
            jobProgram: jobProgram.programId,
            systemProgram: anchor.web3.SystemProgram.programId,
            tokenProgram: spl.TOKEN_PROGRAM_ID,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          })
          .rpc();
        console.log("initialize cand prog", tx);
      } catch (error) {
        console.log("initialize cand prog err", error);

        return;
      }
    }

    try {
      const tx = await candidateStakingProgram.methods
        .stake(
          jobAdId,
          applicationId,
          candidateBump,
          generalBump,
          applicationBump,
          jobBump,
          walletBump,
          deposit
        )
        .accounts({
          baseAccount: candidatePDA,
          authority: wallet.publicKey,
          tokenMint: USDCMint,
          generalAccount: generalPDA,
          jobAccount: jobPDA,
          applicationAccount: applicationPDA,
          generalProgram: generalProgram.programId,
          applicationProgram: applicationProgram.programId,
          jobProgram: jobProgram.programId,
          escrowWalletState: walletPDA,
          walletToWithdrawFrom: userTokenAccount,
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: spl.TOKEN_PROGRAM_ID,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          instruction: anchor.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        })
        .rpc();
      // await getBalance(wallet);
      console.log("stake tx", tx);
      return tx;
    } catch (error) {
      console.log("stake tx err ", error);

      return;
    }
  };

  return stake;
};

export const useUnstakeWeb3 = () => {
  const wallet = useWallet();
  const provider = useProvider();

  const unstake = async (application: Application, amount: number) => {
    const applicationProgram = getApplicationProgram(provider);
    const jobProgram = getJobProgram(provider);
    const generalProgram = getGeneralProgram(provider);
    const candidateStakingProgram = getCandidateStakingProgram(provider);

    const applicationId = application.id;
    const jobAdId = application.jobAd.id;

    const [generalPDA, generalBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("general")],
        generalProgram.programId
      );

    const [applicationPDA, applicationBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("application"),
          Buffer.from(applicationId.substring(0, 18)),
          Buffer.from(applicationId.substring(18, 36)),
        ],
        applicationProgram.programId
      );

    const [jobPDA, jobBump] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("jobfactory"),
        Buffer.from(jobAdId.substring(0, 18)),
        Buffer.from(jobAdId.substring(18, 36)),
      ],
      jobProgram.programId
    );

    const [candidatePDA, candidateBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("candidate"),
          Buffer.from(applicationId.substring(0, 18)),
          Buffer.from(applicationId.substring(18, 36)),
          wallet.publicKey.toBuffer(),
        ],
        candidateStakingProgram.programId
      );

    const [walletPDA, walletBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("wallet"), wallet.publicKey.toBuffer()],
        candidateStakingProgram.programId
      );

    const USDCMint = new PublicKey(tokenMint);

    const userTokenAccount = await spl.getAssociatedTokenAddress(
      USDCMint,
      wallet.publicKey,
      false,
      spl.TOKEN_PROGRAM_ID,
      spl.ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const deposit = new anchor.BN(amount);

    try {
      const state =
        await candidateStakingProgram.account.candidateParameter.fetch(
          candidatePDA
        );
      console.log(state.stakedAmount);
    } catch (error) {
      console.log(error);
      const tx = await candidateStakingProgram.methods
        .initialize(jobAdId, applicationId, jobBump)
        .accounts({
          baseAccount: candidatePDA,
          jobAccount: jobPDA,
          escrowWalletState: walletPDA,
          tokenMint: USDCMint,
          authority: wallet.publicKey,
          jobProgram: jobProgram.programId,
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: spl.TOKEN_PROGRAM_ID,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();
      console.log(tx);
    }

    try {
      const tx = await candidateStakingProgram.methods
        .unstake(
          jobAdId,
          applicationId,
          candidateBump,
          generalBump,
          applicationBump,
          jobBump,
          walletBump,
          deposit
        )
        .accounts({
          baseAccount: candidatePDA,
          jobAccount: jobPDA,
          authority: wallet.publicKey,
          tokenMint: USDCMint,
          generalAccount: generalPDA,
          applicationAccount: applicationPDA,
          generalProgram: generalProgram.programId,
          applicationProgram: applicationProgram.programId,
          jobProgram: jobProgram.programId,
          escrowWalletState: walletPDA,
          walletToWithdrawFrom: userTokenAccount,
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: spl.TOKEN_PROGRAM_ID,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();
      // await getBalance(wallet);
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };

  return unstake;
};

export const useBalance = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const [balance, setBalance] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      setIsLoading(true);

      const tokenMintKey = new anchor.web3.PublicKey(tokenMint);

      const userTokenAccount = await spl.getAssociatedTokenAddress(
        tokenMintKey,
        wallet.publicKey,
        false,
        spl.TOKEN_PROGRAM_ID,
        spl.ASSOCIATED_TOKEN_PROGRAM_ID
      );

      try {
        console.log("userTokenAccount", userTokenAccount);

        const balance = await spl.getAccount(connection, userTokenAccount);

        setBalance(Number(balance.amount) / 10 ** 6);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getBalance();
  }, [connection, wallet]);

  return { balance, isLoading };
};

export const useApplicationStakeInfo = (applicationId: Application["id"]) => {
  const provider = useProvider();
  const applicationProgram = getApplicationProgram(provider);

  const [info, setInfo] = useState<ApplicationStakeInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getInfo = async () => {
      setIsLoading(true);

      const [applicationPDA, applicationBump] =
        await anchor.web3.PublicKey.findProgramAddress(
          [
            Buffer.from("application"),
            Buffer.from(applicationId.substring(0, 18)),
            Buffer.from(applicationId.substring(18, 36)),
          ],
          applicationProgram.programId
        );
      const state = await applicationProgram.account.applicationParameter.fetch(
        applicationPDA
      );

      console.log({ state });

      setInfo({
        maxAllowedStaked: state.maxAllowedStaked as number,
        stakedAmount: state.stakedAmount as number,
      });
      setIsLoading(false);
    };

    getInfo();
  }, [applicationId]);

  return { info, isLoading };
};
