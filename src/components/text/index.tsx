import { FC } from "react";
import "./style.scss";
import { IText } from "~/types/componentsType";

const Text: FC<IText> = ({
  children,
  className = "",
  fontSize = "",
  color,
  padding,
  margin,
  display,
  style,
  lineHeight = "",
  fontWeight,
  ...props
}) => {
  return (
    <span
      {...props}
      className={`${className}`}
      style={{
        fontSize,
        color,
        padding,
        margin,
        display,
        lineHeight,
        fontWeight,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Text;
