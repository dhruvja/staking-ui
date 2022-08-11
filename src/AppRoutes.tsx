import { Route, Routes } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";

import { paths } from "src/pagesPaths";
import HomePage from "src/pages/HomePage";
import ApplicationPage from "src/pages/ApplicationPage";
import ApplicationsPage from "src/pages/ApplicationsPage";
import ConnectPage from "src/pages/ConnectPage";
import Web3ConnectedLayout from "src/layouts/Web3ConnectedLayout";
import ApplicationsSidebarLayout from "src/layouts/ApplicationsSidebarLayout";
import ApplicationJobPage from "src/pages/ApplicationJobPage";
import ApplicationCandidatePage from "src/pages/ApplicationCandidatePage";
import MyStakedApplicationsSidebarLayout from "src/layouts/MyStakedApplicationsSidebarLayout";
import MyStakesPage from "src/pages/MyStakesPage";
import MyStakedApplicationPage from "src/pages/MyStakedApplicationPage";
import MyStakedApplicationJobPage from "src/pages/MyStakedApplicationJobPage";
import MyStakedApplicationCandidatePage from "src/pages/MyStakedApplicationCandidatePage";

import "react-toastify/dist/ReactToastify.css";
import useGetUserOnStart from "./hooks/useGetUserOnStart";
import ProtectedLayout from "./layouts/ProtectedLayout";
import AppLayout from "./layouts/AppLayout";

const AppRoutes = () => {
  return (
    <div className="bg-app">
      <Routes>
        <Route path={paths.connect.route} element={<ConnectPage />} />

        <Route element={<Web3ConnectedLayout />}>
          {/* <Route element={<ProtectedLayout />}> */}
          <Route element={<AppLayout />}>
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
                element={<MyStakedApplicationJobPage />}
              />

              <Route
                path={paths.myStakedApplicationCandidate.route}
                element={<MyStakedApplicationCandidatePage />}
              />
            </Route>
          </Route>
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
};

function Main() {
  return (
    <>
      <div>
        <AppRoutes />
      </div>

      <ToastContainer
        position="top-center"
        closeOnClick
        newestOnTop
        hideProgressBar
        autoClose={2000}
        transition={Flip}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="dark"
      />
    </>
  );
}

export default Main;
