import { useRef, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import ApplicationStakeCard from "src/components/ApplicationStakeCard";
import { ApplicationStatusEnum } from "src/generated/graphql";
import { useStakedApplicationsWithApplications } from "src/hooks/stake";
import { paths } from "src/pagesPaths";
import { StakedApplicationWithApplication } from "src/types/models";

const MyStakedApplicationsSidebarLayout = () => {
  const selectedApplicationId = useParams().applicationId;
  const stakedApplications = useStakedApplicationsWithApplications();
  const selectedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    selectedRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [selectedRef]);

  const pendingApplications = stakedApplications.filter(
    (stakedApplication) =>
      stakedApplication.application.status !== ApplicationStatusEnum.Hired &&
      stakedApplication.application.status !== ApplicationStatusEnum.Rejected
  );

  const hiredApplications = stakedApplications.filter(
    (stakedApplication) =>
      stakedApplication.application.status === ApplicationStatusEnum.Hired
  );

  const rejectedApplications = stakedApplications.filter(
    (stakedApplication) =>
      stakedApplication.application.status === ApplicationStatusEnum.Rejected
  );

  return (
    <div className="grid grid-cols-[minmax(449px,30%),1fr] grid-rows-1 h-full">
      <div className="border-r border-app-border h-full">
        <div className="p-5 flex flex-col gap-8 h-full overflow-y-scroll">
          <div className="flex flex-col gap-3">
            <span className="font-medium">Pending</span>
            <ApplicationList
              applications={pendingApplications}
              selectedRef={selectedRef}
              applicationId={selectedApplicationId}
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-medium">Hired</span>
            <ApplicationList
              applications={hiredApplications}
              selectedRef={selectedRef}
              applicationId={selectedApplicationId}
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-medium">Rejected</span>
            <ApplicationList
              applications={rejectedApplications}
              selectedRef={selectedRef}
              applicationId={selectedApplicationId}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MyStakedApplicationsSidebarLayout;

const ApplicationList = (props: {
  applications: StakedApplicationWithApplication[];
  selectedRef: React.MutableRefObject<HTMLDivElement | null>;
  applicationId: string | undefined;
}) => {
  if (props.applications.length === 0) {
    return (
      <div>
        <span className="text-gray-500">No applications</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {props.applications.map((stakedApplication) => (
        <div
          key={stakedApplication.application.id}
          className="relative"
          ref={
            stakedApplication.application.id === props.applicationId
              ? props.selectedRef
              : undefined
          }
        >
          <input
            type="checkbox"
            readOnly
            checked={stakedApplication.application.id === props.applicationId}
            className="w-2 h-2 appearance-none bg-violet-600 rounded-full absolute -left-3 top-1/2 -translate-y-1/2 hidden checked:block"
          />
          <ApplicationStakeCard
            application={stakedApplication.application}
            goToLink={paths.myStakedApplication.resolve(
              stakedApplication.applicationId
            )}
          />
        </div>
      ))}
    </div>
  );
};
