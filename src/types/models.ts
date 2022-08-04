import { GetActiveApplicationsForStakersQuery } from "src/generated/graphql";
import { DeepExtractTypeSkipArrays } from "src/utils/type-utils";

export type JobApplicationForStaker = DeepExtractTypeSkipArrays<
  GetActiveApplicationsForStakersQuery,
  ["getActiveApplicationsForStakers"]
>;

export type JobAdForStaker = DeepExtractTypeSkipArrays<
  GetActiveApplicationsForStakersQuery,
  ["getActiveApplicationsForStakers", "jobAd"]
>;

export type CandidateForStaker = DeepExtractTypeSkipArrays<
  GetActiveApplicationsForStakersQuery,
  ["getActiveApplicationsForStakers", "candidate"]
>;

export interface StakedApplication {
  applicationId: string;
  date: string;
  amount: number;
}

export interface StakedApplicationWithApplication extends StakedApplication {
  application: JobApplicationForStaker;
}

export type ApplicationStakeInfo = {
  maxAllowedStaked: number;
  stakedAmount: number;
};
