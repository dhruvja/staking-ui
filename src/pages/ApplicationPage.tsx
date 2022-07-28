import Img from "react-cool-img";
import { Link, useParams } from "react-router-dom";
import useApplication from "src/hooks/useApplication";
import jobPlaceholderImage from "src/images/jobPlaceholder.jpeg";
import { paths } from "src/pagesPaths";
import candidateNft from "src/images/candidateNft.svg";
import { Helmet } from "react-helmet";
import StakeModal from "src/modals/StakeModal";

const ApplicationPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const application = useApplication(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }

  return (
    <div className="p-10">
      <Helmet>
        <title>Dorse - {application.jobAd.title}</title>
        <meta
          name="description"
          content={`${application.candidate.jobTitle} applied at ${application.jobAd.title}.
          See the application details and stake.`}
        />
      </Helmet>

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
            to={paths.applicationCandidate.resolve(application.id)}
            className="btn-transparent font-bold"
          >
            THE CANDIDATE
          </Link>
          <Link
            to={paths.applicationJob.resolve(application.id)}
            className="btn-transparent font-bold"
          >
            THE JOB
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-card rounded-md px-5 py-9 flex items-center justify-between">
        <span className="font-sora font-medium text-base">Total Staked</span>
        <span className="font-medium text-base">$4,302.34</span>
      </div>

      <div className="mt-24 flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default ApplicationPage;
