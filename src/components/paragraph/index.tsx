import { FC } from "react";
import "./style.scss";
//type
import { IParagraph } from "~/types/componentsType";

const Paragraph: FC<IParagraph> = ({
  children,
  className = "",
  fontSize,
  color,
  padding,
  margin,
  display,
  style,
  ...props
}) => {
  return (
    <p
      {...props}
      className={`customParagraph ${className}`}
      style={{ fontSize, color, padding, margin, display, ...style }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
