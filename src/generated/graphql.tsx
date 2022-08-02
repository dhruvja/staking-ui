import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AddInternalRecruiterToJobInput = {
  internalRecruiterId: Array<Scalars['ID']>;
  jobId: Scalars['String'];
};

export type ApplicationNote = {
  __typename?: 'ApplicationNote';
  date: Scalars['String'];
  id: Scalars['ID'];
  text: Scalars['String'];
  writtenBy: Profile;
};

export enum ApplicationStatusEnum {
  Canceled = 'canceled',
  Hired = 'hired',
  InReview = 'in_review',
  Interviewing = 'interviewing',
  Invalid = 'invalid',
  Offer = 'offer',
  OnSite = 'on_site',
  Pending = 'pending',
  Rejected = 'rejected',
  TechnicalChallenge = 'technical_challenge'
}

export type BascicResumeInfo = {
  __typename?: 'BascicResumeInfo';
  email: Scalars['String'];
  image: Scalars['String'];
  label: Scalars['String'];
  location: ResumeLocation;
  name: Scalars['String'];
  profiles?: Maybe<Array<ResumeProfile>>;
  summary: Scalars['String'];
};

export enum BlockchainEnum {
  Bitcoin = 'bitcoin',
  Ethereum = 'ethereum',
  Solana = 'solana'
}

