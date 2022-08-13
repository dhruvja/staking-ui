import { Helmet } from "react-helmet";
import { useSetNavBarTitle } from "src/hooks/navbar";

const MyStakesPage = () => {
  useSetNavBarTitle("My Stakes");
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Dorse - My Stakes</title>
      </Helmet>
      <div className="text-3xl text-center">
        Select an application to view your stake
      </div>
    </div>
  );
};

export default MyStakesPage;
