import { Helmet } from "react-helmet";
import { useSetNavBarTitle } from "src/hooks/navbar";

const ApplicationsPage = () => {
  useSetNavBarTitle("Staking");
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Dorse - Applications</title>
      </Helmet>
      <div className="text-3xl">Select an application to start staking</div>
    </div>
  );
};

export default ApplicationsPage;
