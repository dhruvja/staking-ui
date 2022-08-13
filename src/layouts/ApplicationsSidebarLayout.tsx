import { useRef, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import ApplicationStakeCard from "src/components/ApplicationStakeCard";
import { useApplications } from "src/hooks/applications";
import { paths } from "src/pagesPaths";

const ApplicationsSidebarLayout = () => {
  const applicationId = useParams().applicationId;
  const applications = useApplications();

  const selectedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    selectedRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [selectedRef]);

  return (
    <div className="grid grid-cols-[minmax(449px,30%),1fr] grid-rows-1 h-full">
      <div className="border-r border-app-border h-full">
        <div className="p-5 flex flex-col gap-3 h-full overflow-y-scroll">
          {applications.map((application) => (
            <div
              key={application.id}
              className="relative"
              ref={application.id === applicationId ? selectedRef : undefined}
            >
              <input
                type="checkbox"
                readOnly
                checked={application.id === applicationId}
                className="w-2 h-2 appearance-none bg-violet-600 rounded-full absolute -left-3 top-1/2 -translate-y-1/2 hidden checked:block"
              />
              <ApplicationStakeCard
                application={application}
                goToLink={paths.application.resolve(application.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ApplicationsSidebarLayout;
