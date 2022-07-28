import { useRef, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import ApplicationStakeCard from "src/components/ApplicationStakeCard";
import { useStakedApplications } from "src/hooks/stake";

const MyStakedApplicationsSidebarLayout = () => {
  const applicationId = useParams().applicationId;
  const stakedApplications = useStakedApplications();

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
          {stakedApplications.map((stakedApplication) => (
            <div
              key={stakedApplication.application.id}
              className="relative"
              ref={
                stakedApplication.application.id === applicationId
                  ? selectedRef
                  : undefined
              }
            >
              <input
                type="checkbox"
                readOnly
                checked={stakedApplication.application.id === applicationId}
                className="w-2 h-2 appearance-none bg-violet-600 rounded-full absolute -left-3 top-1/2 -translate-y-1/2 hidden checked:block"
              />
              <ApplicationStakeCard
                application={stakedApplication.application}
                isStaked={true}
              />
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MyStakedApplicationsSidebarLayout;
