import Img from "react-cool-img";
import { Link } from "react-router-dom";
import jobPlaceholderImage from "src/images/jobPlaceholder.jpeg";
import candidateNft from "src/images/candidateNft.svg";
import StakeModal from "src/modals/StakeModal";
import { JobApplicationForStaker, StakedData } from "src/types/models";
import UnstakeModal from "src/modals/UnstakeModal";
import { ReactComponent as QuestionMarkIcon } from "src/images/questionMark.svg";
import { useGetStakeModalIsConfirmed } from "src/hooks/stakeModal";
import { useApplicationStakeInfo } from "src/hooks/web3";

const ApplicationDetails = (props: {
  application: JobApplicationForStaker;
  stakedData: StakedData | undefined;
  candidatePageLink: string;
  jobPageLink: string;
}) => {
  const isConfirmedModal = useGetStakeModalIsConfirmed();

  const application = props.application;
  const stakedApplication = props.stakedData;
  const isStaked = !!stakedApplication && !isConfirmedModal;

  const { info } = useApplicationStakeInfo(application.id);

  return (
    <div>
      <div className="flex gap-6">
        <div className="relative h-[70px] w-[70px]">
          <Img
            src={candidateNft}
            alt={application.candidate.jobTitle}
            placeholder={jobPlaceholderImage}
            error={jobPlaceholderImage}
            className="rounded-full object-cover w-[45px] h-[45px] absolute top-0 left-0"
          />
          <Img
            src={application.jobAd.company.photoUrl}
            alt={application.jobAd.company.name}
            placeholder={jobPlaceholderImage}
            error={jobPlaceholderImage}
            className="rounded-full object-cover w-[45px] h-[45px] absolute bottom-0 right-0"
          />
        </div>
        <h1 className="text-3xl font-sora font-bold font">
          {application.candidate.jobTitle}
        </h1>
        <div className="ml-auto flex gap-4 items-center">
          <Link
            to={props.candidatePageLink}
            className="btn-transparent font-bold"
          >
            THE CANDIDATE
          </Link>
          <Link to={props.jobPageLink} className="btn-transparent font-bold">
            THE JOB
          </Link>
        </div>
      </div>

      <div className="mt-16 flex justify-evenly">
        {isStaked && (
          <div className="flex flex-col gap-3 text-center">
            <span className="font-medium text-2xl">
              {stakedApplication.amount}
            </span>
            <span className="font-sora text-sm text-[#D0C9D6]">Your stake</span>
          </div>
        )}

        <div className="flex flex-col gap-3 text-center">
          <span className="font-medium text-2xl">
            {info?.maxAllowedStaked ?? ""} USDC
          </span>
          <span className="font-sora text-sm text-[#D0C9D6]">
            Available staking amount
          </span>
        </div>

        <div className="flex flex-col gap-3 text-center">
          <span className="font-medium text-2xl">13,532%</span>
          <span className="font-sora text-sm text-[#D0C9D6]">
            Expected APY of your stake{" "}
          </span>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-5">
        <div className="bg-card rounded-md px-5 py-9 flex items-center justify-between">
          <span className="font-sora font-medium text-base">Total Staked</span>
          <span className="font-medium text-base">
            {info?.stakedAmount ?? ""} USDC
          </span>
        </div>

        <div className="bg-card rounded-md px-5 py-9 flex items-center justify-between">
          <span className="font-sora font-medium text-base">Stakers</span>
          <span className="font-medium text-base">009</span>
        </div>
      </div>

      <div className="mt-5 text-[#979797] text-xs flex items-center gap-2 font-sora">
        <QuestionMarkIcon />
        You will stake until the application closes and completes its 3 month
        cycle
      </div>

      <div className="mt-24 flex items-center justify-center">
        {isStaked ? (
          <UnstakeModal
            application={application}
            amount={stakedApplication.amount}
          >
            {(open) => (
              <button
                onClick={open}
                className="btn-transparent py-3 px-16 font-bold"
              >
                UNSTAKE
              </button>
            )}
          </UnstakeModal>
        ) : (
          <StakeModal application={application}>
            {(open) => (
              <button
                onClick={open}
                className="btn-degraded py-3 px-16 font-bold"
              >
                LET'S STAKE
              </button>
            )}
          </StakeModal>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetails;
