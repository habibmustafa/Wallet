import { FC } from "react";
import "./style.scss";
import { IMainButton } from "~/types/componentsType";

interface IconButton extends IMainButton {
  color?: string;
  margin?: string;
}

const IconButton: FC<IconButton> = ({
  children,
  size = "medium",
  color = "primary",
  margin = "",
  className,
  ...props
}) => {
  return (
    <button
      className={`iconButton ${className} ${size} ${color}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
