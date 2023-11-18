import { Outlet } from "react-router-dom";
import MainContent from "~/layouts/MainContent";

const InnerRoute = () => {
  return (
    <MainContent>
      <Outlet />
    </MainContent>
  );
};

export default InnerRoute;
