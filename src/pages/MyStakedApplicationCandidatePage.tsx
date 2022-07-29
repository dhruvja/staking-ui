import { useParams } from "react-router-dom";
import { useApplication } from "src/hooks/applications";
import { paths } from "src/pagesPaths";
import { Helmet } from "react-helmet";
import { useStakedApplication } from "src/hooks/stake";
import CandidateDetails from "src/components/CandidateDetails";

const MyStakedApplicationCandidatePage = () => {
  const applicationId = useParams().applicationId ?? "";
  const stakedApplication = useStakedApplication(applicationId);
  const application = useApplication(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }

  if (!stakedApplication) {
    throw new Error(`Application ${applicationId} not staked`);
  }

  return (
    <div className="p-10 overflow-y-scroll">
      <Helmet>
        <title>Dorse - {application.candidate.jobTitle}</title>
        <meta name="description" content={application.candidate.about ?? ""} />
      </Helmet>

      <CandidateDetails
        application={application}
        stakedData={stakedApplication}
        goBackLink={paths.myStakedApplication.resolve(applicationId)}
      />
    </div>
  );
};

export default MyStakedApplicationCandidatePage;
