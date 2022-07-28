import { NavLink } from "react-router-dom";
import { ReactComponent as DorseLogo } from "src/images/dorseLogo.svg";
import { paths } from "src/pagesPaths";

const Tabbar = () => {
  return (
    <div className="bg-tabbar py-16 px-12">
      <div>
        <DorseLogo />
      </div>

      <div className="mt-20 flex flex-col gap-8">
        <NavLink
          to={paths.home.route}
          className={({ isActive }) =>
            `${
              isActive ? "text-[#9C81EA]" : "text-white"
            } font-sora text-sm font-bold hover:text-[#9C81EA]`
          }
        >
          Home
        </NavLink>

        <NavLink
          to={paths.applications.route}
          className={({ isActive }) =>
            `${
              isActive ? "text-[#9C81EA]" : "text-white"
            } font-sora text-sm font-bold hover:text-[#9C81EA]`
          }
        >
          Applications
        </NavLink>

        <NavLink
          to={paths.myStakedApplications.route}
          className={({ isActive }) =>
            `${
              isActive ? "text-[#9C81EA]" : "text-white"
            } font-sora text-sm font-bold hover:text-[#9C81EA]`
          }
        >
          My Stakes
        </NavLink>
      </div>
    </div>
  );
};

export default Tabbar;
