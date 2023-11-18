import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const PublicRoute = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      if (location.state) {
        navigate(location.state);
        return;
      }
      navigate("/", { state: location.pathname });
    }
  }, [isAuth]);

  return !!isAuth === false ? <Outlet /> : null;
};

export default PublicRoute;
