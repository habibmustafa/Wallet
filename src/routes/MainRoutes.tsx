// import {Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import InnerRoute from "./InnerRoute";
import Login from "~/pages/auth/login";
import PublicRoute from "./PublicRoute";
import ProtectRoute from "./ProtectRoute";

const MainRoutes = () => {
  return (
    <>
      {/*<Suspense fallback={<Loading opacity="full" open={true} />}>*/}
      <Routes>
          <Route path="/login" element={<PublicRoute />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route path="/" element={<ProtectRoute />}>
            <Route path="/" element={<InnerRoute />}>
              {/* <Route path="" element={<Login />} /> */}
            </Route>
          </Route>
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        {/*<Route path="/*" element={<NotFound/>}/>*/}
      </Routes>
      {/*</Suspense>*/}
    </>
  );
};

export default MainRoutes;
