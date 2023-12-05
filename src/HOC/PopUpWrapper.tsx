import { ComponentType, FC } from "react";

interface WrapperProps {
  open?: boolean; // Define the 'open' prop with the correct type
}
const PopUpWrapper = <T extends {}>(WrappedComponent: ComponentType<T>) => {
  const Wrapper: FC<WrapperProps & T> = (props) => {
    const { open } = props;
    // Render WrappedComponent only if 'open' is truthy
    return open ? <WrappedComponent {...props} /> : null;
  };
  return Wrapper;
};

export default PopUpWrapper;
