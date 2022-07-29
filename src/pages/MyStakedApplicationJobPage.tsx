import { useParams } from "react-router-dom";
import { paths } from "src/pagesPaths";
import { Helmet } from "react-helmet";
import { useStakedApplication } from "src/hooks/stake";
import { useApplication } from "src/hooks/applications";
import JobDetails from "src/components/JobDetails";

const MyStakedApplicationJobPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const stakedApplication = useStakedApplication(applicationId);
  const application = useApplication(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }

  if (!stakedApplication) {
    throw new Error(`Application ${applicationId} not found`);
  }

  return (
    <div className="p-10 overflow-y-scroll">
      <Helmet>
        <title>Dorse - {application.jobAd.title}</title>
      </Helmet>

      <JobDetails
        application={application}
        stakedData={stakedApplication}
        goBackLink={paths.myStakedApplication.resolve(applicationId)}
      />
    </div>
  );
};

export default MyStakedApplicationJobPage;
