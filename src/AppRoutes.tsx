import { Route, Routes } from "react-router-dom";
import { paths } from "src/pagesPaths";
import HomePage from "src/pages/HomePage";
import ApplicationPage from "src/pages/ApplicationPage";
import ApplicationsPage from "src/pages/ApplicationsPage";
import ConnectPage from "src/pages/ConnectPage";
import Web3ConnectedLayout from "./layouts/Web3ConnectedLayout";
import ApplicationsSidebarLayout from "./layouts/ApplicationsSidebarLayout";

const AppRoutes = () => {
  return (
    <div className="bg-app">
      <Routes>
        <Route path={paths.connect} element={<ConnectPage />} />

        <Route element={<Web3ConnectedLayout />}>
          <Route path={paths.home} element={<HomePage />} />

          <Route element={<ApplicationsSidebarLayout />}>
            <Route path={paths.applications} element={<ApplicationsPage />} />
            <Route
              path={paths.application.route}
              element={<ApplicationPage />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
