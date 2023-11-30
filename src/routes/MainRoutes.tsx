// import {Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import InnerRoute from "./InnerRoute";
import PublicRoute from "./PublicRoute";
import ProtectRoute from "./ProtectRoute";
import Download from "~/pages/download";
import { Suspense, lazy } from "react";
const Login = lazy(() => import("~/pages/auth/login"));
const Register = lazy(() => import("~/pages/auth/register"));
// const Stat = lazy(() => import("~/pages/stat"));
const AddAccount = lazy(() => import("~/pages/addAccount"));

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
              <Route path="/" element={<AddAccount />} />
              {/* <Route path="/" element={<Stat />} /> */}
            </Route>
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