export type CandidateData = {
  email: Scalars['String'];
  endorsementWithoutJob: EndorsementWithoutJob;
  githubUrl?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CandidateProfile = Profile & {
  __typename?: 'CandidateProfile';
  about?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Boolean']>;
  candidateSkills?: Maybe<Array<Scalars['String']>>;
  companyName?: Maybe<Scalars['String']>;
  experience?: Maybe<ExperienceEnum>;
  field: Array<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobTitle: Scalars['String'];
  linkedin?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  role: RoleEnum;
  softSkills?: Maybe<Array<Scalars['String']>>;
  techSkills?: Maybe<Array<Scalars['String']>>;
  walletInfo?: Maybe<WalletInfo>;
  web?: Maybe<Scalars['String']>;
};

export type CandidateSettingsInput = {
  about?: InputMaybe<Scalars['String']>;
  available?: InputMaybe<Scalars['Boolean']>;
  blockchain?: InputMaybe<BlockchainEnum>;
  blockchainAddress?: InputMaybe<Scalars['String']>;
  candidateSkills?: InputMaybe<Array<Scalars['String']>>;
  companyName?: InputMaybe<Scalars['String']>;
  experience: ExperienceEnum;
  field: Array<FieldEnum>;
  github?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  linkedin: Scalars['String'];
  location: Scalars['String'];
  softSkills: Array<Scalars['String']>;
  techSkills: Array<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

export type CandidateSkill = {
  name: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type CompanyHrProfile = Profile & {
  __typename?: 'CompanyHrProfile';
  about?: Maybe<Scalars['String']>;
  company: Company;
  id: Scalars['ID'];
  jobTitle: Scalars['String'];
  linkedin?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  role: RoleEnum;
};

export type CompanyHrSettingsInput = {
  about?: InputMaybe<Scalars['String']>;
  companyHrProfileID: Scalars['String'];
  jobTitle: Scalars['String'];
  location: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
};

export type Conversation = {
  __typename?: 'Conversation';
  messages: Array<Message>;
  with: Profile;
};

export type CreateCandidateProfileData = {
  about?: InputMaybe<Scalars['String']>;
  blockchain?: InputMaybe<BlockchainEnum>;
  blockchainAddress?: InputMaybe<Scalars['String']>;
  candidateSkills?: InputMaybe<Array<Scalars['String']>>;
  companyName?: InputMaybe<Scalars['String']>;
  experience: ExperienceEnum;
  field: Array<FieldEnum>;
  github?: InputMaybe<Scalars['String']>;
  jobTitle: Scalars['String'];
  linkedin: Scalars['String'];
  location: Scalars['String'];
  name: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
  softSkills: Array<Scalars['String']>;
  techSkills: Array<Scalars['String']>;
};

export enum EmploymentStatusEnum {
  Complete = 'Complete',
  Onboarding = 'Onboarding'
}

export type EndorsementWithoutJob = {
  incognitoMode: Scalars['Boolean'];
  relationship: Scalars['String'];
  skills: HardSkillsHighDemand;
  stand_out: Scalars['String'];
};

export enum ErrorMsg {
  ApplicationAlreadyExists = 'APPLICATION_ALREADY_EXISTS',
  ApplicationNotFound = 'APPLICATION_NOT_FOUND',
  CompanyHrProfileNotFound = 'COMPANY_HR_PROFILE_NOT_FOUND',
  CompanyNotFound = 'COMPANY_NOT_FOUND',
  CvNotFound = 'CV_NOT_FOUND',
  EmailAlreadyExist = 'EMAIL_ALREADY_EXIST',
  EmailAlreadyExistButNotVerified = 'EMAIL_ALREADY_EXIST_BUT_NOT_VERIFIED',
  EmailNotVerified = 'EMAIL_NOT_VERIFIED',
  EmailVerified = 'EMAIL_VERIFIED',
  IncorrectPassword = 'INCORRECT_PASSWORD',
  InvalidInput = 'INVALID_INPUT',
  InvalidReferral = 'INVALID_REFERRAL',
  JobAdNotFound = 'JOB_AD_NOT_FOUND',
  JobApplicationAlreadyExists = 'JOB_APPLICATION_ALREADY_EXISTS',
  JobApplicationNotFound = 'JOB_APPLICATION_NOT_FOUND',
  MessageNotFound = 'MESSAGE_NOT_FOUND',
  NoteNotFound = 'NOTE_NOT_FOUND',
  NotificationNotFound = 'NOTIFICATION_NOT_FOUND',
  ProfileAlreadyExists = 'PROFILE_ALREADY_EXISTS',
  ProfileNotFound = 'PROFILE_NOT_FOUND',
  QuestionNotFound = 'QUESTION_NOT_FOUND',
  ReferralAlreadyExists = 'REFERRAL_ALREADY_EXISTS',
  ReferralNotFound = 'REFERRAL_NOT_FOUND',
  RegistrationIncomplete = 'REGISTRATION_INCOMPLETE',
  RequestExpired = 'REQUEST_EXPIRED',
  RoleNotFound = 'ROLE_NOT_FOUND',
  SkillsAlreadyExist = 'SKILLS_ALREADY_EXIST',
  SkillsDoesNotExist = 'SKILLS_DOES_NOT_EXIST',
  SkillsNotFound = 'SKILLS_NOT_FOUND',
  SystemError = 'SYSTEM_ERROR',
  Unauthorized = 'UNAUTHORIZED',
  UserDoesNotHavePermissions = 'USER_DOES_NOT_HAVE_PERMISSIONS',
  UserNotFound = 'USER_NOT_FOUND'
}

export enum ExperienceEnum {
  EarlyCareer = 'early_career',
  MidLevel = 'mid_level',
  Senior = 'senior'
}

export enum FieldEnum {
  Engineering = 'engineering',
  Finance = 'finance',
  Marketing = 'marketing',
  Operations = 'operations',
  People = 'people',
  Product = 'product',
  Sales = 'sales',
  Security = 'security'
}

export enum GenderEnum {
  DoesNotDisclose = 'does_not_disclose',
  Female = 'female',
  Male = 'male',
  NonBinaryGender = 'non_binary_gender',
  Other = 'other'
}

export type HardSkillsHighDemand = {
  skillIDs: Array<Scalars['ID']>;
};

export type HardSkillsInHighDemand = {
  __typename?: 'HardSkillsInHighDemand';
  ID: Scalars['String'];
  Name: Scalars['String'];
};

export type Hire = {
  __typename?: 'Hire';
  application: JobApplication;
  id: Scalars['ID'];
  starting_date: Scalars['String'];
  yearly_salary: Scalars['Int'];
};

export type InputAnswer = {
  questionId: Scalars['ID'];
  text: Scalars['String'];
};

export type InputQuestion = {
  text: Scalars['String'];
};

export type InternalRecruiterProfile = Profile & {
  __typename?: 'InternalRecruiterProfile';
  about?: Maybe<Scalars['String']>;
  calendlyUrl: Scalars['String'];
  id: Scalars['ID'];
  jobTitle: Scalars['String'];
  linkedin?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  role: RoleEnum;
};

export type JobAd = {
  __typename?: 'JobAd';
  benefits: Scalars['String'];
  company: Company;
  createdBy: Profile;
  currency: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  editable: Scalars['Boolean'];
  experience: ExperienceEnum;
  field: FieldEnum;
  format: JobTypeEnum;
  id: Scalars['ID'];
  isRemote: Scalars['Boolean'];
  jobSkills?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
  maxSalary: Scalars['Int'];
  minSalary: Scalars['Int'];
  numberOfApplications: Scalars['Int'];
  preferred: Scalars['String'];
  referenceQuestions: Array<ReferenceQuestionnaire>;
  requirements: Scalars['String'];
  responsibilities: Scalars['String'];
  status: JobStatusEnum;
  title: Scalars['String'];
};

export type JobAdData = {
  benefits: Scalars['String'];
  companyId: Scalars['String'];
  currency: Scalars['String'];
  description: Scalars['String'];
  editable: Scalars['Boolean'];
  experience: ExperienceEnum;
  field: FieldEnum;
  format: JobTypeEnum;
  isRemote: Scalars['Boolean'];
  jobSkills?: InputMaybe<Array<Scalars['String']>>;
  location: Scalars['String'];
  maxSalary: Scalars['Int'];
  minSalary: Scalars['Int'];
  preferred: Scalars['String'];
  referenceQuestions: Array<InputQuestion>;
  requirements: Scalars['String'];
  responsibilities: Scalars['String'];
  title: Scalars['String'];
};

export type JobApplication = {
  __typename?: 'JobApplication';
  candidate: CandidateProfile;
  date: Scalars['String'];
  fosterScore: Scalars['Int'];
  hire?: Maybe<Hire>;
  id: Scalars['ID'];
  jobAd: JobAd;
  notes?: Maybe<Array<ApplicationNote>>;
  reference?: Maybe<Reference>;
  rejection?: Maybe<Rejection>;
  status: ApplicationStatusEnum;
};

export type JobFilters = {
  experiences?: InputMaybe<Array<ExperienceEnum>>;
  fields?: InputMaybe<Array<FieldEnum>>;
  formats?: InputMaybe<Array<JobTypeEnum>>;
  isRemote?: InputMaybe<Scalars['Boolean']>;
  minSalary?: InputMaybe<Scalars['Int']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
};

export type JobForCandidate = {
  __typename?: 'JobForCandidate';
  application?: Maybe<JobApplication>;
  jobAd: JobAd;
};

export type JobForCompany = {
  __typename?: 'JobForCompany';
  applications: Array<JobApplication>;
  hires?: Maybe<Array<Hire>>;
  jobAd: JobAd;
};

export type JobForInternalRecruiter = {
  __typename?: 'JobForInternalRecruiter';
  jobAd: JobAd;
};

export type JobSkill = {
  name: Scalars['String'];
};

export enum JobStatusEnum {
  Active = 'active',
  Finished = 'finished'
}

export enum JobTypeEnum {
  Contractor = 'contractor',
  FullTime = 'full_time',
  Internship = 'internship',
  PartTime = 'part_time'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  photoUrl?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  token: Scalars['String'];
  user: User;
};

export type Message = {
  __typename?: 'Message';
  date: Scalars['String'];
  from: Profile;
  id: Scalars['ID'];
  read: Scalars['Boolean'];
  text: Scalars['String'];
  to: Profile;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptReference?: Maybe<Scalars['ID']>;
  addApplicationNote?: Maybe<Scalars['Boolean']>;
  addInternalRecruiterToJob: Scalars['Boolean'];
  applyToJob?: Maybe<Scalars['ID']>;
  changeApplicationStatus?: Maybe<ApplicationStatusEnum>;
  changeJobAdStatus: Scalars['Boolean'];
  continueWithLinkedin?: Maybe<LoginResponse>;
  createCandidateProfile: LoginResponse;
  createCandidateSkills?: Maybe<Array<Scalars['ID']>>;
  createJobAd?: Maybe<Scalars['ID']>;
  createJobSkills?: Maybe<Array<Scalars['ID']>>;
  declineReference?: Maybe<Scalars['Boolean']>;
  deleteApplication?: Maybe<Scalars['Boolean']>;
  deleteApplicationNote?: Maybe<Scalars['Boolean']>;
  deleteJobAd?: Maybe<Scalars['Boolean']>;
  deleteMessage?: Maybe<Scalars['Boolean']>;
  deleteReference?: Maybe<Scalars['Boolean']>;
  editJobAd?: Maybe<JobAd>;
  emailVerification?: Maybe<LoginResponse>;
  hireCandidate?: Maybe<Scalars['ID']>;
  login?: Maybe<LoginResponse>;
  readMessage?: Maybe<Scalars['Boolean']>;
  readNotification?: Maybe<Scalars['Boolean']>;
  referCandidate: Scalars['ID'];
  referCandidateWithoutJob: Scalars['Boolean'];
  regeneratePassword: Scalars['Boolean'];
  regeneratePasswordRequest?: Maybe<RegeneratePasswordResponse>;
  requestEmailVerification: Scalars['Boolean'];
  sendMessage?: Maybe<Message>;
  signup?: Maybe<SignUpResponse>;
  submitFeedback?: Maybe<Scalars['String']>;
  switchRole?: Maybe<UserAndProfile>;
  updateCandidateSettings: CandidateProfile;
  updateCompanyHrSettings: CompanyHrProfile;
  uploadCV: Scalars['Boolean'];
  uploadProfilePicture?: Maybe<Scalars['String']>;
};


export type MutationAcceptReferenceArgs = {
  referenceId: Scalars['ID'];
};


export type MutationAddApplicationNoteArgs = {
  applicationId: Scalars['ID'];
  text: Scalars['String'];
};


export type MutationAddInternalRecruiterToJobArgs = {
  input: AddInternalRecruiterToJobInput;
};


export type MutationApplyToJobArgs = {
  jobAdId: Scalars['ID'];
};


export type MutationChangeApplicationStatusArgs = {
  applicationId: Scalars['ID'];
  status: ApplicationStatusEnum;
};


export type MutationChangeJobAdStatusArgs = {
  jobAdId: Scalars['ID'];
  status: JobStatusEnum;
};


export type MutationContinueWithLinkedinArgs = {
  token: Scalars['String'];
};


export type MutationCreateCandidateProfileArgs = {
  candidateData?: InputMaybe<CreateCandidateProfileData>;
};


export type MutationCreateCandidateSkillsArgs = {
  CandidateSkills?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationCreateJobAdArgs = {
  jobAdData: JobAdData;
};


export type MutationCreateJobSkillsArgs = {
  JobSkills?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationDeclineReferenceArgs = {
  referenceId: Scalars['String'];
};


export type MutationDeleteApplicationArgs = {
  applicationId: Scalars['ID'];
};


export type MutationDeleteApplicationNoteArgs = {
  applicationNoteId: Scalars['ID'];
};


export type MutationDeleteJobAdArgs = {
  jobAdId: Scalars['ID'];
};


export type MutationDeleteMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationDeleteReferenceArgs = {
  referenceId: Scalars['ID'];
};


export type MutationEditJobAdArgs = {
  jobAdData: JobAdData;
  jobAdId: Scalars['ID'];
};


export type MutationEmailVerificationArgs = {
  emailVerificationID: Scalars['String'];
};


export type MutationHireCandidateArgs = {
  hireData: HireData;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReadMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationReadNotificationArgs = {
  notificationId: Scalars['ID'];
};


export type MutationReferCandidateArgs = {
  referenceData: ReferCandidateData;
};


export type MutationReferCandidateWithoutJobArgs = {
  candidateData: CandidateData;
};


export type MutationRegeneratePasswordArgs = {
  password: Scalars['String'];
  regeneratePasswordRequest: Scalars['ID'];
  repeatedPassword: Scalars['String'];
};


export type MutationRegeneratePasswordRequestArgs = {
  email: Scalars['String'];
};


export type MutationRequestEmailVerificationArgs = {
  email: Scalars['String'];
};


export type MutationSendMessageArgs = {
  text: Scalars['String'];
  toProfileID: Scalars['ID'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  repeatedPassword: Scalars['String'];
};


export type MutationSubmitFeedbackArgs = {
  feedback: Scalars['String'];
};


export type MutationSwitchRoleArgs = {
  newRole: RoleEnum;
};


export type MutationUpdateCandidateSettingsArgs = {
  candidateSettings: CandidateSettingsInput;
};


export type MutationUpdateCompanyHrSettingsArgs = {
  companyHrSettings: CompanyHrSettingsInput;
};


export type MutationUploadCvArgs = {
  cv: Scalars['Upload'];
};


export type MutationUploadProfilePictureArgs = {
  profilePicture: Scalars['Upload'];
};

export type Notification = {
  __typename?: 'Notification';
  application?: Maybe<JobApplication>;
  date: Scalars['String'];
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  linkID: Scalars['String'];
  read: Scalars['Boolean'];
  triggerUserProfile?: Maybe<Profile>;
  type: NotificationTypeEnum;
};

export enum NotificationTypeEnum {
  Application = 'application',
  ApplicationStatusChange = 'application_status_change',
  Hire = 'hire',
  NewNote = 'new_note',
  PaymentDue = 'payment_due',
  Reference = 'reference',
  ReferenceWithoutJob = 'reference_without_job',
  Rejection = 'rejection'
}

export enum OrderEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type Profile = {
  id: Scalars['ID'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  role: RoleEnum;
};

export type Query = {
  __typename?: 'Query';
  activeProfile?: Maybe<Profile>;
  application?: Maybe<JobApplication>;
  candidateApplications: Array<JobApplication>;
  candidateReferrals: Array<JobApplication>;
  companies: Array<Company>;
  conversation?: Maybe<Conversation>;
  conversations: Array<Conversation>;
  getCV?: Maybe<Scalars['String']>;
  getCandidate?: Maybe<CandidateProfile>;
  getCandidateBySkills?: Maybe<Array<CandidateProfile>>;
  getCandidateResume?: Maybe<Resume>;
  getCandidates?: Maybe<Array<CandidateProfile>>;
  getHardSkillsInHighDemand: Array<HardSkillsInHighDemand>;
  getInternalRecruitersAssignedToJob: Array<InternalRecruiterProfile>;
  getJobsBySkills?: Maybe<Array<JobAd>>;
  getListOfCandidateSkills?: Maybe<Array<Scalars['String']>>;
  getListOfJobSkills?: Maybe<Array<Scalars['String']>>;
  getReference?: Maybe<Reference>;
  getUser?: Maybe<LoginResponse>;
  jobForCandidate?: Maybe<JobForCandidate>;
  jobForCompany?: Maybe<JobForCompany>;
  jobForPublic?: Maybe<JobAd>;
  jobsForCandidate: Array<JobForCandidate>;
  jobsForCompany: Array<JobAd>;
  jobsForInternalRecruiter: Array<JobForInternalRecruiter>;
  jobsPublic: Array<JobAd>;
  myPendingReferences: Array<ReferenceForReferrer>;
  myReferralsWithoutJob: Array<ReferralWithoutJobResponse>;
  notifications: Array<Notification>;
  profile?: Maybe<Profile>;
  referenceForCandidate?: Maybe<ReferenceForCandidate>;
  referenceForRecruiter?: Maybe<ReferenceForRecruiter>;
  referenceForReferrer?: Maybe<ReferenceForReferrer>;
  referralWithoutJob?: Maybe<ReferralWithoutJobResponse>;
  referralsWithoutJob: Array<ReferralWithoutJobResponse>;
  userSuggestions: Array<UserSuggestion>;
};


export type QueryActiveProfileArgs = {
  userId: Scalars['ID'];
};


export type QueryApplicationArgs = {
  applicationId: Scalars['ID'];
};


export type QueryCandidateApplicationsArgs = {
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
};


export type QueryCandidateReferralsArgs = {
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
};


export type QueryConversationArgs = {
  otherProfileID: Scalars['ID'];
};


export type QueryGetCvArgs = {
  userId: Scalars['ID'];
};


export type QueryGetCandidateArgs = {
  candidateID: Scalars['ID'];
};


export type QueryGetCandidateBySkillsArgs = {
  skills?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetCandidateResumeArgs = {
  candidateID: Scalars['String'];
};


export type QueryGetInternalRecruitersAssignedToJobArgs = {
  jobId: Scalars['ID'];
};


export type QueryGetJobsBySkillsArgs = {
  skills?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetReferenceArgs = {
  refreenceID: Scalars['String'];
};


export type QueryGetUserArgs = {
  renewToken: Scalars['String'];
};


export type QueryJobForCandidateArgs = {
  jobAdId: Scalars['ID'];
};


export type QueryJobForCompanyArgs = {
  jobAdId: Scalars['ID'];
};


export type QueryJobForPublicArgs = {
  jobAdId: Scalars['ID'];
};


export type QueryJobsForCandidateArgs = {
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
};


export type QueryJobsForCompanyArgs = {
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
};


export type QueryJobsForInternalRecruiterArgs = {
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
};


export type QueryJobsPublicArgs = {
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
};


export type QueryProfileArgs = {
  profileID: Scalars['ID'];
};


export type QueryReferenceForCandidateArgs = {
  referenceId: Scalars['String'];
};


export type QueryReferenceForRecruiterArgs = {
  referenceId: Scalars['String'];
};


export type QueryReferenceForReferrerArgs = {
  referenceId: Scalars['String'];
};


export type QueryReferralWithoutJobArgs = {
  referralWithoutJobId: Scalars['String'];
};


export type QueryUserSuggestionsArgs = {
  text: Scalars['String'];
};

export type ReferCandidateData = {
  answers: Array<InputAnswer>;
  email: Scalars['String'];
  jobId: Scalars['ID'];
  linkedin: Scalars['String'];
  name: Scalars['String'];
};

export type Reference = {
  __typename?: 'Reference';
  answers: Array<ReferenceAnswer>;
  date: Scalars['String'];
  id: Scalars['ID'];
  referrer: Profile;
};

export type ReferenceAnswer = {
  __typename?: 'ReferenceAnswer';
  application: JobApplication;
  id: Scalars['ID'];
  question: ReferenceQuestionnaire;
  text: Scalars['String'];
};

export type ReferenceForCandidate = {
  __typename?: 'ReferenceForCandidate';
  applicationId?: Maybe<Scalars['String']>;
  candidateName: Scalars['String'];
  email: Scalars['String'];
  jobAd: JobAd;
  linkedinUrl: Scalars['String'];
  referee?: Maybe<Profile>;
  reference: Reference;
  status: ReferenceStatus;
};

export type ReferenceForRecruiter = {
  __typename?: 'ReferenceForRecruiter';
  applicationId?: Maybe<Scalars['String']>;
  candidateName: Scalars['String'];
  email: Scalars['String'];
  jobAd: JobAd;
  linkedinUrl: Scalars['String'];
  referee?: Maybe<Profile>;
  reference: Reference;
  status: ReferenceStatus;
};

export type ReferenceForReferrer = {
  __typename?: 'ReferenceForReferrer';
  applicationId?: Maybe<Scalars['String']>;
  candidateName: Scalars['String'];
  email: Scalars['String'];
  jobAd: JobAd;
  linkedinUrl: Scalars['String'];
  referee?: Maybe<Profile>;
  reference: Reference;
  status: ReferenceStatus;
};

export type ReferenceQuestionnaire = {
  __typename?: 'ReferenceQuestionnaire';
  id: Scalars['String'];
  text: Scalars['String'];
};

export enum ReferenceStatus {
  Accepted = 'accepted',
  Pending = 'pending',
  Rejected = 'rejected'
}

export enum ReferralAcceptanceStatus {
  Accepted = 'accepted',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type ReferralWithoutJobResponse = {
  __typename?: 'ReferralWithoutJobResponse';
  date: Scalars['String'];
  email: Scalars['String'];
  githubUrl?: Maybe<Scalars['String']>;
  hardSkills: Array<Scalars['String']>;
  id: Scalars['ID'];
  isIncognito: Scalars['Boolean'];
  linkedinUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  referrer: CandidateProfile;
  relationshipWithCandidate: Scalars['String'];
  standOut: Scalars['String'];
};

export type Rejection = {
  __typename?: 'Rejection';
  note?: Maybe<ApplicationNote>;
};

export type Resume = {
  __typename?: 'Resume';
  basic: BascicResumeInfo;
  skills: Array<SkillsResume>;
  work: Array<WorkResumeInfo>;
};

export type ResumeLocation = {
  __typename?: 'ResumeLocation';
  city: Scalars['String'];
  countryCode: Scalars['String'];
};

export type ResumeProfile = {
  __typename?: 'ResumeProfile';
  network: Scalars['String'];
  url: Scalars['String'];
  username: Scalars['String'];
};

export enum RoleEnum {
  Candidate = 'candidate',
  CompanyUser = 'company_user',
  InternalRecruiter = 'internal_recruiter',
  Staker = 'staker'
}

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  token: Scalars['String'];
  user: User;
};

export enum SkillTypeEnum {
  Soft = 'Soft',
  Tech = 'Tech'
}

export type SkillsResume = {
  __typename?: 'SkillsResume';
  keywords: Array<Scalars['String']>;
  level: Scalars['String'];
  name: Scalars['String'];
};

export type SortJobsBy = {
  key?: InputMaybe<SortJobsByKeyEnum>;
  order?: InputMaybe<OrderEnum>;
};

export enum SortJobsByKeyEnum {
  Created = 'created',
  Experience = 'experience',
  MaxSalary = 'maxSalary',
  MinSalary = 'minSalary',
  Title = 'title'
}

export type StakerProfile = Profile & {
  __typename?: 'StakerProfile';
  about?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobTitle: Scalars['String'];
  linkedin?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  role: RoleEnum;
  walletInfo: Array<WalletInfo>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageCreated?: Maybe<Message>;
  notificationCreated?: Maybe<Notification>;
};


export type SubscriptionMessageCreatedArgs = {
  jwtToken: Scalars['String'];
};


export type SubscriptionNotificationCreatedArgs = {
  jwtToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  activeRole?: Maybe<RoleEnum>;
  email: Scalars['String'];
  gender: GenderEnum;
  id: Scalars['ID'];
  name: Scalars['String'];
  roles?: Maybe<Array<RoleEnum>>;
};

export type UserAndProfile = {
  __typename?: 'UserAndProfile';
  profile: Profile;
  user: User;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  id: Scalars['ID'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  role: RoleEnum;
};

export type UserSuggestion = {
  __typename?: 'UserSuggestion';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  profile: Profile;
};

export type WalletInfo = {
  __typename?: 'WalletInfo';
  blockchain: BlockchainEnum;
  id: Scalars['ID'];
  walletAddress: Scalars['String'];
};

export type WorkResumeInfo = {
  __typename?: 'WorkResumeInfo';
  endData?: Maybe<Scalars['String']>;
  highlights?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  position: Scalars['String'];
  startDate: Scalars['String'];
  summary: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type HireData = {
  applicationId: Scalars['String'];
  jobId: Scalars['String'];
  keepOpen: Scalars['Boolean'];
  startingDate: Scalars['String'];
  yearlySalary: Scalars['Int'];
};

export type RegeneratePasswordResponse = {
  __typename?: 'regeneratePasswordResponse';
  ID: Scalars['String'];
  ValidUntil: Scalars['String'];
};

export type UserDataFragment = { __typename?: 'User', id: string, name: string, gender: GenderEnum, email: string, activeRole?: RoleEnum | null, roles?: Array<RoleEnum> | null };

type BasicProfile_CandidateProfile_Fragment = { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum };

type BasicProfile_CompanyHrProfile_Fragment = { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum };

type BasicProfile_InternalRecruiterProfile_Fragment = { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum };

type BasicProfile_StakerProfile_Fragment = { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum };

export type BasicProfileFragment = BasicProfile_CandidateProfile_Fragment | BasicProfile_CompanyHrProfile_Fragment | BasicProfile_InternalRecruiterProfile_Fragment | BasicProfile_StakerProfile_Fragment;

export type ConversationDataFragment = { __typename?: 'Conversation', with: { __typename?: 'CandidateProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, messages: Array<{ __typename?: 'Message', id: string, text: string, date: string, read: boolean, from: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } }> };

export type ApplicationDataFragment = { __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, fosterScore: number, date: string, hire?: { __typename?: 'Hire', id: string, starting_date: string, yearly_salary: number } | null, candidate: { __typename?: 'CandidateProfile', id: string, linkedin?: string | null, photoUrl?: string | null, location: string, name: string, web?: string | null, github?: string | null }, reference?: { __typename?: 'Reference', id: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> } | null };

type FullProfile_CandidateProfile_Fragment = { __typename?: 'CandidateProfile', location: string, field: Array<string>, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null };

type FullProfile_CompanyHrProfile_Fragment = { __typename?: 'CompanyHrProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, web?: string | null, description?: string | null } };

type FullProfile_InternalRecruiterProfile_Fragment = { __typename?: 'InternalRecruiterProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, calendlyUrl: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum };

type FullProfile_StakerProfile_Fragment = { __typename?: 'StakerProfile', jobTitle: string, companyName?: string | null, about?: string | null, github?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletsInfo: Array<{ __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string }> };

export type FullProfileFragment = FullProfile_CandidateProfile_Fragment | FullProfile_CompanyHrProfile_Fragment | FullProfile_InternalRecruiterProfile_Fragment | FullProfile_StakerProfile_Fragment;

export type JobAdDataFragment = { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> };

export type AcceptReferenceMutationVariables = Exact<{
  referenceId: Scalars['ID'];
}>;


export type AcceptReferenceMutation = { __typename?: 'Mutation', acceptReference?: string | null };

export type AddApplicationNoteMutationVariables = Exact<{
  applicationId: Scalars['ID'];
  text: Scalars['String'];
}>;


export type AddApplicationNoteMutation = { __typename?: 'Mutation', addApplicationNote?: boolean | null };

export type ApplyToJobMutationVariables = Exact<{
  jobAdId: Scalars['ID'];
}>;


export type ApplyToJobMutation = { __typename?: 'Mutation', applyToJob?: string | null };

export type ChangeApplicationStatusMutationVariables = Exact<{
  applicationId: Scalars['ID'];
  status: ApplicationStatusEnum;
}>;


export type ChangeApplicationStatusMutation = { __typename?: 'Mutation', changeApplicationStatus?: ApplicationStatusEnum | null };

export type ContinueWithLinkedinMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ContinueWithLinkedinMutation = { __typename?: 'Mutation', continueWithLinkedin?: { __typename?: 'LoginResponse', token: string, photoUrl?: string | null, user: { __typename?: 'User', id: string, name: string, gender: GenderEnum, email: string, activeRole?: RoleEnum | null, roles?: Array<RoleEnum> | null }, profile?: { __typename?: 'CandidateProfile', location: string, field: Array<string>, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null } | { __typename?: 'CompanyHrProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, web?: string | null, description?: string | null } } | { __typename?: 'InternalRecruiterProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, calendlyUrl: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', jobTitle: string, companyName?: string | null, about?: string | null, github?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletsInfo: Array<{ __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string }> } | null } | null };

export type CreateCandidateProfileMutationVariables = Exact<{
  candidateData: CreateCandidateProfileData;
}>;


export type CreateCandidateProfileMutation = { __typename?: 'Mutation', createCandidateProfile: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', id: string, name: string, gender: GenderEnum, email: string, activeRole?: RoleEnum | null, roles?: Array<RoleEnum> | null }, profile?: { __typename?: 'CandidateProfile', location: string, field: Array<string>, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null } | { __typename?: 'CompanyHrProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, web?: string | null, description?: string | null } } | { __typename?: 'InternalRecruiterProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, calendlyUrl: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', jobTitle: string, companyName?: string | null, about?: string | null, github?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletsInfo: Array<{ __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string }> } | null } };

export type CreateJobAdMutationVariables = Exact<{
  jobAdData: JobAdData;
}>;


export type CreateJobAdMutation = { __typename?: 'Mutation', createJobAd?: string | null };

export type DeclineReferenceMutationVariables = Exact<{
  referenceId: Scalars['String'];
}>;


export type DeclineReferenceMutation = { __typename?: 'Mutation', declineReference?: boolean | null };

export type DeleteJobAdMutationVariables = Exact<{
  jobAdId: Scalars['ID'];
}>;


export type DeleteJobAdMutation = { __typename?: 'Mutation', deleteJobAd?: boolean | null };

export type DeleteReferenceMutationVariables = Exact<{
  referenceId: Scalars['ID'];
}>;


export type DeleteReferenceMutation = { __typename?: 'Mutation', deleteReference?: boolean | null };

export type EditJobAdMutationVariables = Exact<{
  jobAdId: Scalars['ID'];
  jobAdData: JobAdData;
}>;


export type EditJobAdMutation = { __typename?: 'Mutation', editJobAd?: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> } | null };

export type EmailVerificationMutationVariables = Exact<{
  emailVerificationID: Scalars['String'];
}>;


export type EmailVerificationMutation = { __typename?: 'Mutation', emailVerification?: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', email: string, name: string } } | null };

export type HireCandidateMutationVariables = Exact<{
  hireData: HireData;
}>;


export type HireCandidateMutation = { __typename?: 'Mutation', hireCandidate?: string | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', id: string, name: string, gender: GenderEnum, email: string, activeRole?: RoleEnum | null, roles?: Array<RoleEnum> | null }, profile?: { __typename?: 'CandidateProfile', location: string, field: Array<string>, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null } | { __typename?: 'CompanyHrProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, web?: string | null, description?: string | null } } | { __typename?: 'InternalRecruiterProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, calendlyUrl: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', jobTitle: string, companyName?: string | null, about?: string | null, github?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletsInfo: Array<{ __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string }> } | null } | null };

export type ReadMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;


export type ReadMessageMutation = { __typename?: 'Mutation', readMessage?: boolean | null };

export type ReadNotificationMutationVariables = Exact<{
  notificationId: Scalars['ID'];
}>;


export type ReadNotificationMutation = { __typename?: 'Mutation', readNotification?: boolean | null };

export type ReferCandidateMutationVariables = Exact<{
  referenceData: ReferCandidateData;
}>;


export type ReferCandidateMutation = { __typename?: 'Mutation', referCandidate: string };

export type ReferCandidateWithoutJobMutationVariables = Exact<{
  candidateData: CandidateData;
}>;


export type ReferCandidateWithoutJobMutation = { __typename?: 'Mutation', referCandidateWithoutJob: boolean };

export type RegeneratePasswordMutationVariables = Exact<{
  regeneratePasswordRequest: Scalars['ID'];
  password: Scalars['String'];
  repeatedPassword: Scalars['String'];
}>;


export type RegeneratePasswordMutation = { __typename?: 'Mutation', regeneratePassword: boolean };

export type RegeneratePasswordRequestMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RegeneratePasswordRequestMutation = { __typename?: 'Mutation', regeneratePasswordRequest?: { __typename?: 'regeneratePasswordResponse', ID: string, ValidUntil: string } | null };

export type RequestEmailVerificationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestEmailVerificationMutation = { __typename?: 'Mutation', requestEmailVerification: boolean };

export type SendMessageMutationVariables = Exact<{
  toProfileId: Scalars['ID'];
  text: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage?: { __typename?: 'Message', id: string, date: string, text: string, read: boolean, from: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } } | null };

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  repeatedPassword: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'SignUpResponse', token: string, user: { __typename?: 'User', id: string, name: string, gender: GenderEnum, email: string, activeRole?: RoleEnum | null, roles?: Array<RoleEnum> | null } } | null };

export type SwitchRoleMutationVariables = Exact<{
  newRole: RoleEnum;
}>;


export type SwitchRoleMutation = { __typename?: 'Mutation', switchRole?: { __typename?: 'UserAndProfile', user: { __typename?: 'User', id: string, name: string, gender: GenderEnum, email: string, activeRole?: RoleEnum | null, roles?: Array<RoleEnum> | null }, profile: { __typename?: 'CandidateProfile', location: string, field: Array<string>, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null } | { __typename?: 'CompanyHrProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, web?: string | null, description?: string | null } } | { __typename?: 'InternalRecruiterProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, calendlyUrl: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', jobTitle: string, companyName?: string | null, about?: string | null, github?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletsInfo: Array<{ __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string }> } } | null };

export type UpdateCandidateSettingsMutationVariables = Exact<{
  candidateSettings: CandidateSettingsInput;
}>;


export type UpdateCandidateSettingsMutation = { __typename?: 'Mutation', updateCandidateSettings: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum, location: string, field: Array<string>, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, linkedin?: string | null, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null } };

export type UpdateCompanyHrSettingsMutationVariables = Exact<{
  companyHrSettings: CompanyHrSettingsInput;
}>;


export type UpdateCompanyHrSettingsMutation = { __typename?: 'Mutation', updateCompanyHrSettings: { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum, location: string, jobTitle: string, about?: string | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } } };

export type UploadCvMutationVariables = Exact<{
  cv: Scalars['Upload'];
}>;


export type UploadCvMutation = { __typename?: 'Mutation', uploadCV: boolean };

export type UploadProfilePictureMutationVariables = Exact<{
  profilePicture: Scalars['Upload'];
}>;


export type UploadProfilePictureMutation = { __typename?: 'Mutation', uploadProfilePicture?: string | null };

export type GetApplicationQueryVariables = Exact<{
  applicationId: Scalars['ID'];
}>;


export type GetApplicationQuery = { __typename?: 'Query', application?: { __typename?: 'JobApplication', id: string, date: string, status: ApplicationStatusEnum, fosterScore: number, candidate: { __typename?: 'CandidateProfile', id: string, name: string, role: RoleEnum, photoUrl?: string | null, jobTitle: string, companyName?: string | null, location: string, web?: string | null, linkedin?: string | null, github?: string | null, softSkills?: Array<string> | null, techSkills?: Array<string> | null, available?: boolean | null, about?: string | null, field: Array<string>, experience?: ExperienceEnum | null }, reference?: { __typename?: 'Reference', id: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> } | null, notes?: Array<{ __typename?: 'ApplicationNote', id: string, text: string, date: string, writtenBy: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } }> | null, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> } } | null };

export type GetCandidateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCandidateQuery = { __typename?: 'Query', getCandidate?: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, field: Array<string>, jobTitle: string, github?: string | null, location: string, linkedin?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, candidateSkills?: Array<string> | null, about?: string | null, web?: string | null, companyName?: string | null, available?: boolean | null } | null };

export type GetCandidateApplicationsQueryVariables = Exact<{
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
}>;


export type GetCandidateApplicationsQuery = { __typename?: 'Query', candidateApplications: Array<{ __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, fosterScore: number, date: string, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, hire?: { __typename?: 'Hire', id: string, starting_date: string, yearly_salary: number } | null, candidate: { __typename?: 'CandidateProfile', id: string, linkedin?: string | null, photoUrl?: string | null, location: string, name: string, web?: string | null, github?: string | null }, reference?: { __typename?: 'Reference', id: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> } | null }> };

export type GetCandidatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCandidatesQuery = { __typename?: 'Query', getCandidates?: Array<{ __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, field: Array<string>, jobTitle: string, github?: string | null, available?: boolean | null, experience?: ExperienceEnum | null }> | null };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string, description?: string | null, photoUrl?: string | null, web?: string | null }> };

export type GetConversationQueryVariables = Exact<{
  otherProfileId: Scalars['ID'];
}>;


export type GetConversationQuery = { __typename?: 'Query', conversation?: { __typename?: 'Conversation', with: { __typename?: 'CandidateProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, messages: Array<{ __typename?: 'Message', id: string, text: string, date: string, read: boolean, from: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } }> } | null };

export type GetConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConversationsQuery = { __typename?: 'Query', conversations: Array<{ __typename?: 'Conversation', with: { __typename?: 'CandidateProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', location: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, messages: Array<{ __typename?: 'Message', id: string, text: string, date: string, read: boolean, from: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } }> }> };

export type GetHardSkillsInHighDemandQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHardSkillsInHighDemandQuery = { __typename?: 'Query', getHardSkillsInHighDemand: Array<{ __typename?: 'HardSkillsInHighDemand', ID: string, Name: string }> };

export type InternalRecruiterAssignedToJobFragment = { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, calendlyUrl: string, location: string };

export type GetInternalRecruitersAssignedToJobQueryVariables = Exact<{
  jobId: Scalars['ID'];
}>;


export type GetInternalRecruitersAssignedToJobQuery = { __typename?: 'Query', getInternalRecruitersAssignedToJob: Array<{ __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, calendlyUrl: string, location: string }> };

export type JobForCandidateApplicationFragment = { __typename?: 'JobApplication', id: string, date: string, status: ApplicationStatusEnum, reference?: { __typename?: 'Reference', referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } } | null };

export type GetJobForCandidateQueryVariables = Exact<{
  jobAdId: Scalars['ID'];
}>;


export type GetJobForCandidateQuery = { __typename?: 'Query', jobForCandidate?: { __typename?: 'JobForCandidate', jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, application?: { __typename?: 'JobApplication', id: string, date: string, status: ApplicationStatusEnum, reference?: { __typename?: 'Reference', referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } } | null } | null } | null };

export type GetJobForCompanyQueryVariables = Exact<{
  jobAdId: Scalars['ID'];
}>;


export type GetJobForCompanyQuery = { __typename?: 'Query', jobForCompany?: { __typename?: 'JobForCompany', jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, applications: Array<{ __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, fosterScore: number, date: string, hire?: { __typename?: 'Hire', id: string, starting_date: string, yearly_salary: number } | null, candidate: { __typename?: 'CandidateProfile', id: string, linkedin?: string | null, photoUrl?: string | null, location: string, name: string, web?: string | null, github?: string | null }, reference?: { __typename?: 'Reference', id: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> } | null }>, hires?: Array<{ __typename?: 'Hire', id: string, starting_date: string, yearly_salary: number, application: { __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, fosterScore: number, date: string, jobAd: { __typename?: 'JobAd', id: string, title: string, company: { __typename?: 'Company', id: string, name: string } }, hire?: { __typename?: 'Hire', id: string, starting_date: string, yearly_salary: number } | null, candidate: { __typename?: 'CandidateProfile', id: string, linkedin?: string | null, photoUrl?: string | null, location: string, name: string, web?: string | null, github?: string | null }, reference?: { __typename?: 'Reference', id: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> } | null } }> | null } | null };

export type GetJobForPublicQueryVariables = Exact<{
  jobAdId: Scalars['ID'];
}>;


export type GetJobForPublicQuery = { __typename?: 'Query', jobForPublic?: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> } | null };

export type GetJobSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobSkillsQuery = { __typename?: 'Query', getListOfJobSkills?: Array<string> | null };

export type JobAdForCandidateFragment = { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, currency: string, minSalary: number, maxSalary: number, date: string, requirements: string, preferred: string, isRemote: boolean, jobSkills?: Array<string> | null, experience: ExperienceEnum, company: { __typename?: 'Company', id: string, photoUrl?: string | null, name: string } };

export type GetJobsForCandidateQueryVariables = Exact<{
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
}>;


export type GetJobsForCandidateQuery = { __typename?: 'Query', jobsForCandidate: Array<{ __typename?: 'JobForCandidate', jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, currency: string, minSalary: number, maxSalary: number, date: string, requirements: string, preferred: string, isRemote: boolean, jobSkills?: Array<string> | null, experience: ExperienceEnum, company: { __typename?: 'Company', id: string, photoUrl?: string | null, name: string } }, application?: { __typename?: 'JobApplication', id: string } | null }> };

export type JobForCompanyJobAdFragment = { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, currency: string, minSalary: number, maxSalary: number, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, numberOfApplications: number, requirements: string, preferred: string, editable: boolean, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } };

export type GetJobsForCompanyQueryVariables = Exact<{
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
}>;


export type GetJobsForCompanyQuery = { __typename?: 'Query', jobsForCompany: Array<{ __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, currency: string, minSalary: number, maxSalary: number, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, numberOfApplications: number, requirements: string, preferred: string, editable: boolean, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } }> };

export type GetJobsForInternalRecruiterQueryVariables = Exact<{
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
}>;


export type GetJobsForInternalRecruiterQuery = { __typename?: 'Query', jobsForInternalRecruiter: Array<{ __typename?: 'JobForInternalRecruiter', jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, currency: string, minSalary: number, maxSalary: number, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, numberOfApplications: number, requirements: string, preferred: string, editable: boolean, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } } }> };

export type JobPublicFragment = { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, currency: string, minSalary: number, maxSalary: number, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, numberOfApplications: number, requirements: string, preferred: string, editable: boolean, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } };

