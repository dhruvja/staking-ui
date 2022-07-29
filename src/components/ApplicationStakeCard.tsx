import Img from "react-cool-img";
import { Link } from "react-router-dom";
import { Application } from "src/types/models";
import jobPlaceholderImage from "src/images/jobPlaceholder.jpeg";
import { useStakedApplication } from "src/hooks/stake";

const ApplicationStakeCard = ({
  application,
  goToLink,
}: {
  application: Application;
  goToLink: string;
}) => {
  const staked = useStakedApplication(application.id);
  const isStaked = !!staked;

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
        <div className="font-medium text-sm">$4,302.34</div>
        {!isStaked && <div className="btn-blue text-xs">STAKE</div>}
      </div>
    </Link>
  );
};

export default ApplicationStakeCard;
