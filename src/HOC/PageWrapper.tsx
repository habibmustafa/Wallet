import { ComponentType, FC, ReactNode } from "react";
// import { FeedbackPopup } from "src/components";
import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";

interface WrapperProps {
  permission?: boolean | null | undefined; // Define the 'open' prop with the correct type
}

const PageWrapper = <T extends {}>(WrappedComponent: ComponentType<T>) => {
  const Wrapper: FC<WrapperProps & T> = (props) => {
    let navigate = useNavigate();
    const { permission } = props;
    // Render WrappedComponent only if 'permission' is truthy
    if (permission === null) {
      return null;
    }
    const redirectHandle = () => {
      navigate("/");
    };
    return permission ? (
      <WrappedComponent {...props} />
    ) : (
      null
      // <FeedbackPopup
      //   open={true}
      //   message="Bu səhifəyə icazəniz yoxdur!"
      //   status={2}
      //   mainButtonText="Ana səhifəyə kecid"
      //   handleClose={redirectHandle}
      // />
    );
  };
  return Wrapper;
};

export default PageWrapper;