export type GetJobsPublicQueryVariables = Exact<{
  filters?: InputMaybe<JobFilters>;
  sortBy?: InputMaybe<SortJobsBy>;
}>;


export type GetJobsPublicQuery = { __typename?: 'Query', jobsPublic: Array<{ __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, currency: string, minSalary: number, maxSalary: number, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, numberOfApplications: number, requirements: string, preferred: string, editable: boolean, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } }> };

export type NotificationDataFragment = { __typename?: 'Notification', id: string, type: NotificationTypeEnum, date: string, info?: string | null, read: boolean, linkID: string, application?: { __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, candidate: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null }, reference?: { __typename?: 'Reference', referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } } | null, jobAd: { __typename?: 'JobAd', id: string, title: string, company: { __typename?: 'Company', photoUrl?: string | null } }, notes?: Array<{ __typename?: 'ApplicationNote', id: string, writtenBy: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } }> | null } | null, triggerUserProfile?: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null };

export type GetNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationsQuery = { __typename?: 'Query', notifications: Array<{ __typename?: 'Notification', id: string, type: NotificationTypeEnum, date: string, info?: string | null, read: boolean, linkID: string, application?: { __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, candidate: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null }, reference?: { __typename?: 'Reference', referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } } | null, jobAd: { __typename?: 'JobAd', id: string, title: string, company: { __typename?: 'Company', photoUrl?: string | null } }, notes?: Array<{ __typename?: 'ApplicationNote', id: string, writtenBy: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } }> | null } | null, triggerUserProfile?: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null }> };

export type GetProfileQueryVariables = Exact<{
  profileID: Scalars['ID'];
}>;


export type GetProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'CandidateProfile', location: string, field: Array<string>, linkedin?: string | null, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null } | { __typename?: 'CompanyHrProfile', location: string, linkedin?: string | null, about?: string | null, jobTitle: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, web?: string | null, description?: string | null } } | { __typename?: 'InternalRecruiterProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, calendlyUrl: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', jobTitle: string, linkedin?: string | null, companyName?: string | null, about?: string | null, github?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletsInfo: Array<{ __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string }> } | null };

export type GetReferenceForInternalRecruiterQueryVariables = Exact<{
  referenceId: Scalars['String'];
}>;


export type GetReferenceForInternalRecruiterQuery = { __typename?: 'Query', referenceForRecruiter?: { __typename?: 'ReferenceForRecruiter', candidateName: string, email: string, linkedinUrl: string, status: ReferenceStatus, applicationId?: string | null, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, reference: { __typename?: 'Reference', id: string, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }>, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } }, referee?: { __typename?: 'CandidateProfile', available?: boolean | null, field: Array<string>, experience?: ExperienceEnum | null, id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null } | null };

export type GetReferralQueryVariables = Exact<{
  referenceId: Scalars['String'];
}>;


export type GetReferralQuery = { __typename?: 'Query', referenceForCandidate?: { __typename?: 'ReferenceForCandidate', candidateName: string, email: string, linkedinUrl: string, status: ReferenceStatus, applicationId?: string | null, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, reference: { __typename?: 'Reference', id: string, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }>, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } }, referee?: { __typename?: 'CandidateProfile', available?: boolean | null, field: Array<string>, experience?: ExperienceEnum | null, id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null } | null };

export type GetReferralWithoutJobQueryVariables = Exact<{
  referralWithoutJobId: Scalars['String'];
}>;


export type GetReferralWithoutJobQuery = { __typename?: 'Query', referralWithoutJob?: { __typename?: 'ReferralWithoutJobResponse', id: string, name: string, email: string, linkedinUrl?: string | null, githubUrl?: string | null, hardSkills: Array<string>, isIncognito: boolean, relationshipWithCandidate: string, standOut: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string } } | null };

