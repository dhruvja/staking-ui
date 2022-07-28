import Img from "react-cool-img";
import { Link, useParams } from "react-router-dom";
import jobPlaceholderImage from "src/images/jobPlaceholder.jpeg";
import { paths } from "src/pagesPaths";
import candidateNft from "src/images/candidateNft.svg";
import { Helmet } from "react-helmet";
import { useStakedApplication } from "src/hooks/stake";
import UnstakeModal from "src/modals/UnstakeModal";

const MyStakedApplicationPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const stakedApplication = useStakedApplication(applicationId);

  if (!stakedApplication) {
    throw new Error(`Application ${applicationId} not found`);
  }

  const { application, amount } = stakedApplication;

  return (
    <div className="p-10">
      <Helmet>
        <title>Dorse - Staked on {application.jobAd.title}</title>
        <meta
          name="description"
          content={`${application.candidate.jobTitle} applied at ${application.jobAd.title}.
          See the your stake.`}
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
            to={paths.myStakedApplicationCandidate.resolve(application.id)}
            className="btn-transparent font-bold"
          >
            THE CANDIDATE
          </Link>
          <Link
            to={paths.myStakedApplicationJob.resolve(application.id)}
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
        <UnstakeModal application={application} amount={amount}>
          {(open) => (
            <button
              onClick={open}
              className="btn-transparent py-3 px-16 font-bold"
            >
              UNSTAKE
            </button>
          )}
        </UnstakeModal>
      </div>
    </div>
  );
};

export default MyStakedApplicationPage;
