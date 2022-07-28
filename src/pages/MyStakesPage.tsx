import { Helmet } from "react-helmet";

const MyStakesPage = () => {
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Dorse - My Stakes</title>
      </Helmet>
      <div className="text-3xl">Select an application to view your stake</div>
    </div>
  );
};

export default MyStakesPage;