export type MyEndorsementsCandidateReferralFragment = { __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, fosterScore: number, date: string, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, hire?: { __typename?: 'Hire', id: string, starting_date: string, yearly_salary: number } | null, candidate: { __typename?: 'CandidateProfile', id: string, linkedin?: string | null, photoUrl?: string | null, location: string, name: string, web?: string | null, github?: string | null }, reference?: { __typename?: 'Reference', id: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> } | null };

export type MyEndorsementsMyReferralsWithoutJobFragment = { __typename?: 'ReferralWithoutJobResponse', id: string, date: string, name: string, email: string, linkedinUrl?: string | null, githubUrl?: string | null, relationshipWithCandidate: string, standOut: string, isIncognito: boolean, hardSkills: Array<string> };

export type MyEndorsementsMyPendingReferencesFragment = { __typename?: 'ReferenceForReferrer', candidateName: string, email: string, linkedinUrl: string, status: ReferenceStatus, referee?: { __typename?: 'CandidateProfile', location: string, id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null, jobAd: { __typename?: 'JobAd', id: string, title: string, date: string, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } }, reference: { __typename?: 'Reference', id: string, date: string } };

export type GetReferralsForCandidateQueryVariables = Exact<{
  filters?: InputMaybe<JobFilters>;
}>;


export type GetReferralsForCandidateQuery = { __typename?: 'Query', candidateReferrals: Array<{ __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, fosterScore: number, date: string, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, hire?: { __typename?: 'Hire', id: string, starting_date: string, yearly_salary: number } | null, candidate: { __typename?: 'CandidateProfile', id: string, linkedin?: string | null, photoUrl?: string | null, location: string, name: string, web?: string | null, github?: string | null }, reference?: { __typename?: 'Reference', id: string, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum }, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> } | null }>, myReferralsWithoutJob: Array<{ __typename?: 'ReferralWithoutJobResponse', id: string, date: string, name: string, email: string, linkedinUrl?: string | null, githubUrl?: string | null, relationshipWithCandidate: string, standOut: string, isIncognito: boolean, hardSkills: Array<string> }>, myPendingReferences: Array<{ __typename?: 'ReferenceForReferrer', candidateName: string, email: string, linkedinUrl: string, status: ReferenceStatus, referee?: { __typename?: 'CandidateProfile', location: string, id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null, jobAd: { __typename?: 'JobAd', id: string, title: string, date: string, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null } }, reference: { __typename?: 'Reference', id: string, date: string } }> };

export type GetReferralsWithoutJobForInternalRecruiterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReferralsWithoutJobForInternalRecruiterQuery = { __typename?: 'Query', referralsWithoutJob: Array<{ __typename?: 'ReferralWithoutJobResponse', id: string, name: string, email: string, date: string, hardSkills: Array<string>, referrer: { __typename?: 'CandidateProfile', id: string, name: string } }> };

export type GetUserQueryVariables = Exact<{
  renewToken: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', id: string, name: string, gender: GenderEnum, email: string, activeRole?: RoleEnum | null, roles?: Array<RoleEnum> | null }, profile?: { __typename?: 'CandidateProfile', location: string, field: Array<string>, jobTitle: string, companyName?: string | null, experience?: ExperienceEnum | null, techSkills?: Array<string> | null, softSkills?: Array<string> | null, about?: string | null, web?: string | null, github?: string | null, available?: boolean | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletInfo?: { __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string } | null } | { __typename?: 'CompanyHrProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, web?: string | null, description?: string | null } } | { __typename?: 'InternalRecruiterProfile', location: string, jobTitle: string, about?: string | null, linkedin?: string | null, calendlyUrl: string, id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', jobTitle: string, companyName?: string | null, about?: string | null, github?: string | null, linkedin?: string | null, id: string, name: string, photoUrl?: string | null, role: RoleEnum, walletsInfo: Array<{ __typename?: 'WalletInfo', id: string, blockchain: BlockchainEnum, walletAddress: string }> } | null } | null };

export type GetUserSuggestionsQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type GetUserSuggestionsQuery = { __typename?: 'Query', userSuggestions: Array<{ __typename?: 'UserSuggestion', id: string, name: string, email: string, profile: { __typename?: 'CandidateProfile', linkedin?: string | null } | { __typename?: 'CompanyHrProfile' } | { __typename?: 'InternalRecruiterProfile' } | { __typename?: 'StakerProfile' } }> };

export type ReferenceForCandidateQueryVariables = Exact<{
  referenceId: Scalars['String'];
}>;


export type ReferenceForCandidateQuery = { __typename?: 'Query', referenceForCandidate?: { __typename?: 'ReferenceForCandidate', email: string, status: ReferenceStatus, applicationId?: string | null, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, reference: { __typename?: 'Reference', id: string, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }>, referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } } } | null };

export type ReferenceForReferrerQueryVariables = Exact<{
  referenceId: Scalars['String'];
}>;


export type ReferenceForReferrerQuery = { __typename?: 'Query', referenceForReferrer?: { __typename?: 'ReferenceForReferrer', email: string, status: ReferenceStatus, applicationId?: string | null, jobAd: { __typename?: 'JobAd', id: string, title: string, format: JobTypeEnum, location?: string | null, minSalary: number, maxSalary: number, currency: string, status: JobStatusEnum, date: string, field: FieldEnum, experience: ExperienceEnum, description: string, responsibilities: string, requirements: string, preferred: string, benefits: string, editable: boolean, numberOfApplications: number, isRemote: boolean, jobSkills?: Array<string> | null, company: { __typename?: 'Company', id: string, name: string, photoUrl?: string | null, description?: string | null }, referenceQuestions: Array<{ __typename?: 'ReferenceQuestionnaire', id: string, text: string }> }, reference: { __typename?: 'Reference', id: string, answers: Array<{ __typename?: 'ReferenceAnswer', id: string, text: string, question: { __typename?: 'ReferenceQuestionnaire', id: string, text: string } }> }, referee?: { __typename?: 'CandidateProfile', available?: boolean | null, field: Array<string>, experience?: ExperienceEnum | null, id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null } | null };

export type GetMessageCreatedSubscriptionVariables = Exact<{
  jwtToken: Scalars['String'];
}>;


export type GetMessageCreatedSubscription = { __typename?: 'Subscription', messageCreated?: { __typename?: 'Message', id: string, text: string, date: string, read: boolean, from: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, linkedin?: string | null, role: RoleEnum } } | null };

export type GetNotificationCreatedSubscriptionVariables = Exact<{
  jwtToken: Scalars['String'];
}>;


export type GetNotificationCreatedSubscription = { __typename?: 'Subscription', notificationCreated?: { __typename: 'Notification', id: string, type: NotificationTypeEnum, date: string, linkID: string, info?: string | null, read: boolean, application?: { __typename?: 'JobApplication', id: string, status: ApplicationStatusEnum, candidate: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null }, reference?: { __typename?: 'Reference', referrer: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } } | null, jobAd: { __typename?: 'JobAd', id: string, title: string, company: { __typename?: 'Company', photoUrl?: string | null } }, notes?: Array<{ __typename?: 'ApplicationNote', id: string, writtenBy: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null, role: RoleEnum } }> | null } | null, triggerUserProfile?: { __typename?: 'CandidateProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'CompanyHrProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'InternalRecruiterProfile', id: string, name: string, photoUrl?: string | null } | { __typename?: 'StakerProfile', id: string, name: string, photoUrl?: string | null } | null } | null };

export const UserDataFragmentDoc = gql`
    fragment userData on User {
  id
  name
  gender
  email
  activeRole
  roles
}
    `;
export const BasicProfileFragmentDoc = gql`
    fragment basicProfile on Profile {
  ... on CompanyHrProfile {
    id
    name
    photoUrl
    linkedin
    role
  }
  ... on InternalRecruiterProfile {
    id
    name
    photoUrl
    linkedin
    role
  }
  ... on StakerProfile {
    id
    name
    photoUrl
    linkedin
    role
  }
  ... on CandidateProfile {
    id
    name
    photoUrl
    linkedin
    role
  }
}
    `;
export const ConversationDataFragmentDoc = gql`
    fragment conversationData on Conversation {
  with {
    id
    name
    photoUrl
    role
    ... on CompanyHrProfile {
      location
    }
    ... on InternalRecruiterProfile {
      location
    }
    ... on CandidateProfile {
      location
    }
  }
  messages {
    id
    from {
      id
      name
      photoUrl
      role
    }
    text
    date
    read
  }
}
    `;
export const FullProfileFragmentDoc = gql`
    fragment FullProfile on Profile {
  id
  name
  photoUrl
  role
  ... on CompanyHrProfile {
    location
    jobTitle
    company {
      id
      name
      photoUrl
      web
      description
    }
    about
    linkedin
  }
  ... on InternalRecruiterProfile {
    location
    jobTitle
    about
    linkedin
    calendlyUrl
  }
  ... on StakerProfile {
    jobTitle
    walletsInfo: walletInfo {
      id
      blockchain
      walletAddress
    }
    companyName
    about
    github
    linkedin
  }
  ... on CandidateProfile {
    location
    field
    jobTitle
    companyName
    experience
    techSkills
    softSkills
    about
    web
    github
    available
    linkedin
    walletInfo {
      id
      blockchain
      walletAddress
    }
  }
}
    `;
export const InternalRecruiterAssignedToJobFragmentDoc = gql`
    fragment InternalRecruiterAssignedToJob on InternalRecruiterProfile {
  id
  name
  photoUrl
  calendlyUrl
  location
}
    `;
export const JobForCandidateApplicationFragmentDoc = gql`
    fragment jobForCandidateApplication on JobApplication {
  id
  date
  reference {
    referrer {
      id
      name
      photoUrl
    }
  }
  status
}
    `;
export const JobAdForCandidateFragmentDoc = gql`
    fragment jobAdForCandidate on JobAd {
  id
  title
  format
  location
  currency
  minSalary
  maxSalary
  company {
    id
    photoUrl
    name
  }
  date
  requirements
  preferred
  isRemote
  jobSkills
  experience
}
    `;
export const JobForCompanyJobAdFragmentDoc = gql`
    fragment jobForCompanyJobAd on JobAd {
  id
  title
  format
  location
  company {
    id
    name
    photoUrl
  }
  currency
  minSalary
  maxSalary
  status
  date
  field
  experience
  numberOfApplications
  requirements
  preferred
  editable
  isRemote
  jobSkills
}
    `;
export const JobPublicFragmentDoc = gql`
    fragment jobPublic on JobAd {
  id
  title
  format
  location
  company {
    id
    name
    photoUrl
  }
  currency
  minSalary
  maxSalary
  status
  date
  field
  experience
  numberOfApplications
  requirements
  preferred
  editable
  isRemote
  jobSkills
}
    `;
export const NotificationDataFragmentDoc = gql`
    fragment NotificationData on Notification {
  id
  type
  date
  application {
    id
    candidate {
      id
      name
      photoUrl
    }
    reference {
      referrer {
        id
        name
        photoUrl
        role
      }
    }
    jobAd {
      id
      title
      company {
        photoUrl
      }
    }
    notes {
      id
      writtenBy {
        id
        name
        photoUrl
      }
    }
    status
  }
  triggerUserProfile {
    id
    name
    photoUrl
  }
  info
  read
  linkID
}
    `;
export const ApplicationDataFragmentDoc = gql`
    fragment applicationData on JobApplication {
  id
  status
  hire {
    id
    starting_date
    yearly_salary
  }
  candidate {
    id
    linkedin
    photoUrl
    location
    name
    web
    github
  }
  reference {
    id
    referrer {
      id
      name
      photoUrl
      role
    }
    answers {
      id
      text
      question {
        id
        text
      }
    }
  }
  fosterScore
  date
}
    `;
export const JobAdDataFragmentDoc = gql`
    fragment jobAdData on JobAd {
  id
  title
  format
  location
  minSalary
  maxSalary
  company {
    id
    name
    photoUrl
    description
  }
  currency
  minSalary
  maxSalary
  status
  date
  field
  experience
  description
  responsibilities
  requirements
  preferred
  benefits
  referenceQuestions {
    id
    text
  }
  editable
  numberOfApplications
  isRemote
  jobSkills
}
    `;
export const MyEndorsementsCandidateReferralFragmentDoc = gql`
    fragment MyEndorsementsCandidateReferral on JobApplication {
  ...applicationData
  jobAd {
    ...jobAdData
  }
}
    ${ApplicationDataFragmentDoc}
${JobAdDataFragmentDoc}`;
export const MyEndorsementsMyReferralsWithoutJobFragmentDoc = gql`
    fragment MyEndorsementsMyReferralsWithoutJob on ReferralWithoutJobResponse {
  id
  date
  name
  email
  linkedinUrl
  githubUrl
  relationshipWithCandidate
  standOut
  isIncognito
  hardSkills
}
    `;
export const MyEndorsementsMyPendingReferencesFragmentDoc = gql`
    fragment MyEndorsementsMyPendingReferences on ReferenceForReferrer {
  candidateName
  email
  linkedinUrl
  referee {
    id
    name
    photoUrl
    ... on CandidateProfile {
      location
    }
  }
  jobAd {
    id
    title
    company {
      id
      name
      photoUrl
    }
    date
  }
  reference {
    id
    date
  }
  status
}
    `;
export const AcceptReferenceDocument = gql`
    mutation AcceptReference($referenceId: ID!) {
  acceptReference(referenceId: $referenceId)
}
    `;
export type AcceptReferenceMutationFn = Apollo.MutationFunction<AcceptReferenceMutation, AcceptReferenceMutationVariables>;

