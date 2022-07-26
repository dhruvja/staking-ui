import { Route, Routes } from "react-router-dom";
import { paths } from "src/pagesPaths";
import HomePage from "src/pages/HomePage";
import ApplicationPage from "src/pages/ApplicationPage";
import ApplicationsPage from "src/pages/ApplicationsPage";
import ConnectPage from "src/pages/ConnectPage";
import Web3ConnectedLayout from "./layouts/Web3ConnectedLayout";
import ApplicationsSidebarLayout from "./layouts/ApplicationsSidebarLayout";
import ApplicationStakePage from "./pages/ApplicationStakePage";
import ApplicationJobPage from "./pages/ApplicationJobPage";
import ApplicationCandidatePage from "./pages/ApplicationCandidatePage";

const AppRoutes = () => {
  return (
    <div className="bg-app">
      <Routes>
        <Route path={paths.connect.route} element={<ConnectPage />} />

        <Route element={<Web3ConnectedLayout />}>
          <Route path={paths.home.route} element={<HomePage />} />

          <Route element={<ApplicationsSidebarLayout />}>
            <Route
              path={paths.applications.route}
              element={<ApplicationsPage />}
            />
            <Route
              path={paths.application.route}
              element={<ApplicationPage />}
            />

            <Route
              path={paths.applicationJob.route}
              element={<ApplicationJobPage />}
            />

            <Route
              path={paths.applicationCandidate.route}
              element={<ApplicationCandidatePage />}
            />

            <Route
              path={paths.applicationStake.route}
              element={<ApplicationStakePage />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
