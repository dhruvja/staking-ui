import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";

import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import * as spl from "@solana/spl-token";

import { useState } from "react";
import { useParams } from "react-router-dom";
import useApplication from "src/hooks/useApplication";
import { useProvider } from "src/hooks/web3";
import {
  getApplicationProgram,
  getCandidateStakingProgram,
  getGeneralProgram,
  getJobProgram,
  tokenMint,
} from "src/utils/web3";

const ApplicationPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const application = useApplication(applicationId);
  const [amount, setAmount] = useState<number>(0);
  const wallet = useAnchorWallet();
  const provider = useProvider();

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }

  const handleStake = async () => {
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
          wallet!.publicKey.toBuffer(),
        ],
        candidateStakingProgram.programId
      );

    const [walletPDA, walletBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("wallet"), wallet!.publicKey.toBuffer()],
        candidateStakingProgram.programId
      );

    const USDCMint = new PublicKey(tokenMint);

    let userTokenAccount = await spl.getAssociatedTokenAddress(
      USDCMint,
      wallet!.publicKey,
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
        .initialize(jobAdId, applicationId)
        .accounts({
          baseAccount: candidatePDA,
          escrowWalletState: walletPDA,
          tokenMint: USDCMint,
          authority: wallet!.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: spl.TOKEN_PROGRAM_ID,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();
      console.log(tx);
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
          authority: wallet!.publicKey,
          tokenMint: USDCMint,
          generalAccount: generalPDA,
          // jobAccount: jobPDA,
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

  return (
    <div className="p-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl">{application.jobAd.title}</h1>
        <div className="bg-card p-4 rounded-md flex flex-col gap-3">
          <h5 className="text-[#ADA7C1] text-xl">Description</h5>
          <p>{application.jobAd.description}</p>
        </div>
        <p>
          <b>{application.candidate.name}</b> applied to this job.
        </p>
      </div>

      <br />

      <div>
        <h2 className="text-xl">Stake</h2>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="bg-inherit border border-[#C4C4C4] p-3 rounded-md"
          />
          <button
            onClick={handleStake}
            className="rounded-3xl bg-violet-700 px-5"
          >
            Stake SOL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
