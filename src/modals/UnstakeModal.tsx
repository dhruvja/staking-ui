import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Application } from "src/types/models";
import { useUnstakeApplication } from "src/hooks/stake";

export default function UnstakeModal(props: {
  application: Application;
  amount: number;
  children: (open: () => void) => React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const unstakeApplication = useUnstakeApplication();

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const handleUnstakeMock = async () => {
    await unstakeApplication(props.application, props.amount);

    closeModal();
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
                  <Confirm
                    amount={props.amount}
                    closeModal={closeModal}
                    handleUnstake={handleUnstakeMock}
                  />
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