/**
 * __useAcceptReferenceMutation__
 *
 * To run a mutation, you first call `useAcceptReferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptReferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptReferenceMutation, { data, loading, error }] = useAcceptReferenceMutation({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useAcceptReferenceMutation(baseOptions?: Apollo.MutationHookOptions<AcceptReferenceMutation, AcceptReferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptReferenceMutation, AcceptReferenceMutationVariables>(AcceptReferenceDocument, options);
      }
export type AcceptReferenceMutationHookResult = ReturnType<typeof useAcceptReferenceMutation>;
export type AcceptReferenceMutationResult = Apollo.MutationResult<AcceptReferenceMutation>;
export type AcceptReferenceMutationOptions = Apollo.BaseMutationOptions<AcceptReferenceMutation, AcceptReferenceMutationVariables>;
export const AddApplicationNoteDocument = gql`
    mutation AddApplicationNote($applicationId: ID!, $text: String!) {
  addApplicationNote(applicationId: $applicationId, text: $text)
}
    `;
export type AddApplicationNoteMutationFn = Apollo.MutationFunction<AddApplicationNoteMutation, AddApplicationNoteMutationVariables>;

/**
 * __useAddApplicationNoteMutation__
 *
 * To run a mutation, you first call `useAddApplicationNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddApplicationNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addApplicationNoteMutation, { data, loading, error }] = useAddApplicationNoteMutation({
 *   variables: {
 *      applicationId: // value for 'applicationId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useAddApplicationNoteMutation(baseOptions?: Apollo.MutationHookOptions<AddApplicationNoteMutation, AddApplicationNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddApplicationNoteMutation, AddApplicationNoteMutationVariables>(AddApplicationNoteDocument, options);
      }
export type AddApplicationNoteMutationHookResult = ReturnType<typeof useAddApplicationNoteMutation>;
export type AddApplicationNoteMutationResult = Apollo.MutationResult<AddApplicationNoteMutation>;
export type AddApplicationNoteMutationOptions = Apollo.BaseMutationOptions<AddApplicationNoteMutation, AddApplicationNoteMutationVariables>;
export const ApplyToJobDocument = gql`
    mutation ApplyToJob($jobAdId: ID!) {
  applyToJob(jobAdId: $jobAdId)
}
    `;
export type ApplyToJobMutationFn = Apollo.MutationFunction<ApplyToJobMutation, ApplyToJobMutationVariables>;

/**
 * __useApplyToJobMutation__
 *
 * To run a mutation, you first call `useApplyToJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyToJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyToJobMutation, { data, loading, error }] = useApplyToJobMutation({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useApplyToJobMutation(baseOptions?: Apollo.MutationHookOptions<ApplyToJobMutation, ApplyToJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApplyToJobMutation, ApplyToJobMutationVariables>(ApplyToJobDocument, options);
      }
export type ApplyToJobMutationHookResult = ReturnType<typeof useApplyToJobMutation>;
export type ApplyToJobMutationResult = Apollo.MutationResult<ApplyToJobMutation>;
export type ApplyToJobMutationOptions = Apollo.BaseMutationOptions<ApplyToJobMutation, ApplyToJobMutationVariables>;
export const ChangeApplicationStatusDocument = gql`
    mutation ChangeApplicationStatus($applicationId: ID!, $status: ApplicationStatusEnum!) {
  changeApplicationStatus(applicationId: $applicationId, status: $status)
}
    `;
export type ChangeApplicationStatusMutationFn = Apollo.MutationFunction<ChangeApplicationStatusMutation, ChangeApplicationStatusMutationVariables>;

/**
 * __useChangeApplicationStatusMutation__
 *
 * To run a mutation, you first call `useChangeApplicationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeApplicationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeApplicationStatusMutation, { data, loading, error }] = useChangeApplicationStatusMutation({
 *   variables: {
 *      applicationId: // value for 'applicationId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useChangeApplicationStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeApplicationStatusMutation, ChangeApplicationStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeApplicationStatusMutation, ChangeApplicationStatusMutationVariables>(ChangeApplicationStatusDocument, options);
      }
export type ChangeApplicationStatusMutationHookResult = ReturnType<typeof useChangeApplicationStatusMutation>;
export type ChangeApplicationStatusMutationResult = Apollo.MutationResult<ChangeApplicationStatusMutation>;
export type ChangeApplicationStatusMutationOptions = Apollo.BaseMutationOptions<ChangeApplicationStatusMutation, ChangeApplicationStatusMutationVariables>;
export const ContinueWithLinkedinDocument = gql`
    mutation ContinueWithLinkedin($token: String!) {
  continueWithLinkedin(token: $token) {
    user {
      ...userData
    }
    profile {
      ...FullProfile
    }
    token
    photoUrl
  }
}
    ${UserDataFragmentDoc}
${FullProfileFragmentDoc}`;
export type ContinueWithLinkedinMutationFn = Apollo.MutationFunction<ContinueWithLinkedinMutation, ContinueWithLinkedinMutationVariables>;

/**
 * __useContinueWithLinkedinMutation__
 *
 * To run a mutation, you first call `useContinueWithLinkedinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContinueWithLinkedinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [continueWithLinkedinMutation, { data, loading, error }] = useContinueWithLinkedinMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useContinueWithLinkedinMutation(baseOptions?: Apollo.MutationHookOptions<ContinueWithLinkedinMutation, ContinueWithLinkedinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContinueWithLinkedinMutation, ContinueWithLinkedinMutationVariables>(ContinueWithLinkedinDocument, options);
      }
export type ContinueWithLinkedinMutationHookResult = ReturnType<typeof useContinueWithLinkedinMutation>;
export type ContinueWithLinkedinMutationResult = Apollo.MutationResult<ContinueWithLinkedinMutation>;
export type ContinueWithLinkedinMutationOptions = Apollo.BaseMutationOptions<ContinueWithLinkedinMutation, ContinueWithLinkedinMutationVariables>;
export const CreateCandidateProfileDocument = gql`
    mutation CreateCandidateProfile($candidateData: CreateCandidateProfileData!) {
  createCandidateProfile(candidateData: $candidateData) {
    user {
      ...userData
    }
    profile {
      ...FullProfile
    }
    token
  }
}
    ${UserDataFragmentDoc}
${FullProfileFragmentDoc}`;
export type CreateCandidateProfileMutationFn = Apollo.MutationFunction<CreateCandidateProfileMutation, CreateCandidateProfileMutationVariables>;

/**
 * __useCreateCandidateProfileMutation__
 *
 * To run a mutation, you first call `useCreateCandidateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCandidateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCandidateProfileMutation, { data, loading, error }] = useCreateCandidateProfileMutation({
 *   variables: {
 *      candidateData: // value for 'candidateData'
 *   },
 * });
 */
export function useCreateCandidateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateCandidateProfileMutation, CreateCandidateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCandidateProfileMutation, CreateCandidateProfileMutationVariables>(CreateCandidateProfileDocument, options);
      }
export type CreateCandidateProfileMutationHookResult = ReturnType<typeof useCreateCandidateProfileMutation>;
export type CreateCandidateProfileMutationResult = Apollo.MutationResult<CreateCandidateProfileMutation>;
export type CreateCandidateProfileMutationOptions = Apollo.BaseMutationOptions<CreateCandidateProfileMutation, CreateCandidateProfileMutationVariables>;
export const CreateJobAdDocument = gql`
    mutation CreateJobAd($jobAdData: JobAdData!) {
  createJobAd(jobAdData: $jobAdData)
}
    `;
export type CreateJobAdMutationFn = Apollo.MutationFunction<CreateJobAdMutation, CreateJobAdMutationVariables>;

/**
 * __useCreateJobAdMutation__
 *
 * To run a mutation, you first call `useCreateJobAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobAdMutation, { data, loading, error }] = useCreateJobAdMutation({
 *   variables: {
 *      jobAdData: // value for 'jobAdData'
 *   },
 * });
 */
export function useCreateJobAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobAdMutation, CreateJobAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobAdMutation, CreateJobAdMutationVariables>(CreateJobAdDocument, options);
      }
export type CreateJobAdMutationHookResult = ReturnType<typeof useCreateJobAdMutation>;
export type CreateJobAdMutationResult = Apollo.MutationResult<CreateJobAdMutation>;
export type CreateJobAdMutationOptions = Apollo.BaseMutationOptions<CreateJobAdMutation, CreateJobAdMutationVariables>;
export const DeclineReferenceDocument = gql`
    mutation DeclineReference($referenceId: String!) {
  declineReference(referenceId: $referenceId)
}
    `;
export type DeclineReferenceMutationFn = Apollo.MutationFunction<DeclineReferenceMutation, DeclineReferenceMutationVariables>;

/**
 * __useDeclineReferenceMutation__
 *
 * To run a mutation, you first call `useDeclineReferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeclineReferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [declineReferenceMutation, { data, loading, error }] = useDeclineReferenceMutation({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useDeclineReferenceMutation(baseOptions?: Apollo.MutationHookOptions<DeclineReferenceMutation, DeclineReferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeclineReferenceMutation, DeclineReferenceMutationVariables>(DeclineReferenceDocument, options);
      }
export type DeclineReferenceMutationHookResult = ReturnType<typeof useDeclineReferenceMutation>;
export type DeclineReferenceMutationResult = Apollo.MutationResult<DeclineReferenceMutation>;
export type DeclineReferenceMutationOptions = Apollo.BaseMutationOptions<DeclineReferenceMutation, DeclineReferenceMutationVariables>;
export const DeleteJobAdDocument = gql`
    mutation DeleteJobAd($jobAdId: ID!) {
  deleteJobAd(jobAdId: $jobAdId)
}
    `;
export type DeleteJobAdMutationFn = Apollo.MutationFunction<DeleteJobAdMutation, DeleteJobAdMutationVariables>;

/**
 * __useDeleteJobAdMutation__
 *
 * To run a mutation, you first call `useDeleteJobAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobAdMutation, { data, loading, error }] = useDeleteJobAdMutation({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useDeleteJobAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobAdMutation, DeleteJobAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobAdMutation, DeleteJobAdMutationVariables>(DeleteJobAdDocument, options);
      }
export type DeleteJobAdMutationHookResult = ReturnType<typeof useDeleteJobAdMutation>;
export type DeleteJobAdMutationResult = Apollo.MutationResult<DeleteJobAdMutation>;
export type DeleteJobAdMutationOptions = Apollo.BaseMutationOptions<DeleteJobAdMutation, DeleteJobAdMutationVariables>;
export const DeleteReferenceDocument = gql`
    mutation DeleteReference($referenceId: ID!) {
  deleteReference(referenceId: $referenceId)
}
    `;
export type DeleteReferenceMutationFn = Apollo.MutationFunction<DeleteReferenceMutation, DeleteReferenceMutationVariables>;

/**
 * __useDeleteReferenceMutation__
 *
 * To run a mutation, you first call `useDeleteReferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReferenceMutation, { data, loading, error }] = useDeleteReferenceMutation({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useDeleteReferenceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReferenceMutation, DeleteReferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReferenceMutation, DeleteReferenceMutationVariables>(DeleteReferenceDocument, options);
      }
export type DeleteReferenceMutationHookResult = ReturnType<typeof useDeleteReferenceMutation>;
export type DeleteReferenceMutationResult = Apollo.MutationResult<DeleteReferenceMutation>;
export type DeleteReferenceMutationOptions = Apollo.BaseMutationOptions<DeleteReferenceMutation, DeleteReferenceMutationVariables>;
export const EditJobAdDocument = gql`
    mutation EditJobAd($jobAdId: ID!, $jobAdData: JobAdData!) {
  editJobAd(jobAdId: $jobAdId, jobAdData: $jobAdData) {
    ...jobAdData
  }
}
    ${JobAdDataFragmentDoc}`;
export type EditJobAdMutationFn = Apollo.MutationFunction<EditJobAdMutation, EditJobAdMutationVariables>;

/**
 * __useEditJobAdMutation__
 *
 * To run a mutation, you first call `useEditJobAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditJobAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editJobAdMutation, { data, loading, error }] = useEditJobAdMutation({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *      jobAdData: // value for 'jobAdData'
 *   },
 * });
 */
export function useEditJobAdMutation(baseOptions?: Apollo.MutationHookOptions<EditJobAdMutation, EditJobAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditJobAdMutation, EditJobAdMutationVariables>(EditJobAdDocument, options);
      }
export type EditJobAdMutationHookResult = ReturnType<typeof useEditJobAdMutation>;
export type EditJobAdMutationResult = Apollo.MutationResult<EditJobAdMutation>;
export type EditJobAdMutationOptions = Apollo.BaseMutationOptions<EditJobAdMutation, EditJobAdMutationVariables>;
export const EmailVerificationDocument = gql`
    mutation EmailVerification($emailVerificationID: String!) {
  emailVerification(emailVerificationID: $emailVerificationID) {
    user {
      email
      name
    }
    token
  }
}
    `;
export type EmailVerificationMutationFn = Apollo.MutationFunction<EmailVerificationMutation, EmailVerificationMutationVariables>;

/**
 * __useEmailVerificationMutation__
 *
 * To run a mutation, you first call `useEmailVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmailVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emailVerificationMutation, { data, loading, error }] = useEmailVerificationMutation({
 *   variables: {
 *      emailVerificationID: // value for 'emailVerificationID'
 *   },
 * });
 */
export function useEmailVerificationMutation(baseOptions?: Apollo.MutationHookOptions<EmailVerificationMutation, EmailVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EmailVerificationMutation, EmailVerificationMutationVariables>(EmailVerificationDocument, options);
      }
export type EmailVerificationMutationHookResult = ReturnType<typeof useEmailVerificationMutation>;
export type EmailVerificationMutationResult = Apollo.MutationResult<EmailVerificationMutation>;
export type EmailVerificationMutationOptions = Apollo.BaseMutationOptions<EmailVerificationMutation, EmailVerificationMutationVariables>;
export const HireCandidateDocument = gql`
    mutation HireCandidate($hireData: hireData!) {
  hireCandidate(hireData: $hireData)
}
    `;
export type HireCandidateMutationFn = Apollo.MutationFunction<HireCandidateMutation, HireCandidateMutationVariables>;

/**
 * __useHireCandidateMutation__
 *
 * To run a mutation, you first call `useHireCandidateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHireCandidateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [hireCandidateMutation, { data, loading, error }] = useHireCandidateMutation({
 *   variables: {
 *      hireData: // value for 'hireData'
 *   },
 * });
 */
export function useHireCandidateMutation(baseOptions?: Apollo.MutationHookOptions<HireCandidateMutation, HireCandidateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HireCandidateMutation, HireCandidateMutationVariables>(HireCandidateDocument, options);
      }
export type HireCandidateMutationHookResult = ReturnType<typeof useHireCandidateMutation>;
export type HireCandidateMutationResult = Apollo.MutationResult<HireCandidateMutation>;
export type HireCandidateMutationOptions = Apollo.BaseMutationOptions<HireCandidateMutation, HireCandidateMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      ...userData
    }
    profile {
      ...FullProfile
    }
    token
  }
}
    ${UserDataFragmentDoc}
${FullProfileFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ReadMessageDocument = gql`
    mutation ReadMessage($messageId: ID!) {
  readMessage(messageId: $messageId)
}
    `;
export type ReadMessageMutationFn = Apollo.MutationFunction<ReadMessageMutation, ReadMessageMutationVariables>;

/**
 * __useReadMessageMutation__
 *
 * To run a mutation, you first call `useReadMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readMessageMutation, { data, loading, error }] = useReadMessageMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useReadMessageMutation(baseOptions?: Apollo.MutationHookOptions<ReadMessageMutation, ReadMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReadMessageMutation, ReadMessageMutationVariables>(ReadMessageDocument, options);
      }
export type ReadMessageMutationHookResult = ReturnType<typeof useReadMessageMutation>;
export type ReadMessageMutationResult = Apollo.MutationResult<ReadMessageMutation>;
export type ReadMessageMutationOptions = Apollo.BaseMutationOptions<ReadMessageMutation, ReadMessageMutationVariables>;
export const ReadNotificationDocument = gql`
    mutation ReadNotification($notificationId: ID!) {
  readNotification(notificationId: $notificationId)
}
    `;
export type ReadNotificationMutationFn = Apollo.MutationFunction<ReadNotificationMutation, ReadNotificationMutationVariables>;

/**
 * __useReadNotificationMutation__
 *
 * To run a mutation, you first call `useReadNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readNotificationMutation, { data, loading, error }] = useReadNotificationMutation({
 *   variables: {
 *      notificationId: // value for 'notificationId'
 *   },
 * });
 */
export function useReadNotificationMutation(baseOptions?: Apollo.MutationHookOptions<ReadNotificationMutation, ReadNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReadNotificationMutation, ReadNotificationMutationVariables>(ReadNotificationDocument, options);
      }
export type ReadNotificationMutationHookResult = ReturnType<typeof useReadNotificationMutation>;
export type ReadNotificationMutationResult = Apollo.MutationResult<ReadNotificationMutation>;
export type ReadNotificationMutationOptions = Apollo.BaseMutationOptions<ReadNotificationMutation, ReadNotificationMutationVariables>;
export const ReferCandidateDocument = gql`
    mutation ReferCandidate($referenceData: ReferCandidateData!) {
  referCandidate(referenceData: $referenceData)
}
    `;
export type ReferCandidateMutationFn = Apollo.MutationFunction<ReferCandidateMutation, ReferCandidateMutationVariables>;

/**
 * __useReferCandidateMutation__
 *
 * To run a mutation, you first call `useReferCandidateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReferCandidateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [referCandidateMutation, { data, loading, error }] = useReferCandidateMutation({
 *   variables: {
 *      referenceData: // value for 'referenceData'
 *   },
 * });
 */
export function useReferCandidateMutation(baseOptions?: Apollo.MutationHookOptions<ReferCandidateMutation, ReferCandidateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReferCandidateMutation, ReferCandidateMutationVariables>(ReferCandidateDocument, options);
      }
export type ReferCandidateMutationHookResult = ReturnType<typeof useReferCandidateMutation>;
export type ReferCandidateMutationResult = Apollo.MutationResult<ReferCandidateMutation>;
export type ReferCandidateMutationOptions = Apollo.BaseMutationOptions<ReferCandidateMutation, ReferCandidateMutationVariables>;
export const ReferCandidateWithoutJobDocument = gql`
    mutation ReferCandidateWithoutJob($candidateData: CandidateData!) {
  referCandidateWithoutJob(candidateData: $candidateData)
}
    `;
export type ReferCandidateWithoutJobMutationFn = Apollo.MutationFunction<ReferCandidateWithoutJobMutation, ReferCandidateWithoutJobMutationVariables>;

/**
 * __useReferCandidateWithoutJobMutation__
 *
 * To run a mutation, you first call `useReferCandidateWithoutJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReferCandidateWithoutJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [referCandidateWithoutJobMutation, { data, loading, error }] = useReferCandidateWithoutJobMutation({
 *   variables: {
 *      candidateData: // value for 'candidateData'
 *   },
 * });
 */
export function useReferCandidateWithoutJobMutation(baseOptions?: Apollo.MutationHookOptions<ReferCandidateWithoutJobMutation, ReferCandidateWithoutJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReferCandidateWithoutJobMutation, ReferCandidateWithoutJobMutationVariables>(ReferCandidateWithoutJobDocument, options);
      }
export type ReferCandidateWithoutJobMutationHookResult = ReturnType<typeof useReferCandidateWithoutJobMutation>;
export type ReferCandidateWithoutJobMutationResult = Apollo.MutationResult<ReferCandidateWithoutJobMutation>;
export type ReferCandidateWithoutJobMutationOptions = Apollo.BaseMutationOptions<ReferCandidateWithoutJobMutation, ReferCandidateWithoutJobMutationVariables>;
export const RegeneratePasswordDocument = gql`
    mutation RegeneratePassword($regeneratePasswordRequest: ID!, $password: String!, $repeatedPassword: String!) {
  regeneratePassword(
    regeneratePasswordRequest: $regeneratePasswordRequest
    password: $password
    repeatedPassword: $repeatedPassword
  )
}
    `;
export type RegeneratePasswordMutationFn = Apollo.MutationFunction<RegeneratePasswordMutation, RegeneratePasswordMutationVariables>;

/**
 * __useRegeneratePasswordMutation__
 *
 * To run a mutation, you first call `useRegeneratePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegeneratePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [regeneratePasswordMutation, { data, loading, error }] = useRegeneratePasswordMutation({
 *   variables: {
 *      regeneratePasswordRequest: // value for 'regeneratePasswordRequest'
 *      password: // value for 'password'
 *      repeatedPassword: // value for 'repeatedPassword'
 *   },
 * });
 */
export function useRegeneratePasswordMutation(baseOptions?: Apollo.MutationHookOptions<RegeneratePasswordMutation, RegeneratePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegeneratePasswordMutation, RegeneratePasswordMutationVariables>(RegeneratePasswordDocument, options);
      }
export type RegeneratePasswordMutationHookResult = ReturnType<typeof useRegeneratePasswordMutation>;
export type RegeneratePasswordMutationResult = Apollo.MutationResult<RegeneratePasswordMutation>;
export type RegeneratePasswordMutationOptions = Apollo.BaseMutationOptions<RegeneratePasswordMutation, RegeneratePasswordMutationVariables>;
export const RegeneratePasswordRequestDocument = gql`
    mutation RegeneratePasswordRequest($email: String!) {
  regeneratePasswordRequest(email: $email) {
    ID
    ValidUntil
  }
}
    `;
export type RegeneratePasswordRequestMutationFn = Apollo.MutationFunction<RegeneratePasswordRequestMutation, RegeneratePasswordRequestMutationVariables>;

/**
 * __useRegeneratePasswordRequestMutation__
 *
 * To run a mutation, you first call `useRegeneratePasswordRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegeneratePasswordRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [regeneratePasswordRequestMutation, { data, loading, error }] = useRegeneratePasswordRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegeneratePasswordRequestMutation(baseOptions?: Apollo.MutationHookOptions<RegeneratePasswordRequestMutation, RegeneratePasswordRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegeneratePasswordRequestMutation, RegeneratePasswordRequestMutationVariables>(RegeneratePasswordRequestDocument, options);
      }
export type RegeneratePasswordRequestMutationHookResult = ReturnType<typeof useRegeneratePasswordRequestMutation>;
export type RegeneratePasswordRequestMutationResult = Apollo.MutationResult<RegeneratePasswordRequestMutation>;
export type RegeneratePasswordRequestMutationOptions = Apollo.BaseMutationOptions<RegeneratePasswordRequestMutation, RegeneratePasswordRequestMutationVariables>;
export const RequestEmailVerificationDocument = gql`
    mutation RequestEmailVerification($email: String!) {
  requestEmailVerification(email: $email)
}
    `;
export type RequestEmailVerificationMutationFn = Apollo.MutationFunction<RequestEmailVerificationMutation, RequestEmailVerificationMutationVariables>;

/**
 * __useRequestEmailVerificationMutation__
 *
 * To run a mutation, you first call `useRequestEmailVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestEmailVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestEmailVerificationMutation, { data, loading, error }] = useRequestEmailVerificationMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestEmailVerificationMutation(baseOptions?: Apollo.MutationHookOptions<RequestEmailVerificationMutation, RequestEmailVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestEmailVerificationMutation, RequestEmailVerificationMutationVariables>(RequestEmailVerificationDocument, options);
      }
export type RequestEmailVerificationMutationHookResult = ReturnType<typeof useRequestEmailVerificationMutation>;
export type RequestEmailVerificationMutationResult = Apollo.MutationResult<RequestEmailVerificationMutation>;
export type RequestEmailVerificationMutationOptions = Apollo.BaseMutationOptions<RequestEmailVerificationMutation, RequestEmailVerificationMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($toProfileId: ID!, $text: String!) {
  sendMessage(toProfileID: $toProfileId, text: $text) {
    id
    date
    text
    read
    from {
      ...basicProfile
    }
  }
}
    ${BasicProfileFragmentDoc}`;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      toProfileId: // value for 'toProfileId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $repeatedPassword: String!) {
  signup(email: $email, password: $password, repeatedPassword: $repeatedPassword) {
    user {
      ...userData
    }
    token
  }
}
    ${UserDataFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      repeatedPassword: // value for 'repeatedPassword'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const SwitchRoleDocument = gql`
    mutation SwitchRole($newRole: RoleEnum!) {
  switchRole(newRole: $newRole) {
    user {
      ...userData
    }
    profile {
      ...FullProfile
    }
  }
}
    ${UserDataFragmentDoc}
${FullProfileFragmentDoc}`;
export type SwitchRoleMutationFn = Apollo.MutationFunction<SwitchRoleMutation, SwitchRoleMutationVariables>;

/**
 * __useSwitchRoleMutation__
 *
 * To run a mutation, you first call `useSwitchRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSwitchRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [switchRoleMutation, { data, loading, error }] = useSwitchRoleMutation({
 *   variables: {
 *      newRole: // value for 'newRole'
 *   },
 * });
 */
export function useSwitchRoleMutation(baseOptions?: Apollo.MutationHookOptions<SwitchRoleMutation, SwitchRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SwitchRoleMutation, SwitchRoleMutationVariables>(SwitchRoleDocument, options);
      }
export type SwitchRoleMutationHookResult = ReturnType<typeof useSwitchRoleMutation>;
export type SwitchRoleMutationResult = Apollo.MutationResult<SwitchRoleMutation>;
export type SwitchRoleMutationOptions = Apollo.BaseMutationOptions<SwitchRoleMutation, SwitchRoleMutationVariables>;
export const UpdateCandidateSettingsDocument = gql`
    mutation UpdateCandidateSettings($candidateSettings: CandidateSettingsInput!) {
  updateCandidateSettings(candidateSettings: $candidateSettings) {
    id
    name
    photoUrl
    role
    location
    field
    jobTitle
    companyName
    experience
    techSkills
    softSkills
    about
    web
    github
    available
    linkedin
    walletInfo {
      id
      blockchain
      walletAddress
    }
  }
}
    `;
export type UpdateCandidateSettingsMutationFn = Apollo.MutationFunction<UpdateCandidateSettingsMutation, UpdateCandidateSettingsMutationVariables>;

/**
 * __useUpdateCandidateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateCandidateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCandidateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCandidateSettingsMutation, { data, loading, error }] = useUpdateCandidateSettingsMutation({
 *   variables: {
 *      candidateSettings: // value for 'candidateSettings'
 *   },
 * });
 */
export function useUpdateCandidateSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCandidateSettingsMutation, UpdateCandidateSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCandidateSettingsMutation, UpdateCandidateSettingsMutationVariables>(UpdateCandidateSettingsDocument, options);
      }
export type UpdateCandidateSettingsMutationHookResult = ReturnType<typeof useUpdateCandidateSettingsMutation>;
export type UpdateCandidateSettingsMutationResult = Apollo.MutationResult<UpdateCandidateSettingsMutation>;
export type UpdateCandidateSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateCandidateSettingsMutation, UpdateCandidateSettingsMutationVariables>;
export const UpdateCompanyHrSettingsDocument = gql`
    mutation UpdateCompanyHrSettings($companyHrSettings: CompanyHrSettingsInput!) {
  updateCompanyHrSettings(companyHrSettings: $companyHrSettings) {
    id
    name
    photoUrl
    role
    location
    jobTitle
    company {
      id
      name
      photoUrl
    }
    about
  }
}
    `;
export type UpdateCompanyHrSettingsMutationFn = Apollo.MutationFunction<UpdateCompanyHrSettingsMutation, UpdateCompanyHrSettingsMutationVariables>;

/**
 * __useUpdateCompanyHrSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyHrSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyHrSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyHrSettingsMutation, { data, loading, error }] = useUpdateCompanyHrSettingsMutation({
 *   variables: {
 *      companyHrSettings: // value for 'companyHrSettings'
 *   },
 * });
 */
export function useUpdateCompanyHrSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyHrSettingsMutation, UpdateCompanyHrSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyHrSettingsMutation, UpdateCompanyHrSettingsMutationVariables>(UpdateCompanyHrSettingsDocument, options);
      }
export type UpdateCompanyHrSettingsMutationHookResult = ReturnType<typeof useUpdateCompanyHrSettingsMutation>;
export type UpdateCompanyHrSettingsMutationResult = Apollo.MutationResult<UpdateCompanyHrSettingsMutation>;
export type UpdateCompanyHrSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyHrSettingsMutation, UpdateCompanyHrSettingsMutationVariables>;
export const UploadCvDocument = gql`
    mutation UploadCV($cv: Upload!) {
  uploadCV(cv: $cv)
}
    `;
export type UploadCvMutationFn = Apollo.MutationFunction<UploadCvMutation, UploadCvMutationVariables>;

/**
 * __useUploadCvMutation__
 *
 * To run a mutation, you first call `useUploadCvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadCvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadCvMutation, { data, loading, error }] = useUploadCvMutation({
 *   variables: {
 *      cv: // value for 'cv'
 *   },
 * });
 */
export function useUploadCvMutation(baseOptions?: Apollo.MutationHookOptions<UploadCvMutation, UploadCvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadCvMutation, UploadCvMutationVariables>(UploadCvDocument, options);
      }
export type UploadCvMutationHookResult = ReturnType<typeof useUploadCvMutation>;
export type UploadCvMutationResult = Apollo.MutationResult<UploadCvMutation>;
export type UploadCvMutationOptions = Apollo.BaseMutationOptions<UploadCvMutation, UploadCvMutationVariables>;
export const UploadProfilePictureDocument = gql`
    mutation UploadProfilePicture($profilePicture: Upload!) {
  uploadProfilePicture(profilePicture: $profilePicture)
}
    `;
export type UploadProfilePictureMutationFn = Apollo.MutationFunction<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;

/**
 * __useUploadProfilePictureMutation__
 *
 * To run a mutation, you first call `useUploadProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadProfilePictureMutation, { data, loading, error }] = useUploadProfilePictureMutation({
 *   variables: {
 *      profilePicture: // value for 'profilePicture'
 *   },
 * });
 */
export function useUploadProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>(UploadProfilePictureDocument, options);
      }
export type UploadProfilePictureMutationHookResult = ReturnType<typeof useUploadProfilePictureMutation>;
export type UploadProfilePictureMutationResult = Apollo.MutationResult<UploadProfilePictureMutation>;
export type UploadProfilePictureMutationOptions = Apollo.BaseMutationOptions<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;
export const GetApplicationDocument = gql`
    query GetApplication($applicationId: ID!) {
  application(applicationId: $applicationId) {
    id
    date
    status
    candidate {
      id
      name
      role
      photoUrl
      jobTitle
      companyName
      location
      web
      linkedin
      github
      softSkills
      techSkills
      available
      about
      field
      experience
    }
    reference {
      id
      referrer {
        id
        name
        photoUrl
        role
      }
      answers {
        id
        text
        question {
          id
          text
        }
      }
    }
    notes {
      id
      text
      date
      writtenBy {
        id
        name
        photoUrl
      }
    }
    fosterScore
    jobAd {
      ...jobAdData
    }
  }
}
    ${JobAdDataFragmentDoc}`;

/**
 * __useGetApplicationQuery__
 *
 * To run a query within a React component, call `useGetApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationQuery({
 *   variables: {
 *      applicationId: // value for 'applicationId'
 *   },
 * });
 */
export function useGetApplicationQuery(baseOptions: Apollo.QueryHookOptions<GetApplicationQuery, GetApplicationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicationQuery, GetApplicationQueryVariables>(GetApplicationDocument, options);
      }
export function useGetApplicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicationQuery, GetApplicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicationQuery, GetApplicationQueryVariables>(GetApplicationDocument, options);
        }
export type GetApplicationQueryHookResult = ReturnType<typeof useGetApplicationQuery>;
export type GetApplicationLazyQueryHookResult = ReturnType<typeof useGetApplicationLazyQuery>;
export type GetApplicationQueryResult = Apollo.QueryResult<GetApplicationQuery, GetApplicationQueryVariables>;
export const GetCandidateDocument = gql`
    query GetCandidate($id: ID!) {
  getCandidate(candidateID: $id) {
    id
    name
    photoUrl
    field
    jobTitle
    github
    location
    linkedin
    experience
    techSkills
    softSkills
    candidateSkills
    about
    web
    github
    companyName
    available
  }
}
    `;

/**
 * __useGetCandidateQuery__
 *
 * To run a query within a React component, call `useGetCandidateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCandidateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCandidateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCandidateQuery(baseOptions: Apollo.QueryHookOptions<GetCandidateQuery, GetCandidateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCandidateQuery, GetCandidateQueryVariables>(GetCandidateDocument, options);
      }
export function useGetCandidateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCandidateQuery, GetCandidateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCandidateQuery, GetCandidateQueryVariables>(GetCandidateDocument, options);
        }
export type GetCandidateQueryHookResult = ReturnType<typeof useGetCandidateQuery>;
export type GetCandidateLazyQueryHookResult = ReturnType<typeof useGetCandidateLazyQuery>;
export type GetCandidateQueryResult = Apollo.QueryResult<GetCandidateQuery, GetCandidateQueryVariables>;
export const GetCandidateApplicationsDocument = gql`
    query GetCandidateApplications($filters: JobFilters, $sortBy: SortJobsBy) {
  candidateApplications(filters: $filters, sortBy: $sortBy) {
    ...applicationData
    jobAd {
      ...jobAdData
    }
  }
}
    ${ApplicationDataFragmentDoc}
${JobAdDataFragmentDoc}`;

/**
 * __useGetCandidateApplicationsQuery__
 *
 * To run a query within a React component, call `useGetCandidateApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCandidateApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCandidateApplicationsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetCandidateApplicationsQuery(baseOptions?: Apollo.QueryHookOptions<GetCandidateApplicationsQuery, GetCandidateApplicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCandidateApplicationsQuery, GetCandidateApplicationsQueryVariables>(GetCandidateApplicationsDocument, options);
      }
export function useGetCandidateApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCandidateApplicationsQuery, GetCandidateApplicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCandidateApplicationsQuery, GetCandidateApplicationsQueryVariables>(GetCandidateApplicationsDocument, options);
        }
export type GetCandidateApplicationsQueryHookResult = ReturnType<typeof useGetCandidateApplicationsQuery>;
export type GetCandidateApplicationsLazyQueryHookResult = ReturnType<typeof useGetCandidateApplicationsLazyQuery>;
export type GetCandidateApplicationsQueryResult = Apollo.QueryResult<GetCandidateApplicationsQuery, GetCandidateApplicationsQueryVariables>;
export const GetCandidatesDocument = gql`
    query GetCandidates {
  getCandidates {
    id
    name
    photoUrl
    field
    jobTitle
    github
    available
    experience
  }
}
    `;

/**
 * __useGetCandidatesQuery__
 *
 * To run a query within a React component, call `useGetCandidatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCandidatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCandidatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCandidatesQuery(baseOptions?: Apollo.QueryHookOptions<GetCandidatesQuery, GetCandidatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCandidatesQuery, GetCandidatesQueryVariables>(GetCandidatesDocument, options);
      }
export function useGetCandidatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCandidatesQuery, GetCandidatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCandidatesQuery, GetCandidatesQueryVariables>(GetCandidatesDocument, options);
        }
export type GetCandidatesQueryHookResult = ReturnType<typeof useGetCandidatesQuery>;
export type GetCandidatesLazyQueryHookResult = ReturnType<typeof useGetCandidatesLazyQuery>;
export type GetCandidatesQueryResult = Apollo.QueryResult<GetCandidatesQuery, GetCandidatesQueryVariables>;
export const GetCompaniesDocument = gql`
    query GetCompanies {
  companies {
    id
    name
    description
    photoUrl
    web
  }
}
    `;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetConversationDocument = gql`
    query GetConversation($otherProfileId: ID!) {
  conversation(otherProfileID: $otherProfileId) {
    ...conversationData
  }
}
    ${ConversationDataFragmentDoc}`;

/**
 * __useGetConversationQuery__
 *
 * To run a query within a React component, call `useGetConversationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConversationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConversationQuery({
 *   variables: {
 *      otherProfileId: // value for 'otherProfileId'
 *   },
 * });
 */
