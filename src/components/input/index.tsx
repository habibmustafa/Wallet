import Container from "../container";
import CustomLabel from "../customLabel";
import CustomMessage from "../customMessage";
import InputInitial from "../inputInitial";
import "./style.scss";
import { IInput } from "~/types/componentsType";

const Input = ({
  className = "",
  status = "",
  label,
  message,
  margin,
  padding,
  width,
  ...props
}: IInput) => {
  return (
    <Container
      className={`customInput ${className} ${status}`}
      margin={margin}
      padding={padding}
      style={{ maxWidth: width, width: "100%" }}
    >
      {label && <CustomLabel>{label}</CustomLabel>}
      <InputInitial {...props} status={status} />
      {message && <CustomMessage text={message} status={status} />}
    </Container>
  );
};

export default Input;
