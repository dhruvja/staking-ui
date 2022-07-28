import { Route, Routes } from "react-router-dom";
import { paths } from "src/pagesPaths";
import HomePage from "src/pages/HomePage";
import ApplicationPage from "src/pages/ApplicationPage";
import ApplicationsPage from "src/pages/ApplicationsPage";
import ConnectPage from "src/pages/ConnectPage";
import Web3ConnectedLayout from "./layouts/Web3ConnectedLayout";
import ApplicationsSidebarLayout from "./layouts/ApplicationsSidebarLayout";
import ApplicationJobPage from "./pages/ApplicationJobPage";
import ApplicationCandidatePage from "./pages/ApplicationCandidatePage";
import MyStakedApplicationsSidebarLayout from "./layouts/MyStakedApplicationsSidebarLayout";
import MyStakesPage from "./pages/MyStakesPage";
import MyStakedApplicationPage from "./pages/MyStakedApplicationPage";

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
          </Route>

          <Route element={<MyStakedApplicationsSidebarLayout />}>
            <Route
              path={paths.myStakedApplications.route}
              element={<MyStakesPage />}
            />
            <Route
              path={paths.myStakedApplication.route}
              element={<MyStakedApplicationPage />}
            />

            <Route
              path={paths.myStakedApplicationJob.route}
              element={<ApplicationJobPage />}
            />

            <Route
              path={paths.myStakedApplicationCandidate.route}
              element={<ApplicationCandidatePage />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