export function useGetConversationQuery(baseOptions: Apollo.QueryHookOptions<GetConversationQuery, GetConversationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConversationQuery, GetConversationQueryVariables>(GetConversationDocument, options);
      }
export function useGetConversationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConversationQuery, GetConversationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConversationQuery, GetConversationQueryVariables>(GetConversationDocument, options);
        }
export type GetConversationQueryHookResult = ReturnType<typeof useGetConversationQuery>;
export type GetConversationLazyQueryHookResult = ReturnType<typeof useGetConversationLazyQuery>;
export type GetConversationQueryResult = Apollo.QueryResult<GetConversationQuery, GetConversationQueryVariables>;
export const GetConversationsDocument = gql`
    query GetConversations {
  conversations {
    ...conversationData
  }
}
    ${ConversationDataFragmentDoc}`;

/**
 * __useGetConversationsQuery__
 *
 * To run a query within a React component, call `useGetConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConversationsQuery(baseOptions?: Apollo.QueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
      }
export function useGetConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
        }
export type GetConversationsQueryHookResult = ReturnType<typeof useGetConversationsQuery>;
export type GetConversationsLazyQueryHookResult = ReturnType<typeof useGetConversationsLazyQuery>;
export type GetConversationsQueryResult = Apollo.QueryResult<GetConversationsQuery, GetConversationsQueryVariables>;
export const GetHardSkillsInHighDemandDocument = gql`
    query getHardSkillsInHighDemand {
  getHardSkillsInHighDemand {
    ID
    Name
  }
}
    `;

/**
 * __useGetHardSkillsInHighDemandQuery__
 *
 * To run a query within a React component, call `useGetHardSkillsInHighDemandQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHardSkillsInHighDemandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHardSkillsInHighDemandQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHardSkillsInHighDemandQuery(baseOptions?: Apollo.QueryHookOptions<GetHardSkillsInHighDemandQuery, GetHardSkillsInHighDemandQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHardSkillsInHighDemandQuery, GetHardSkillsInHighDemandQueryVariables>(GetHardSkillsInHighDemandDocument, options);
      }
export function useGetHardSkillsInHighDemandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHardSkillsInHighDemandQuery, GetHardSkillsInHighDemandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHardSkillsInHighDemandQuery, GetHardSkillsInHighDemandQueryVariables>(GetHardSkillsInHighDemandDocument, options);
        }
export type GetHardSkillsInHighDemandQueryHookResult = ReturnType<typeof useGetHardSkillsInHighDemandQuery>;
export type GetHardSkillsInHighDemandLazyQueryHookResult = ReturnType<typeof useGetHardSkillsInHighDemandLazyQuery>;
export type GetHardSkillsInHighDemandQueryResult = Apollo.QueryResult<GetHardSkillsInHighDemandQuery, GetHardSkillsInHighDemandQueryVariables>;
export const GetInternalRecruitersAssignedToJobDocument = gql`
    query GetInternalRecruitersAssignedToJob($jobId: ID!) {
  getInternalRecruitersAssignedToJob(jobId: $jobId) {
    ...InternalRecruiterAssignedToJob
  }
}
    ${InternalRecruiterAssignedToJobFragmentDoc}`;

/**
 * __useGetInternalRecruitersAssignedToJobQuery__
 *
 * To run a query within a React component, call `useGetInternalRecruitersAssignedToJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInternalRecruitersAssignedToJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInternalRecruitersAssignedToJobQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useGetInternalRecruitersAssignedToJobQuery(baseOptions: Apollo.QueryHookOptions<GetInternalRecruitersAssignedToJobQuery, GetInternalRecruitersAssignedToJobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInternalRecruitersAssignedToJobQuery, GetInternalRecruitersAssignedToJobQueryVariables>(GetInternalRecruitersAssignedToJobDocument, options);
      }
export function useGetInternalRecruitersAssignedToJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInternalRecruitersAssignedToJobQuery, GetInternalRecruitersAssignedToJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInternalRecruitersAssignedToJobQuery, GetInternalRecruitersAssignedToJobQueryVariables>(GetInternalRecruitersAssignedToJobDocument, options);
        }
export type GetInternalRecruitersAssignedToJobQueryHookResult = ReturnType<typeof useGetInternalRecruitersAssignedToJobQuery>;
export type GetInternalRecruitersAssignedToJobLazyQueryHookResult = ReturnType<typeof useGetInternalRecruitersAssignedToJobLazyQuery>;
export type GetInternalRecruitersAssignedToJobQueryResult = Apollo.QueryResult<GetInternalRecruitersAssignedToJobQuery, GetInternalRecruitersAssignedToJobQueryVariables>;
export const GetJobForCandidateDocument = gql`
    query GetJobForCandidate($jobAdId: ID!) {
  jobForCandidate(jobAdId: $jobAdId) {
    jobAd {
      ...jobAdData
    }
    application {
      ...jobForCandidateApplication
    }
  }
}
    ${JobAdDataFragmentDoc}
${JobForCandidateApplicationFragmentDoc}`;

/**
 * __useGetJobForCandidateQuery__
 *
 * To run a query within a React component, call `useGetJobForCandidateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobForCandidateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobForCandidateQuery({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useGetJobForCandidateQuery(baseOptions: Apollo.QueryHookOptions<GetJobForCandidateQuery, GetJobForCandidateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobForCandidateQuery, GetJobForCandidateQueryVariables>(GetJobForCandidateDocument, options);
      }
export function useGetJobForCandidateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobForCandidateQuery, GetJobForCandidateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobForCandidateQuery, GetJobForCandidateQueryVariables>(GetJobForCandidateDocument, options);
        }
export type GetJobForCandidateQueryHookResult = ReturnType<typeof useGetJobForCandidateQuery>;
export type GetJobForCandidateLazyQueryHookResult = ReturnType<typeof useGetJobForCandidateLazyQuery>;
export type GetJobForCandidateQueryResult = Apollo.QueryResult<GetJobForCandidateQuery, GetJobForCandidateQueryVariables>;
export const GetJobForCompanyDocument = gql`
    query GetJobForCompany($jobAdId: ID!) {
  jobForCompany(jobAdId: $jobAdId) {
    jobAd {
      ...jobAdData
    }
    applications {
      ...applicationData
    }
    hires {
      id
      application {
        ...applicationData
        jobAd {
          id
          title
          company {
            id
            name
          }
        }
      }
      starting_date
      yearly_salary
    }
  }
}
    ${JobAdDataFragmentDoc}
${ApplicationDataFragmentDoc}`;

/**
 * __useGetJobForCompanyQuery__
 *
 * To run a query within a React component, call `useGetJobForCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobForCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobForCompanyQuery({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useGetJobForCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetJobForCompanyQuery, GetJobForCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobForCompanyQuery, GetJobForCompanyQueryVariables>(GetJobForCompanyDocument, options);
      }
export function useGetJobForCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobForCompanyQuery, GetJobForCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobForCompanyQuery, GetJobForCompanyQueryVariables>(GetJobForCompanyDocument, options);
        }
export type GetJobForCompanyQueryHookResult = ReturnType<typeof useGetJobForCompanyQuery>;
export type GetJobForCompanyLazyQueryHookResult = ReturnType<typeof useGetJobForCompanyLazyQuery>;
export type GetJobForCompanyQueryResult = Apollo.QueryResult<GetJobForCompanyQuery, GetJobForCompanyQueryVariables>;
export const GetJobForPublicDocument = gql`
    query GetJobForPublic($jobAdId: ID!) {
  jobForPublic(jobAdId: $jobAdId) {
    ...jobAdData
  }
}
    ${JobAdDataFragmentDoc}`;

/**
 * __useGetJobForPublicQuery__
 *
 * To run a query within a React component, call `useGetJobForPublicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobForPublicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobForPublicQuery({
 *   variables: {
 *      jobAdId: // value for 'jobAdId'
 *   },
 * });
 */
export function useGetJobForPublicQuery(baseOptions: Apollo.QueryHookOptions<GetJobForPublicQuery, GetJobForPublicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobForPublicQuery, GetJobForPublicQueryVariables>(GetJobForPublicDocument, options);
      }
export function useGetJobForPublicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobForPublicQuery, GetJobForPublicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobForPublicQuery, GetJobForPublicQueryVariables>(GetJobForPublicDocument, options);
        }
export type GetJobForPublicQueryHookResult = ReturnType<typeof useGetJobForPublicQuery>;
export type GetJobForPublicLazyQueryHookResult = ReturnType<typeof useGetJobForPublicLazyQuery>;
export type GetJobForPublicQueryResult = Apollo.QueryResult<GetJobForPublicQuery, GetJobForPublicQueryVariables>;
export const GetJobSkillsDocument = gql`
    query GetJobSkills {
  getListOfJobSkills
}
    `;

/**
 * __useGetJobSkillsQuery__
 *
 * To run a query within a React component, call `useGetJobSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJobSkillsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobSkillsQuery, GetJobSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobSkillsQuery, GetJobSkillsQueryVariables>(GetJobSkillsDocument, options);
      }
export function useGetJobSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobSkillsQuery, GetJobSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobSkillsQuery, GetJobSkillsQueryVariables>(GetJobSkillsDocument, options);
        }
export type GetJobSkillsQueryHookResult = ReturnType<typeof useGetJobSkillsQuery>;
export type GetJobSkillsLazyQueryHookResult = ReturnType<typeof useGetJobSkillsLazyQuery>;
export type GetJobSkillsQueryResult = Apollo.QueryResult<GetJobSkillsQuery, GetJobSkillsQueryVariables>;
export const GetJobsForCandidateDocument = gql`
    query GetJobsForCandidate($filters: JobFilters, $sortBy: SortJobsBy) {
  jobsForCandidate(filters: $filters, sortBy: $sortBy) {
    jobAd {
      ...jobAdForCandidate
    }
    application {
      id
    }
  }
}
    ${JobAdForCandidateFragmentDoc}`;

/**
 * __useGetJobsForCandidateQuery__
 *
 * To run a query within a React component, call `useGetJobsForCandidateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsForCandidateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsForCandidateQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetJobsForCandidateQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsForCandidateQuery, GetJobsForCandidateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsForCandidateQuery, GetJobsForCandidateQueryVariables>(GetJobsForCandidateDocument, options);
      }
export function useGetJobsForCandidateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsForCandidateQuery, GetJobsForCandidateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsForCandidateQuery, GetJobsForCandidateQueryVariables>(GetJobsForCandidateDocument, options);
        }
export type GetJobsForCandidateQueryHookResult = ReturnType<typeof useGetJobsForCandidateQuery>;
export type GetJobsForCandidateLazyQueryHookResult = ReturnType<typeof useGetJobsForCandidateLazyQuery>;
export type GetJobsForCandidateQueryResult = Apollo.QueryResult<GetJobsForCandidateQuery, GetJobsForCandidateQueryVariables>;
export const GetJobsForCompanyDocument = gql`
    query GetJobsForCompany($filters: JobFilters, $sortBy: SortJobsBy) {
  jobsForCompany(filters: $filters, sortBy: $sortBy) {
    ...jobForCompanyJobAd
  }
}
    ${JobForCompanyJobAdFragmentDoc}`;

/**
 * __useGetJobsForCompanyQuery__
 *
 * To run a query within a React component, call `useGetJobsForCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsForCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsForCompanyQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetJobsForCompanyQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsForCompanyQuery, GetJobsForCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsForCompanyQuery, GetJobsForCompanyQueryVariables>(GetJobsForCompanyDocument, options);
      }
export function useGetJobsForCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsForCompanyQuery, GetJobsForCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsForCompanyQuery, GetJobsForCompanyQueryVariables>(GetJobsForCompanyDocument, options);
        }
export type GetJobsForCompanyQueryHookResult = ReturnType<typeof useGetJobsForCompanyQuery>;
export type GetJobsForCompanyLazyQueryHookResult = ReturnType<typeof useGetJobsForCompanyLazyQuery>;
export type GetJobsForCompanyQueryResult = Apollo.QueryResult<GetJobsForCompanyQuery, GetJobsForCompanyQueryVariables>;
export const GetJobsForInternalRecruiterDocument = gql`
    query GetJobsForInternalRecruiter($filters: JobFilters, $sortBy: SortJobsBy) {
  jobsForInternalRecruiter(filters: $filters, sortBy: $sortBy) {
    jobAd {
      ...jobForCompanyJobAd
    }
  }
}
    ${JobForCompanyJobAdFragmentDoc}`;

/**
 * __useGetJobsForInternalRecruiterQuery__
 *
 * To run a query within a React component, call `useGetJobsForInternalRecruiterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsForInternalRecruiterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsForInternalRecruiterQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetJobsForInternalRecruiterQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsForInternalRecruiterQuery, GetJobsForInternalRecruiterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsForInternalRecruiterQuery, GetJobsForInternalRecruiterQueryVariables>(GetJobsForInternalRecruiterDocument, options);
      }
export function useGetJobsForInternalRecruiterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsForInternalRecruiterQuery, GetJobsForInternalRecruiterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsForInternalRecruiterQuery, GetJobsForInternalRecruiterQueryVariables>(GetJobsForInternalRecruiterDocument, options);
        }
export type GetJobsForInternalRecruiterQueryHookResult = ReturnType<typeof useGetJobsForInternalRecruiterQuery>;
export type GetJobsForInternalRecruiterLazyQueryHookResult = ReturnType<typeof useGetJobsForInternalRecruiterLazyQuery>;
export type GetJobsForInternalRecruiterQueryResult = Apollo.QueryResult<GetJobsForInternalRecruiterQuery, GetJobsForInternalRecruiterQueryVariables>;
export const GetJobsPublicDocument = gql`
    query GetJobsPublic($filters: JobFilters, $sortBy: SortJobsBy) {
  jobsPublic(filters: $filters, sortBy: $sortBy) {
    ...jobPublic
  }
}
    ${JobPublicFragmentDoc}`;

/**
 * __useGetJobsPublicQuery__
 *
 * To run a query within a React component, call `useGetJobsPublicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsPublicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsPublicQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetJobsPublicQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsPublicQuery, GetJobsPublicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsPublicQuery, GetJobsPublicQueryVariables>(GetJobsPublicDocument, options);
      }
export function useGetJobsPublicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsPublicQuery, GetJobsPublicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsPublicQuery, GetJobsPublicQueryVariables>(GetJobsPublicDocument, options);
        }
export type GetJobsPublicQueryHookResult = ReturnType<typeof useGetJobsPublicQuery>;
export type GetJobsPublicLazyQueryHookResult = ReturnType<typeof useGetJobsPublicLazyQuery>;
export type GetJobsPublicQueryResult = Apollo.QueryResult<GetJobsPublicQuery, GetJobsPublicQueryVariables>;
export const GetNotificationsDocument = gql`
    query GetNotifications {
  notifications {
    ...NotificationData
  }
}
    ${NotificationDataFragmentDoc}`;

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
      }
export function useGetNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
        }
export type GetNotificationsQueryHookResult = ReturnType<typeof useGetNotificationsQuery>;
export type GetNotificationsLazyQueryHookResult = ReturnType<typeof useGetNotificationsLazyQuery>;
export type GetNotificationsQueryResult = Apollo.QueryResult<GetNotificationsQuery, GetNotificationsQueryVariables>;
export const GetProfileDocument = gql`
    query GetProfile($profileID: ID!) {
  profile(profileID: $profileID) {
    id
    name
    photoUrl
    role
    ... on CompanyHrProfile {
      location
      linkedin
      about
      jobTitle
      company {
        id
        name
        photoUrl
        web
        description
      }
    }
    ... on InternalRecruiterProfile {
      location
      jobTitle
      about
      linkedin
      calendlyUrl
    }
    ... on StakerProfile {
      jobTitle
      walletsInfo: walletInfo {
        id
        blockchain
        walletAddress
      }
      linkedin
      companyName
      about
      github
    }
    ... on CandidateProfile {
      location
      field
      linkedin
      jobTitle
      companyName
      experience
      techSkills
      softSkills
      about
      web
      github
      available
      walletInfo {
        id
        blockchain
        walletAddress
      }
    }
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      profileID: // value for 'profileID'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetReferenceForInternalRecruiterDocument = gql`
    query GetReferenceForInternalRecruiter($referenceId: String!) {
  referenceForRecruiter(referenceId: $referenceId) {
    jobAd {
      ...jobAdData
    }
    reference {
      id
      answers {
        id
        question {
          id
          text
        }
        text
      }
      referrer {
        id
        name
        photoUrl
      }
    }
    referee {
      id
      name
      photoUrl
      ... on CandidateProfile {
        available
        field
        experience
      }
    }
    candidateName
    email
    linkedinUrl
    status
    applicationId
  }
}
    ${JobAdDataFragmentDoc}`;

/**
 * __useGetReferenceForInternalRecruiterQuery__
 *
 * To run a query within a React component, call `useGetReferenceForInternalRecruiterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferenceForInternalRecruiterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferenceForInternalRecruiterQuery({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useGetReferenceForInternalRecruiterQuery(baseOptions: Apollo.QueryHookOptions<GetReferenceForInternalRecruiterQuery, GetReferenceForInternalRecruiterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferenceForInternalRecruiterQuery, GetReferenceForInternalRecruiterQueryVariables>(GetReferenceForInternalRecruiterDocument, options);
      }
export function useGetReferenceForInternalRecruiterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferenceForInternalRecruiterQuery, GetReferenceForInternalRecruiterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferenceForInternalRecruiterQuery, GetReferenceForInternalRecruiterQueryVariables>(GetReferenceForInternalRecruiterDocument, options);
        }
export type GetReferenceForInternalRecruiterQueryHookResult = ReturnType<typeof useGetReferenceForInternalRecruiterQuery>;
export type GetReferenceForInternalRecruiterLazyQueryHookResult = ReturnType<typeof useGetReferenceForInternalRecruiterLazyQuery>;
export type GetReferenceForInternalRecruiterQueryResult = Apollo.QueryResult<GetReferenceForInternalRecruiterQuery, GetReferenceForInternalRecruiterQueryVariables>;
export const GetReferralDocument = gql`
    query GetReferral($referenceId: String!) {
  referenceForCandidate(referenceId: $referenceId) {
    jobAd {
      ...jobAdData
    }
    reference {
      id
      answers {
        id
        question {
          id
          text
        }
        text
      }
      referrer {
        id
        name
        photoUrl
      }
    }
    referee {
      id
      name
      photoUrl
      ... on CandidateProfile {
        available
        field
        experience
      }
    }
    candidateName
    email
    linkedinUrl
    status
    applicationId
  }
}
    ${JobAdDataFragmentDoc}`;

/**
 * __useGetReferralQuery__
 *
 * To run a query within a React component, call `useGetReferralQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferralQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferralQuery({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useGetReferralQuery(baseOptions: Apollo.QueryHookOptions<GetReferralQuery, GetReferralQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferralQuery, GetReferralQueryVariables>(GetReferralDocument, options);
      }
export function useGetReferralLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferralQuery, GetReferralQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferralQuery, GetReferralQueryVariables>(GetReferralDocument, options);
        }
export type GetReferralQueryHookResult = ReturnType<typeof useGetReferralQuery>;
export type GetReferralLazyQueryHookResult = ReturnType<typeof useGetReferralLazyQuery>;
export type GetReferralQueryResult = Apollo.QueryResult<GetReferralQuery, GetReferralQueryVariables>;
export const GetReferralWithoutJobDocument = gql`
    query GetReferralWithoutJob($referralWithoutJobId: String!) {
  referralWithoutJob(referralWithoutJobId: $referralWithoutJobId) {
    id
    name
    email
    linkedinUrl
    githubUrl
    hardSkills
    isIncognito
    relationshipWithCandidate
    standOut
    referrer {
      id
      name
    }
  }
}
    `;

/**
 * __useGetReferralWithoutJobQuery__
 *
 * To run a query within a React component, call `useGetReferralWithoutJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferralWithoutJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferralWithoutJobQuery({
 *   variables: {
 *      referralWithoutJobId: // value for 'referralWithoutJobId'
 *   },
 * });
 */
