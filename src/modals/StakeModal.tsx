import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ReactComponent as UsdcIcon } from "src/images/usdcIcon.svg";
import { Link } from "react-router-dom";
import { paths } from "src/pagesPaths";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import * as spl from "@solana/spl-token";

import { useProvider } from "src/hooks/web3";
import {
  getApplicationProgram,
  getJobProgram,
  getGeneralProgram,
  getCandidateStakingProgram,
  tokenMint,
} from "src/utils/web3";
import { Application } from "src/types/models";

enum StakeModalStep {
  StartStaking = "StartStaking",
  ConfirmStaking = "ConfirmStaking",
  SuccessStaking = "SuccessStaking",
}

export default function StakeModal(props: {
  application: Application;
  children: (open: () => void) => React.ReactNode;
}) {
  const wallet = useAnchorWallet();
  const provider = useProvider();
  const [amount, setAmount] = useState<number | "">("");
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(StakeModalStep.StartStaking);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setAmount("");
    setStep(StakeModalStep.StartStaking);
    setIsOpen(true);
  };

  const handleStake = async () => {
    if (amount === "" || amount === 0) return;
    const applicationProgram = getApplicationProgram(provider);
    const jobProgram = getJobProgram(provider);
    const generalProgram = getGeneralProgram(provider);
    const candidateStakingProgram = getCandidateStakingProgram(provider);

    const applicationId = props.application.id;
    const jobAdId = props.application.jobAd.id;

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

    console.log("stake");
    setStep(StakeModalStep.SuccessStaking);
  };

  const steps = {
    [StakeModalStep.StartStaking]: () => (
      <StartStaking
        amount={amount}
        setAmount={setAmount}
        closeModal={closeModal}
        goNext={() => setStep(StakeModalStep.ConfirmStaking)}
      />
    ),
    [StakeModalStep.ConfirmStaking]: () => (
      <ConfirmStaking
        amount={amount}
        closeModal={closeModal}
        goBack={() => setStep(StakeModalStep.StartStaking)}
        handleStake={handleStake}
      />
    ),
    [StakeModalStep.SuccessStaking]: () => (
      <SuccessStaking closeModal={closeModal} amount={amount} />
    ),
  };

  return (
    <>
      {props.children(openModal)}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#282646] bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-[#121121] py-12 px-8 text-left align-middle shadow-xl transition-all">
                  {steps[step]()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const StartStaking = (props: {
  amount: number | "";
  setAmount: (amount: number | "") => void;
  closeModal: () => void;
  goNext: () => void;
}) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-2xl font-semibold font-sora text-[#FCFCFD]"
      >
        Start Staking
      </Dialog.Title>
      <div className="mt-7">
        <div className="border border-[#C4C4C4] border-opacity-70 hover:border-opacity-100 focus-within:border-opacity-100 rounded-md px-4 py-2 grid grid-cols-[1fr,auto] gap-2 transition-colors ease-in-out">
          <div className="flex flex-col items-start">
            <span className="font-sora text-sm text-[#928CA6]">
              Stake amount
            </span>
            <input
              type="text"
              placeholder="0"
              className="bg-inherit text-[#5362E9] font-medium text-2xl appearance-none focus:outline-none w-full"
              value={props.amount}
              onChange={(e) => {
                if (e.target.value === "") {
                  props.setAmount("");
                  return;
                }

                if (e.target.value.match(/^[0-9]+$/)) {
                  props.setAmount(Number(e.target.value));
                }
              }}
            />
          </div>
          <div className="flex flex-col items-end">
            <span className="font-sora text-sm text-[#928CA6]">Balance: 0</span>
            <div className="font-medium text-2xl text-white flex gap-2 items-center">
              <UsdcIcon width={23} height={23} />
              USDC
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 font-sora">
        <div className="flex justify-between w-full">
          <span className="text-white text-base font-normal">
            Available staking amount
          </span>
          <span className="text-[#9C81EA] text-sm font-normal">
            0.00022893 ETH per USDT
          </span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-white text-base font-normal">
            Expected APY of your stake
          </span>
          <span className="text-[#00E0B8] text-sm font-normal">13,532%</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <button
          onClick={props.goNext}
          className="rounded-full btn-blue w-full py-4 font-bold text-base text-white"
          disabled={props.amount === "" || props.amount === 0}
        >
          STAKE NOW
        </button>
        <div>
          <button
            onClick={props.closeModal}
            className="btn-plain w-full py-4 font-bold text-base"
          >
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

const ConfirmStaking = (props: {
  amount: number | "";
  closeModal: () => void;
  goBack: () => void;
  handleStake: () => void;
}) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-2xl font-semibold font-sora text-[#FCFCFD]"
      >
        Confirm Stake
      </Dialog.Title>

      <div className="mt-7 flex flex-col gap-4 font-sora">
        <div className="flex justify-between w-full">
          <span className="text-white text-base font-normal">Stake Tokens</span>
          <span className="text-[#9C81EA] text-sm font-normal">
            {props.amount} USDC
          </span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-white text-base font-normal">
            Available staking amount
          </span>
          <span className="text-[#9C81EA] text-sm font-normal">
            0.00022893 ETH per USDT
          </span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-white text-base font-normal">
            Expected APY of your stake
          </span>
          <span className="text-[#00E0B8] text-sm font-normal">13,532%</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <button
          onClick={props.handleStake}
          className="rounded-full btn-blue w-full py-4 font-bold text-base text-white"
          disabled={props.amount === "" || props.amount === 0}
        >
          CONFIRM TRANSACTION
        </button>
        <div className="grid grid-cols-2 w-full">
          <button
            onClick={props.goBack}
            className="btn-plain w-full py-4 font-bold text-base"
          >
            BACK
          </button>
          <button
            onClick={props.closeModal}
            className="btn-plain w-full py-4 font-bold text-base"
          >
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

const SuccessStaking = (props: {
  amount: number | "";
  closeModal: () => void;
}) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-xl font-semibold font-sora text-[#FCFCFD]"
      >
        Successfully Staked!
      </Dialog.Title>

      <div className="mt-5 text-sm text-white text-opacity-60">
        Your transaction has been successful! You staked{" "}
        <span className="font-bold text-opacity-100">{props.amount} USDC</span>{" "}
        tokens. Your tokens are now locked in the staking contract.
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <Link
          to={paths.applications.resolve()}
          className="btn-blue w-full py-4 font-bold text-base rounded-full"
        >
          BACK TO APPLICATIONS
        </Link>
      </div>
    </>
  );
};
