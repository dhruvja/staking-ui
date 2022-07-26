import React from "react";
import { useParams } from "react-router-dom";
import useApplication from "src/hooks/useApplication";

const ApplicationJobPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const application = useApplication(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }
  return (
    <div className="bg-card p-4 rounded-md flex flex-col gap-3">
      <h5 className="text-[#ADA7C1] text-xl">Description</h5>
      <p>{application.jobAd.description}</p>
    </div>
  );
};

export default ApplicationJobPage;
