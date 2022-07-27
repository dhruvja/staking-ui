import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as anchor from "@project-serum/anchor";
import * as spl from "@solana/spl-token";
import useApplication from "src/hooks/useApplication";
import { useProvider } from "src/hooks/web3";
import {
  getApplicationProgram,
  getJobProgram,
  getGeneralProgram,
  getCandidateStakingProgram,
  tokenMint,
} from "src/utils/web3";
import { paths } from "src/pagesPaths";
import { ReactComponent as BackArrowIcon } from "src/images/backArrow.svg";
import { ReactComponent as UsdcIcon } from "src/images/usdcIcon.svg";
import { Helmet } from "react-helmet";

const ApplicationStake = () => {
  const [amount, setAmount] = useState<number | "">("");
  const wallet = useAnchorWallet();
  const provider = useProvider();

  const applicationId = useParams().applicationId ?? "";
  const application = useApplication(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }

  const handleStake = async () => {
    if (amount === "" || amount === 0) return;
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
        .initialize(jobAdId, applicationId, jobBump)
        .accounts({
          baseAccount: candidatePDA,
          jobAccount: jobPDA,
          escrowWalletState: walletPDA,
          tokenMint: USDCMint,
          authority: wallet!.publicKey,
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
      <Helmet>
        <title>
          Dorse - Stake on {application.candidate.jobTitle} for{" "}
          {application.jobAd.title}
        </title>
      </Helmet>

      <div className="flex gap-5 items-center">
        <Link
          to={paths.application.resolve(application.id)}
          className="w-5 h-5"
        >
          <BackArrowIcon />
        </Link>
        <h2 className="font-sora text-5xl font-semibold text-gradient w-fit">
          Stake on a Job Post
        </h2>
      </div>
      <div className="mt-5 font-sora text-sm">
        Doing this you increase the chance ullamco est sit aliqua dolor do amet
        sint. Info about APY. Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet. Exercitation veniam
        consequat sunt nostrud amet.
      </div>

      <div className="mt-10">
        <div className="border border-[#C4C4C4] rounded-md px-4 py-2 grid grid-cols-[1fr,auto] gap-2">
          <div className="flex flex-col items-start">
            <span className="font-sora text-sm text-[#928CA6]">
              Total Stake
            </span>
            <input
              type="text"
              placeholder="0"
              className="bg-inherit text-[#5362E9] font-medium text-2xl appearance-none focus:outline-none w-full"
              value={amount}
              onChange={(e) => {
                if (e.target.value === "") {
                  setAmount("");
                  return;
                }

                if (e.target.value.match(/^[0-9]+$/)) {
                  setAmount(Number(e.target.value));
                }
              }}
            />
          </div>
          <div className="flex flex-col items-end">
            <span className="font-sora text-sm text-[#928CA6]">Balance: 0</span>
            <div className="font-medium text-2xl flex gap-2 items-center">
              <UsdcIcon width={23} height={23} />
              USDC
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <span className="font-sora font-semibold text-3xl text-[#9C81EA]">
          Staked: 34,234.7752
        </span>
      </div>

      <div className="mt-28 flex items-center justify-center">
        <button
          onClick={handleStake}
          className="rounded-3xl btn-degraded px-24 py-2 font-bold text-base"
          disabled={amount === "" || amount === 0}
        >
          Stake
        </button>
      </div>
    </div>
  );
};

export default ApplicationStake;
