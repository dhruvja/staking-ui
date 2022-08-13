import { useParams } from "react-router-dom";
import { useApplication, useStakedData } from "src/hooks/applications";
import { Helmet } from "react-helmet";
import ApplicationDetails from "src/components/ApplicationDetails";
import { paths } from "src/pagesPaths";

const ApplicationPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const stakedApplication = useStakedData(applicationId);
  const application = useApplication(applicationId);

  // if (!application) {
  //   throw new Error(`Application ${applicationId} not found`);
  // }

  if (!application) {
    return <div>loading</div>;
  }

  console.log({
    jobId: application.jobAd.id,
    applicationId,
  });

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

      <ApplicationDetails
        application={application}
        stakedData={stakedApplication}
        candidatePageLink={paths.applicationCandidate.resolve(applicationId)}
        jobPageLink={paths.applicationJob.resolve(applicationId)}
      />
    </div>
  );
};

export default ApplicationPage;
