import { Link, NavLink } from "react-router-dom";
import { ReactComponent as DorseLogo } from "src/images/dorseLogo.svg";
import { paths } from "src/pagesPaths";
import useAuth from "./Auth/useAuth";

const Tabbar = () => {
  const { logout } = useAuth();
  return (
    <div className="bg-tabbar py-16 px-12 grid grid-rows-[auto,1fr,auto]">
      <Link to={paths.home.resolve()}>
        <DorseLogo />
      </Link>

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

      <div className="mt-auto">
        <button
          onClick={logout}
          className={
            "text-white font-sora text-sm font-bold hover:text-[#9C81EA]"
          }
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Tabbar;
