import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ReactComponent as UsdcIcon } from "src/images/usdcIcon.svg";
import { Link, useNavigate } from "react-router-dom";
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
import { useUnstakeApplication } from "src/hooks/stake";

enum UnstakeModalStep {
  Confirm = "Confirm",
  //   Success = "Success",
}

export default function UnstakeModal(props: {
  application: Application;
  amount: number;
  children: (open: () => void) => React.ReactNode;
}) {
  const wallet = useAnchorWallet();
  const provider = useProvider();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(UnstakeModalStep.Confirm);
  const unstakeApplication = useUnstakeApplication();
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setStep(UnstakeModalStep.Confirm);
    setIsOpen(true);
  };

  const handleUnstake = async () => {
    const applicationProgram = getApplicationProgram(provider);
    const jobProgram = getJobProgram(provider);
    const generalProgram = getGeneralProgram(provider);
    const candidateStakingProgram = getCandidateStakingProgram(provider);

    const applicationId = props.application.id;
    const jobAdId = props.application.jobAd.id;
  };

  const handleUnstakeMock = async () => {
    unstakeApplication(props.application.id);
    navigate(paths.myStakedApplications.resolve());
    // setStep(UnstakeModalStep.Success);
  };

  const steps = {
    [UnstakeModalStep.Confirm]: () => (
      <Confirm
        amount={props.amount}
        closeModal={closeModal}
        handleUnstake={handleUnstakeMock}
      />
    ),
    // [UnstakeModalStep.Success]: () => (
    //   <Success closeModal={closeModal} amount={props.amount} />
    // ),
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

const Confirm = (props: {
  amount: number;
  closeModal: () => void;
  handleUnstake: () => void;
}) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-2xl font-semibold font-sora text-[#FCFCFD]"
      >
        Are you sure you want to Unstake?
      </Dialog.Title>

      <div className="mt-5 text-sm text-white text-opacity-60">
        Your transaction has been successful! You staked{" "}
        <span className="font-bold text-opacity-100">{props.amount} USDC</span>{" "}
        tokens. Your tokens are now locked in the staking contract.
      </div>

      <div className="mt-10 grid grid-cols-2 items-center justify-center gap-4">
        <button
          onClick={props.closeModal}
          className="rounded-full btn-transparent w-full py-4 font-bold text-base"
        >
          CANCEL
        </button>

        <button
          onClick={props.handleUnstake}
          className="rounded-full btn-blue w-full py-4 font-bold text-base text-white"
        >
          YES, SURE.
        </button>
      </div>
    </>
  );
};

const Success = (props: { amount: number; closeModal: () => void }) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-xl font-semibold font-sora text-[#FCFCFD]"
      >
        Successfully Unstaked!
      </Dialog.Title>

      <div className="mt-5 text-sm text-white text-opacity-60">
        Your transaction has been successful! You staked{" "}
        <span className="font-bold text-opacity-100">{props.amount} USDC</span>{" "}
        tokens. Your tokens are now locked in the staking contract.
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <Link
          to={paths.myStakedApplications.resolve()}
          className="btn-blue w-full py-4 font-bold text-base rounded-full"
        >
          BACK TO MY STAKES
        </Link>
      </div>
    </>
  );
};
