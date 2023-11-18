import Container from "../container";
import Icon from "../icon";
import "./style.scss";
import { IInput } from "~/types/componentsType";

const InputInitial = ({
  className = "",
  status = "",
  margin,
  padding,
  width,
  icon,
  iconRight,
  ...props
}: IInput) => {
  return (
    <Container
      className={`inputInitial ${className} ${status} ${
        icon ? "with-icon" : ""
      } ${iconRight ? "icon-right" : "icon-left"}`}
      margin={margin}
      padding={padding}
      style={{ maxWidth: width, width: "100%" }}
    >
      <input {...props} />
      <Icon className={`${["inputInitial"]}-icon`}>{icon}</Icon>
    </Container>
  );
};

export default InputInitial;
