import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useApplication, useStakedData } from "src/hooks/applications";
import ApplicationDetails from "src/components/ApplicationDetails";
import { paths } from "src/pagesPaths";
import { useSetNavBarTitle } from "src/hooks/navbar";

const MyStakedApplicationPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const stakedApplication = useStakedData(applicationId);
  const application = useApplication(applicationId);
  useSetNavBarTitle("My Stakes");

  // if (!application) {
  //   throw new Error(`Application ${applicationId} not found`);
  // }

  if (!application) {
    return <div>loading</div>;
  }

  if (!stakedApplication) {
    return <div>loading</div>;
  }

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

      <ApplicationDetails
        application={application}
        stakedData={stakedApplication}
        candidatePageLink={paths.myStakedApplicationCandidate.resolve(
          applicationId
        )}
        jobPageLink={paths.myStakedApplicationJob.resolve(applicationId)}
      />
    </div>
  );
};

export default MyStakedApplicationPage;
