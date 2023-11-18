import React from "react";
import { IHeading } from "~/types/componentsType";
import "./style.scss";

const Heading: React.FC<IHeading> = ({
  type: Tag = "h1",
  children,
  className = "",
  ...props
}) => {
  return (
    //@ts-ignore
    <Tag {...props} className={`heading ${className} `}>
      {children}
    </Tag>
  );
};

export default Heading;
