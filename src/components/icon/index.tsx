import { FC } from "react";
//type
import { IIcon } from "~/types/componentsType";

const Icon: FC<IIcon> = ({
  children,
  margin = "",
  padding = "",
  style,
  ...props
}) => {
  return (
    <i {...props} style={{ margin, padding, ...style }}>
      {children}
    </i>
  );
};

export default Icon;
