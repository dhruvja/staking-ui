import { useParams } from "react-router-dom";
import { useApplication, useStakedData } from "src/hooks/applications";
import { paths } from "src/pagesPaths";
import { Helmet } from "react-helmet";
import CandidateDetails from "src/components/CandidateDetails";

const ApplicationCandidatePage = () => {
  const applicationId = useParams().applicationId ?? "";
  const stakedApplication = useStakedData(applicationId);
  const application = useApplication(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
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
        goBackLink={paths.application.resolve(applicationId)}
      />
    </div>
  );
};

export default ApplicationCandidatePage;
