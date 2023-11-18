import { FC } from "react";
import "./style.scss";
//type
import { IMainButton } from "~/types/componentsType";
//enums
import Button from "../button";

interface IconButton extends IMainButton {
  color?: "blue" | "green" | "red";
  margin?: string;
}

const IconButton: FC<IconButton> = ({
  children,
  size = "medium",
  color = "blue",
  margin = "",
  className,
  ...props
}) => {
  return (
    <Button
      className={`iconButton ${className} ${size} ${color}`}
      margin={margin}
      {...props}
    >
      {children}
    </Button>
  );
};

export default IconButton;
