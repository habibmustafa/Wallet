import { FC } from "react";
import "./style.scss";
import Heading from "../heading";
//type
import { IHeading } from "~/types/componentsType";

interface IPageTitle extends IHeading {
  margin?: string;
  padding?: string;
  justifyContent?: string;
}

const PageTitle: FC<IPageTitle> = ({
  children,
  margin,
  padding,
  style,
  justifyContent = "4",
  type = "h3",
  ...props
}) => {
  return (
    <Heading
      {...props}
      className="page-title"
      type={type}
      style={{ margin, justifyContent, padding, ...style }}
    >
      {children}
    </Heading>
  );
};

export default PageTitle;
