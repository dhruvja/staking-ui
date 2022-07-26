import Img from "react-cool-img";
import { useParams } from "react-router-dom";
import useApplication from "src/hooks/useApplication";
import jobPlaceholderImage from "src/images/jobPlaceholder.jpeg";

const ApplicationPage = () => {
  const applicationId = useParams().applicationId ?? "";
  const application = useApplication(applicationId);

  if (!application) {
    throw new Error(`Application ${applicationId} not found`);
  }

  return (
    <div className="p-10">
      <div className="flex gap-5">
        <div className="relative h-[70px] w-[70px]">
          <Img
            // src={application.candidate.photoUrl}
            alt={"candidate photo"}
            placeholder={jobPlaceholderImage}
            error={jobPlaceholderImage}
            className="rounded-full object-cover w-[45px] h-[45px] absolute top-0 left-0"
          />
          <Img
            src={application.jobAd.company.photoUrl}
            alt={application.jobAd.company.name}
            placeholder={jobPlaceholderImage}
            error={jobPlaceholderImage}
            className="rounded-full object-cover w-[45px] h-[45px] absolute bottom-0 right-0"
          />
        </div>
        <h1 className="text-3xl font-sora font-bold font">
          {application.candidate.jobTitle}
        </h1>
      </div>
    </div>
  );
};

export default ApplicationPage;
