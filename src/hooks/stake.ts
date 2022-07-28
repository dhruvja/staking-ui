import { useApplications } from "src/hooks/applications";
import {
  StakedApplication,
  StakedApplicationWithApplication,
} from "src/types/models";

import create from "zustand";
import { persist } from "zustand/middleware";

const KEY = "DORSE_STAKED_APPLICATIONS";

interface StakedApplicationsState {
  stakedApplications: StakedApplication[];
  setStakedApplications: (stakedApplications: StakedApplication[]) => void;
  addStakedApplication: (stakedApplication: StakedApplication) => void;
  removeStakedApplication: (applicationId: string) => void;
}

const useStakedApplicationsStore = create<StakedApplicationsState>()(
  persist(
    (set) => ({
      stakedApplications: [],
      setStakedApplications: (stakedApplications: StakedApplication[]) => {
        set((state) => ({
          stakedApplications,
        }));
      },
      addStakedApplication: (stakedApplication: StakedApplication) => {
        set((state) => ({
          stakedApplications: [...state.stakedApplications, stakedApplication],
        }));
      },
      removeStakedApplication: (applicationId: string) => {
        set((state) => ({
          stakedApplications: state.stakedApplications.filter(
            (stakedApplication) =>
              stakedApplication.applicationId !== applicationId
          ),
        }));
      },
    }),
    {
      name: KEY,
    }
  )
);

export const useStakedApplications = () => {
  const applications = useApplications();
  const myStakedApplications = useStakedApplicationsStore(
    (state) => state.stakedApplications
  );

  const myStakedApplicationsWithApplications = myStakedApplications.map(
    (stakedApplication) => {
      const application = applications.find(
        (application) => application.id === stakedApplication.applicationId
      );

      return { ...stakedApplication, application };
    }
  );

  const myStakedApplicationsWithApplicationsFiltered =
    myStakedApplicationsWithApplications.filter(
      (stakedApplication) => !!stakedApplication.application
    ) as StakedApplicationWithApplication[];

  return myStakedApplicationsWithApplicationsFiltered;
};

export const useStakedApplication = (applicationId: string) => {
  const stakedApplications = useStakedApplications();
  const application = stakedApplications.find(
    (application) => application.applicationId === applicationId
  );
  return application;
};

export const useUnstakeApplication = () => {
  const removeStakedApplication = useStakedApplicationsStore(
    (state) => state.removeStakedApplication
  );

  return removeStakedApplication;
};

export const useStakeApplication = () => {
  const addStakedApplication = useStakedApplicationsStore(
    (state) => state.addStakedApplication
  );

  const stakeApplication = (applicationId: string, amount: number) => {
    const stakedApplication: StakedApplication = {
      applicationId,
      amount,
      date: new Date().toISOString(),
    };

    addStakedApplication(stakedApplication);
  };

  return stakeApplication;
};
