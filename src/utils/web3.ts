import { Idl, Program, Provider, web3 } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import kp from "src/keypair.json";
import general from "src/idl/general.json";
import job from "src/idl/job.json";
import application from "src/idl/application.json";
import candidateStaking from "src/idl/candidate_staking.json";
export { default as tokenMint } from "src/mint.json";

// Create a keypair for the account that will hold the GIF data.
const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = web3.Keypair.fromSecretKey(secret);

// Get our program's id from the IDL file.
export const generalProgramID = new PublicKey(general.metadata.address);
export const jobProgramID = new PublicKey(job.metadata.address);
export const applicationProgramID = new PublicKey(application.metadata.address);
export const candidateStakingProgramID = new PublicKey(
  candidateStaking.metadata.address
);

export const getApplicationProgram = (provider: Provider) => {
  return new Program(application as Idl, applicationProgramID, provider);
};

export const getJobProgram = (provider: Provider) => {
  return new Program(job as Idl, jobProgramID, provider);
};

export const getGeneralProgram = (provider: Provider) => {
  return new Program(general as Idl, generalProgramID, provider);
};

export const getCandidateStakingProgram = (provider: Provider) => {
  return new Program(
    candidateStaking as Idl,
    candidateStakingProgramID,
    provider
  );
};
