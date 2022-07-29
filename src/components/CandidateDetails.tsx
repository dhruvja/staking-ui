import Img from "react-cool-img";
import { Link } from "react-router-dom";
import jobPlaceholderImage from "src/images/jobPlaceholder.jpeg";
import { ReactComponent as BackArrowIcon } from "src/images/backArrow.svg";
import { Application, Candidate, StakedApplication } from "src/types/models";
import candidateNft from "src/images/candidateNft.svg";
import StakeModal from "src/modals/StakeModal";
import UnstakeModal from "src/modals/UnstakeModal";

const CandidateDetails = (props: {
  application: Application;
  stakedData: StakedApplication | undefined;
  goBackLink: string;
}) => {
  const application = props.application;
  const stakedData = props.stakedData;
  const isStaked = stakedData !== undefined;

  return (
    <div>
      <div className="flex gap-5 items-center">
        <div>
          <Link to={props.goBackLink} className="w-5 h-5">
            <BackArrowIcon />
          </Link>
        </div>
        <Img
          src={candidateNft}
          alt={application.candidate.jobTitle}
          placeholder={jobPlaceholderImage}
          error={jobPlaceholderImage}
          className="rounded-md object-cover w-[70px] h-[70px]"
        />
        <div className="flex flex-col gap-2">
          <span className="font-sora font-bold text-3xl">
            {application.candidate.jobTitle}
          </span>
          <span className="text-xs text-secondary">
            {application.candidate.location}
          </span>
        </div>
        <div className="ml-auto">
          {isStaked ? (
            <UnstakeModal application={application} amount={stakedData.amount}>
              {(open) => (
                <button
                  onClick={open}
                  className="btn-transparent py-3 px-10 font-bold"
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
                  className="btn-degraded py-3 px-10 font-bold"
                >
                  STAKE
                </button>
              )}
            </StakeModal>
          )}
        </div>
      </div>

      <div className="mt-10 bg-card rounded-md p-5 flex justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-sora font-normal text-sm text-[#928CA6]">
            Location
          </span>
          <span className="font-medium text-sm">
            {application.candidate.location}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-sora font-normal text-sm text-[#928CA6]">
            Experience
          </span>
          <span className="font-medium text-sm capitalize">
            {application.candidate.experience.replaceAll("_", " ")}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-sora font-normal text-sm text-[#928CA6]">
            Status
          </span>
          <span className="font-medium text-sm capitalize">
            {application.candidate.field.join(", ")}
          </span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <CandidateTags candidate={application.candidate} />

        {application.candidate.softSkills.length > 0 && (
          <div className="flex gap-2 items-center">
            <span className="text-sm font-normal font-sora text-[#D0C9D6]">
              Soft skills:
            </span>
            <div className="flex flex-nowrap overflow-scroll uppercase gap-[6px] text-[12px] leading-[16px] font-roboto">
              {application.candidate.softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex whitespace-nowrap items-center justify-center h-[18px] px-2 text-center bg-[#5362E9] rounded-sm"
                >
                  {skill}
                </div> /* Auto layout */
              ))}
            </div>
          </div>
        )}

        {application.candidate.techSkills.length > 0 && (
          <div className="flex gap-2 items-center">
            <span className="text-sm font-normal font-sora text-[#D0C9D6]">
              Tech skills:
            </span>
            <div className="flex flex-nowrap overflow-scroll uppercase gap-[6px] text-[12px] leading-[16px] font-roboto">
              {application.candidate.techSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex whitespace-nowrap items-center justify-center h-[18px] px-2 text-center bg-[#5362E9] rounded-sm"
                >
                  {skill}
                </div> /* Auto layout */
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-11 flex flex-col gap-6">
        <div className="bg-card p-4 rounded-2xl flex flex-col gap-3">
          <h5 className="font-sora text-[#D0C9D6] text-sm">About:</h5>
          <p className="text-xs">{application.candidate.about ?? "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;

type CandidateTagsProps = {
  candidate: Partial<Candidate>;
};

const CandidateTags = ({ candidate }: CandidateTagsProps): JSX.Element => {
  const { available, field, experience } = candidate;

  const fields = field ?? [];

  return (
    <div className="flex gap-2">
      <span className="text-sm font-normal font-sora text-[#D0C9D6]">
        Tags:
      </span>
      <div className="overflow-scroll flex uppercase gap-[6px] text-[12px] leading-[16px] font-roboto">
        {[available ? "Available" : null, ...fields, experience]
          .filter(Boolean)
          .map((tag) => {
            if (tag) {
              return (
                <div
                  key={tag}
                  className="flex whitespace-nowrap items-center justify-center h-[18px] px-2 text-center bg-[#5362E9] rounded-sm"
                >
                  {tag.replaceAll("_", " ")}
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};
