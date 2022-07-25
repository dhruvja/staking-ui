import { Navigate } from "react-router-dom";
import { paths } from "src/pagesPaths";

const HomePage = () => {
  return <Navigate to={paths.applications} />;
  // return (
  //   <div className="">
  //     <Link to="/applications">Applications</Link>
  //   </div>
  // );
};

export default HomePage;
