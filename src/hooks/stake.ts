import { useStakeWeb3, useUnstakeWeb3 } from "src/hooks/web3";
import { JobApplicationForStaker } from "src/types/models";
import { useStakeMutation, useUnstakeMutation } from "src/generated/graphql";

export const useUnstakeApplication = () => {
  const [unstakeMutation, { loading }] = useUnstakeMutation();

  const unstake = useUnstakeWeb3();

  const unstakeApplication = async (
    application: JobApplicationForStaker,
    amount: number
  ) => {
    try {
      const tx = await unstake(application, amount);

      if (tx) {
        const res = await unstakeMutation({
          variables: {
            jobApplicationId: application.id,
            amount,
            transactionId: tx,
          },
        });

        console.log(res);

        return tx;
      }
    } catch {
      console.log("error in unstake application");
    }
  };

  return unstakeApplication;
};

export const useStakeApplication = () => {
  const [stakeMutation, { data, loading, error }] = useStakeMutation();

  const stake = useStakeWeb3();

  const stakeApplication = async (
    application: JobApplicationForStaker,
    amount: number
  ) => {
    try {
      const tx = await stake(application, amount);

      if (tx) {
        const res = await stakeMutation({
          variables: {
            jobApplicationId: application.id,
            transactionId: tx,
            amount,
          },
        });

        console.log("res", res);
      }

      return tx;
    } catch (e) {
      console.log("error in stake transaction", e);
    }

    return undefined;
  };

  return stakeApplication;
};
