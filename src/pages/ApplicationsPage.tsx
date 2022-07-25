import { Link } from "react-router-dom";
import useApplications from "src/hooks/useApplications";
import { paths } from "src/pagesPaths";

const ApplicationsPage = () => {
  const applications = useApplications();

  return (
    <div className="p-10 flex flex-col gap-6">
      <h1 className="text-3xl">Applications</h1>
      <div className="grid grid-cols-2 gap-3">
        {applications.map((application) => (
          <Link
            to={paths.application.resolve(application.id)}
            key={application.id}
            className="card p-4"
          >
            {application.candidate.name} applied to {application.jobAd.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
