export interface JobAndApplications {
  jobAd: JobAd;
  applications: Application[];
}

export interface Application {
  id: string;
  date: string;
  status: ApplicationStatus;
  notes: Note[];
  hire: null;
  rejection: null;
  fosterScore: number;
  candidate: Candidate;
  jobAd: JobAd;
}

export interface Candidate {
  id: string;
  name: string;
  role: Role;
  photoUrl: null | string;
  linkedin: string;
  location: string;
  field: string[];
  jobTitle: string;
  companyName: string;
  walletInfo: WalletInfo | null;
  experience: Experience;
  candidateSkills: null;
  techSkills: string[];
  softSkills: string[];
  about: null | string;
  web: null | string;
  github: null | string;
  available: null;
}

export enum Experience {
  EarlyCareer = "early_career",
  MidLevel = "mid_level",
  Senior = "senior",
}

export enum Role {
  Candidate = "candidate",
}

export interface WalletInfo {
  id: string;
  blockchain: string;
  walletAddress: string;
}

export interface JobAd {
  id: string;
  company: Company;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  jobSkills: string[] | null;
  preferred: string;
  benefits: string;
  format: Format;
  date: string;
  location: Location;
  isRemote: boolean;
  currency: Currency;
  minSalary: number;
  maxSalary: number;
  status: JobAdStatus;
  field: Field;
  experience: Experience;
}

export interface Company {
  id: string;
  name: Name;
  photoUrl: string;
  description: string;
}

export enum Name {
  BitGo = "BitGo",
}

export enum Currency {
  Empty = "$",
}

export enum Field {
  Engineering = "engineering",
}

export enum Format {
  FullTime = "full_time",
}

export enum Location {
  UnitedStatesCanadaRemote = "United States, Canada - Remote",
  UnitedStatesRemote = "United States - Remote",
}

export enum JobAdStatus {
  Active = "active",
  Finished = "finished",
}

export interface Note {
  id: string;
  date: string;
}

export enum ApplicationStatus {
  InReview = "in_review",
  Rejected = "rejected",
}
