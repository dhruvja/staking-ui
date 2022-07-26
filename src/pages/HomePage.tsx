import ApplicationStakeCard from "src/components/ApplicationStakeCard";
import useApplications from "src/hooks/useApplications";

const HomePage = () => {
  const applications = useApplications();

  return (
    <div className="p-10 flex flex-col gap-6">
      <h1 className="text-3xl">Applications</h1>
      <div className="grid grid-cols-2 gap-3">
        {applications.map((application) => (
          <ApplicationStakeCard
            key={application.id}
            application={application}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
