import create from "zustand";

type StakeModalState = {
  isConfirmed: boolean;
  setIsConfirmed: (isConfirmed: boolean) => void;
  resetIsConfirmed: () => void;
};

const useStakeModalStore = create<StakeModalState>((set) => ({
  isConfirmed: false,
  setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
  resetIsConfirmed: () => set({ isConfirmed: false }),
}));

export const useGetStakeModalIsConfirmed = () => {
  const isConfirmed = useStakeModalStore((state) => state.isConfirmed);
  return isConfirmed;
};

export const useConfirmStakeModal = () => {
  const setIsConfirmed = useStakeModalStore((state) => state.setIsConfirmed);

  return () => {
    setIsConfirmed(true);
    console.log("confirmed");
  };
};

export const useResetIsConfirmedStakeModal = () => {
  const resetIsConfirmed = useStakeModalStore(
    (state) => state.resetIsConfirmed
  );

  return () => {
    resetIsConfirmed();
    console.log("reset");
  };
};
