import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const ProtectRoute = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth === false) {
      navigate("/login", { state: location.pathname });
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : null;
};

export default ProtectRoute;
