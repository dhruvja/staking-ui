import { Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar";
import Tabbar from "src/components/Tabbar";

const AppLayout = () => {
  return (
    <div className="bg-app text-white h-screen w-screen grid grid-cols-[auto,1fr] overflow-hidden">
      <Tabbar />
      <div className="grid grid-rows-[auto,1fr] overflow-hidden">
        <Navbar />
        <div className="overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
