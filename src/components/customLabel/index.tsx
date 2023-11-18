import { FC } from "react";
import "./style.scss";
import Paragraph from "../paragraph";
import { IParagraph } from "~/types/componentsType";
interface ICustomLabel extends IParagraph {
  children: any;
  margin?: string;
}
const CustomLabel: FC<ICustomLabel> = ({
  children,
  margin,
  ...props
}) => {
  return (
    <Paragraph {...props} margin={margin} className="customLabel">
      {children}
    </Paragraph>
  );
};

export default CustomLabel;