export function useGetReferralWithoutJobQuery(baseOptions: Apollo.QueryHookOptions<GetReferralWithoutJobQuery, GetReferralWithoutJobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferralWithoutJobQuery, GetReferralWithoutJobQueryVariables>(GetReferralWithoutJobDocument, options);
      }
export function useGetReferralWithoutJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferralWithoutJobQuery, GetReferralWithoutJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferralWithoutJobQuery, GetReferralWithoutJobQueryVariables>(GetReferralWithoutJobDocument, options);
        }
export type GetReferralWithoutJobQueryHookResult = ReturnType<typeof useGetReferralWithoutJobQuery>;
export type GetReferralWithoutJobLazyQueryHookResult = ReturnType<typeof useGetReferralWithoutJobLazyQuery>;
export type GetReferralWithoutJobQueryResult = Apollo.QueryResult<GetReferralWithoutJobQuery, GetReferralWithoutJobQueryVariables>;
export const GetReferralsForCandidateDocument = gql`
    query GetReferralsForCandidate($filters: JobFilters) {
  candidateReferrals(filters: $filters) {
    ...MyEndorsementsCandidateReferral
  }
  myReferralsWithoutJob {
    ...MyEndorsementsMyReferralsWithoutJob
  }
  myPendingReferences {
    ...MyEndorsementsMyPendingReferences
  }
}
    ${MyEndorsementsCandidateReferralFragmentDoc}
${MyEndorsementsMyReferralsWithoutJobFragmentDoc}
${MyEndorsementsMyPendingReferencesFragmentDoc}`;

/**
 * __useGetReferralsForCandidateQuery__
 *
 * To run a query within a React component, call `useGetReferralsForCandidateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferralsForCandidateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferralsForCandidateQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetReferralsForCandidateQuery(baseOptions?: Apollo.QueryHookOptions<GetReferralsForCandidateQuery, GetReferralsForCandidateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferralsForCandidateQuery, GetReferralsForCandidateQueryVariables>(GetReferralsForCandidateDocument, options);
      }
export function useGetReferralsForCandidateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferralsForCandidateQuery, GetReferralsForCandidateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferralsForCandidateQuery, GetReferralsForCandidateQueryVariables>(GetReferralsForCandidateDocument, options);
        }
export type GetReferralsForCandidateQueryHookResult = ReturnType<typeof useGetReferralsForCandidateQuery>;
export type GetReferralsForCandidateLazyQueryHookResult = ReturnType<typeof useGetReferralsForCandidateLazyQuery>;
export type GetReferralsForCandidateQueryResult = Apollo.QueryResult<GetReferralsForCandidateQuery, GetReferralsForCandidateQueryVariables>;
export const GetReferralsWithoutJobForInternalRecruiterDocument = gql`
    query GetReferralsWithoutJobForInternalRecruiter {
  referralsWithoutJob {
    id
    name
    email
    date
    referrer {
      id
      name
    }
    hardSkills
  }
}
    `;

/**
 * __useGetReferralsWithoutJobForInternalRecruiterQuery__
 *
 * To run a query within a React component, call `useGetReferralsWithoutJobForInternalRecruiterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferralsWithoutJobForInternalRecruiterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferralsWithoutJobForInternalRecruiterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReferralsWithoutJobForInternalRecruiterQuery(baseOptions?: Apollo.QueryHookOptions<GetReferralsWithoutJobForInternalRecruiterQuery, GetReferralsWithoutJobForInternalRecruiterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferralsWithoutJobForInternalRecruiterQuery, GetReferralsWithoutJobForInternalRecruiterQueryVariables>(GetReferralsWithoutJobForInternalRecruiterDocument, options);
      }
export function useGetReferralsWithoutJobForInternalRecruiterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferralsWithoutJobForInternalRecruiterQuery, GetReferralsWithoutJobForInternalRecruiterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferralsWithoutJobForInternalRecruiterQuery, GetReferralsWithoutJobForInternalRecruiterQueryVariables>(GetReferralsWithoutJobForInternalRecruiterDocument, options);
        }
export type GetReferralsWithoutJobForInternalRecruiterQueryHookResult = ReturnType<typeof useGetReferralsWithoutJobForInternalRecruiterQuery>;
export type GetReferralsWithoutJobForInternalRecruiterLazyQueryHookResult = ReturnType<typeof useGetReferralsWithoutJobForInternalRecruiterLazyQuery>;
export type GetReferralsWithoutJobForInternalRecruiterQueryResult = Apollo.QueryResult<GetReferralsWithoutJobForInternalRecruiterQuery, GetReferralsWithoutJobForInternalRecruiterQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($renewToken: String!) {
  getUser(renewToken: $renewToken) {
    user {
      ...userData
    }
    profile {
      ...FullProfile
    }
    token
  }
}
    ${UserDataFragmentDoc}
${FullProfileFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      renewToken: // value for 'renewToken'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUserSuggestionsDocument = gql`
    query GetUserSuggestions($text: String!) {
  userSuggestions(text: $text) {
    id
    name
    email
    profile {
      ... on CandidateProfile {
        linkedin
      }
    }
  }
}
    `;

/**
 * __useGetUserSuggestionsQuery__
 *
 * To run a query within a React component, call `useGetUserSuggestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSuggestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSuggestionsQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useGetUserSuggestionsQuery(baseOptions: Apollo.QueryHookOptions<GetUserSuggestionsQuery, GetUserSuggestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserSuggestionsQuery, GetUserSuggestionsQueryVariables>(GetUserSuggestionsDocument, options);
      }
export function useGetUserSuggestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserSuggestionsQuery, GetUserSuggestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserSuggestionsQuery, GetUserSuggestionsQueryVariables>(GetUserSuggestionsDocument, options);
        }
export type GetUserSuggestionsQueryHookResult = ReturnType<typeof useGetUserSuggestionsQuery>;
export type GetUserSuggestionsLazyQueryHookResult = ReturnType<typeof useGetUserSuggestionsLazyQuery>;
export type GetUserSuggestionsQueryResult = Apollo.QueryResult<GetUserSuggestionsQuery, GetUserSuggestionsQueryVariables>;
export const ReferenceForCandidateDocument = gql`
    query ReferenceForCandidate($referenceId: String!) {
  referenceForCandidate(referenceId: $referenceId) {
    jobAd {
      ...jobAdData
    }
    reference {
      id
      answers {
        id
        question {
          id
          text
        }
        text
      }
      referrer {
        id
        name
        photoUrl
      }
    }
    email
    status
    applicationId
  }
}
    ${JobAdDataFragmentDoc}`;

/**
 * __useReferenceForCandidateQuery__
 *
 * To run a query within a React component, call `useReferenceForCandidateQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferenceForCandidateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferenceForCandidateQuery({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useReferenceForCandidateQuery(baseOptions: Apollo.QueryHookOptions<ReferenceForCandidateQuery, ReferenceForCandidateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReferenceForCandidateQuery, ReferenceForCandidateQueryVariables>(ReferenceForCandidateDocument, options);
      }
export function useReferenceForCandidateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReferenceForCandidateQuery, ReferenceForCandidateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReferenceForCandidateQuery, ReferenceForCandidateQueryVariables>(ReferenceForCandidateDocument, options);
        }
export type ReferenceForCandidateQueryHookResult = ReturnType<typeof useReferenceForCandidateQuery>;
export type ReferenceForCandidateLazyQueryHookResult = ReturnType<typeof useReferenceForCandidateLazyQuery>;
export type ReferenceForCandidateQueryResult = Apollo.QueryResult<ReferenceForCandidateQuery, ReferenceForCandidateQueryVariables>;
export const ReferenceForReferrerDocument = gql`
    query ReferenceForReferrer($referenceId: String!) {
  referenceForReferrer(referenceId: $referenceId) {
    jobAd {
      ...jobAdData
    }
    reference {
      id
      answers {
        id
        question {
          id
          text
        }
        text
      }
    }
    referee {
      id
      name
      photoUrl
      ... on CandidateProfile {
        available
        field
        experience
      }
    }
    email
    status
    applicationId
  }
}
    ${JobAdDataFragmentDoc}`;

/**
 * __useReferenceForReferrerQuery__
 *
 * To run a query within a React component, call `useReferenceForReferrerQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferenceForReferrerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferenceForReferrerQuery({
 *   variables: {
 *      referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useReferenceForReferrerQuery(baseOptions: Apollo.QueryHookOptions<ReferenceForReferrerQuery, ReferenceForReferrerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReferenceForReferrerQuery, ReferenceForReferrerQueryVariables>(ReferenceForReferrerDocument, options);
      }
export function useReferenceForReferrerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReferenceForReferrerQuery, ReferenceForReferrerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReferenceForReferrerQuery, ReferenceForReferrerQueryVariables>(ReferenceForReferrerDocument, options);
        }
export type ReferenceForReferrerQueryHookResult = ReturnType<typeof useReferenceForReferrerQuery>;
export type ReferenceForReferrerLazyQueryHookResult = ReturnType<typeof useReferenceForReferrerLazyQuery>;
export type ReferenceForReferrerQueryResult = Apollo.QueryResult<ReferenceForReferrerQuery, ReferenceForReferrerQueryVariables>;
export const GetMessageCreatedDocument = gql`
    subscription GetMessageCreated($jwtToken: String!) {
  messageCreated(jwtToken: $jwtToken) {
    id
    from {
      ...basicProfile
    }
    text
    date
    read
  }
}
    ${BasicProfileFragmentDoc}`;

/**
 * __useGetMessageCreatedSubscription__
 *
 * To run a query within a React component, call `useGetMessageCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageCreatedSubscription({
 *   variables: {
 *      jwtToken: // value for 'jwtToken'
 *   },
 * });
 */
export function useGetMessageCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetMessageCreatedSubscription, GetMessageCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetMessageCreatedSubscription, GetMessageCreatedSubscriptionVariables>(GetMessageCreatedDocument, options);
      }
export type GetMessageCreatedSubscriptionHookResult = ReturnType<typeof useGetMessageCreatedSubscription>;
export type GetMessageCreatedSubscriptionResult = Apollo.SubscriptionResult<GetMessageCreatedSubscription>;
export const GetNotificationCreatedDocument = gql`
    subscription GetNotificationCreated($jwtToken: String!) {
  notificationCreated(jwtToken: $jwtToken) {
    __typename
    id
    type
    date
    application {
      id
      candidate {
        id
        name
        photoUrl
      }
      reference {
        referrer {
          id
          name
          photoUrl
          role
        }
      }
      jobAd {
        id
        title
        company {
          photoUrl
        }
      }
      notes {
        id
        writtenBy {
          id
          name
          photoUrl
          role
        }
      }
      status
    }
    linkID
    triggerUserProfile {
      id
      name
      photoUrl
    }
    info
    read
  }
}
    `;

/**
 * __useGetNotificationCreatedSubscription__
 *
 * To run a query within a React component, call `useGetNotificationCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationCreatedSubscription({
 *   variables: {
 *      jwtToken: // value for 'jwtToken'
 *   },
 * });
 */
export function useGetNotificationCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetNotificationCreatedSubscription, GetNotificationCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetNotificationCreatedSubscription, GetNotificationCreatedSubscriptionVariables>(GetNotificationCreatedDocument, options);
      }
export type GetNotificationCreatedSubscriptionHookResult = ReturnType<typeof useGetNotificationCreatedSubscription>;
export type GetNotificationCreatedSubscriptionResult = Apollo.SubscriptionResult<GetNotificationCreatedSubscription>;