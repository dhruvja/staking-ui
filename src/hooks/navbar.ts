import { useEffect } from "react";
import create from "zustand";

type NavbarState = {
  title: string;
  setTitle: (title: string) => void;
  resetTitle: () => void;
};

const INITIAL_TITLE = "Staking";

const useNabBarStore = create<NavbarState>((set) => ({
  title: INITIAL_TITLE,
  setTitle: (title) => set({ title }),
  resetTitle: () => set({ title: INITIAL_TITLE }),
}));

export const useGetNavBarTitle = () => {
  const title = useNabBarStore((state) => state.title);
  return title;
};

export const useSetNavBarTitle = (title: string) => {
  const setTitle = useNabBarStore((state) => state.setTitle);
  const resetTitle = useNabBarStore((state) => state.resetTitle);

  useEffect(() => {
    setTitle(title);
    return resetTitle;
  }, [resetTitle, setTitle, title]);
};
