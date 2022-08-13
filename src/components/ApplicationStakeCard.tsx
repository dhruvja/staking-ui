import Img from "react-cool-img";
import { Link } from "react-router-dom";
import jobPlaceholderImage from "src/images/jobPlaceholder.jpeg";
import { useApplicationStakeInfo } from "src/hooks/web3";
import { JobApplicationForStaker } from "src/types/models";
import { useStakedData } from "src/hooks/applications";

const ApplicationStakeCard = ({
  application,
  goToLink,
}: {
  application: JobApplicationForStaker;
  goToLink: string;
}) => {
  const staked = useStakedData(application.id);
  const isStaked = !!staked;

  const { info } = useApplicationStakeInfo(application.id);

  return (
    <Link
      to={goToLink}
      key={application.id}
      className="card px-4 flex gap-6 items-center h-28"
    >
      <Img
        src={application.jobAd.company.photoUrl}
        alt={application.jobAd.company.name}
        placeholder={jobPlaceholderImage}
        error={jobPlaceholderImage}
        className="rounded-md object-cover w-[70px] h-[70px]"
      />

      <div className="text-sm text-ellipsis overflow-hidden">
        <span>{application.candidate.jobTitle} applied to the position</span>{" "}
        <span className="font-semibold">{application.jobAd.title}</span>{" "}
        <span>at</span>{" "}
        <span className="font-semibold">{application.jobAd.company.name}</span>
      </div>

      <div className="flex flex-col gap-2 items-end ml-auto">
        {info?.stakedAmount && (
          <div className="font-medium text-sm">{info.stakedAmount} USDC</div>
        )}
        {!isStaked && <div className="btn-blue text-xs">STAKE</div>}
      </div>
    </Link>
  );
};

export default ApplicationStakeCard;
