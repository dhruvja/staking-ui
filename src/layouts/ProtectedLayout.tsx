import { Outlet } from "react-router-dom";
import RequireAuth from "src/components/Auth/RequireAuth";

const ProtectedLayout = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
};

export default ProtectedLayout;
