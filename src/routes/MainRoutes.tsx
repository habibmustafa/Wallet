import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import InnerRoute from "./InnerRoute";
import PublicRoute from "./PublicRoute";
import ProtectRoute from "./ProtectRoute";
import Download from "~/pages/download";

import Stat from "~/pages/stat";
import Daily from "~/pages/daily";
import Budget from "~/pages/budget";
import Profile from "~/pages/profile";

const Login = lazy(() => import("~/pages/auth/login"));
const Register = lazy(() => import("~/pages/auth/register"));
const AddAccount = lazy(() => import("~/pages/addAccount"));
// const Stat = lazy(() => import("~/pages/stat"));
// const Daily = lazy(() => import("~/pages/daily"));
// const Budget = lazy(() => import("~/pages/budget"));
// const Profile = lazy(() => import("~/pages/profile"));

const MainRoutes = () => {
  return (
    <>
      {/* fallback={<Loading opacity="full" open={true} />} */}
      <Suspense>
        <Routes>
          {/* !!!Check Public Route */}
          <Route path="/login" element={<PublicRoute />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route path="/register" element={<PublicRoute />}>
            <Route path="" element={<Register />} />
          </Route>
          <Route path="/" element={<ProtectRoute />}>
            <Route path="/" element={<InnerRoute />}>
              <Route path="" element={<Stat />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
              <Route path="/add-account" element={<AddAccount />} />
          </Route>
          <Route path="/download" element={<Download />} />
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
          {/*<Route path="/*" element={<NotFound/>}/>*/}
        </Routes>
      </Suspense>
    </>
  );
};

export default MainRoutes;
