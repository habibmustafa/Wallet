import { FC } from "react";
import "./style.scss";
import Paragraph from "../paragraph";
interface ICustomMessage {
  text: string;
  status?: "error" | "warning" | "success" | "";
}
const CustomMessage: FC<ICustomMessage> = ({ text, status }) => {
  return <Paragraph className={`customMessage ${status}`}>{text}</Paragraph>;
};

export default CustomMessage;
