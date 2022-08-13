import { useParams } from "react-router-dom";
import { useApplication, useStakedData } from "src/hooks/applications";
import { paths } from "src/pagesPaths";
import { Helmet } from "react-helmet";
import JobDetails from "src/components/JobDetails";

const ApplicationJobPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const application = useApplication(applicationId);
  const stakedApplication = useStakedData(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }

  return (
    <div className="p-10 overflow-y-scroll">
      <Helmet>
        <title>Dorse - {application.jobAd.title}</title>
        <meta name="description" content={application.jobAd.description} />
      </Helmet>

      <JobDetails
        application={application}
        stakedData={stakedApplication}
        goBackLink={paths.application.resolve(applicationId)}
      />
    </div>
  );
};

export default ApplicationJobPage;
