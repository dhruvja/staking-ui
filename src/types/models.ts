import { LoginAsStakerMutation } from "src/generated/graphql";
import { DeepExtractTypeSkipArrays } from "src/utils/type-utils";
export enum ApplicationStatusEnum {
  Canceled = "canceled",
  Hired = "hired",
  InReview = "in_review",
  Interviewing = "interviewing",
  Invalid = "invalid",
  Offer = "offer",
  OnSite = "on_site",
  Pending = "pending",
  Rejected = "rejected",
  TechnicalChallenge = "technical_challenge",
}
export enum ExperienceEnum {
  EarlyCareer = "early_career",
  MidLevel = "mid_level",
  Senior = "senior",
}
export enum FieldEnum {
  Engineering = "engineering",
  Finance = "finance",
  Marketing = "marketing",
  Operations = "operations",
  People = "people",
  Product = "product",
  Sales = "sales",
  Security = "security",
}
export enum JobStatusEnum {
  Active = "active",
  Finished = "finished",
}
export enum JobTypeEnum {
  Contractor = "contractor",
  FullTime = "full_time",
  Internship = "internship",
  PartTime = "part_time",
}

export type GetActiveApplicationsForStakersQuery = {
  __typename?: "Query";
  getActiveApplicationsForStakers?: Array<{
    __typename?: "JobApplicationForStaker";
    id: string;
    date: string;
    status: ApplicationStatusEnum;
    fosterScore: number;
    candidate: {
      __typename?: "CandidateProfileForStaker";
      field: Array<string>;
      location: string;
      jobTitle: string;
      companyName?: string | null;
      experience?: ExperienceEnum | null;
      techSkills?: Array<string> | null;
      softSkills?: Array<string> | null;
      about?: string | null;
      available?: boolean | null;
    };
    jobAd: {
      __typename?: "JobAd";
      id: string;
      title: string;
      description: string;
      responsibilities: string;
      requirements: string;
      jobSkills?: Array<string> | null;
      preferred: string;
      benefits: string;
      format: JobTypeEnum;
      date: string;
      location?: string | null;
      isRemote: boolean;
      currency: string;
      minSalary: number;
      maxSalary: number;
      status: JobStatusEnum;
      field: FieldEnum;
      experience: ExperienceEnum;
      company: {
        __typename?: "Company";
        id: string;
        name: string;
        photoUrl?: string | null;
        web?: string | null;
        description?: string | null;
      };
    };
  }> | null;
};

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

export type Profile = DeepExtractTypeSkipArrays<
  LoginAsStakerMutation,
  ["loginAsStaker", "profile"]
>;
