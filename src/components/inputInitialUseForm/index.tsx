import { useFormContext } from "react-hook-form";
import Container from "../container";
import Icon from "../icon";
import "../inputInitial/style.scss";
import { IInput } from "~/types/componentsType";

const InputInitialUseForm = ({
  className = "",
  status = "",
  margin,
  padding,
  width,
  icon,
  iconRight,
  name = "",
  validation,
  ...props
}: IInput) => {
  const { register } = useFormContext();

  return (
    <Container
      className={`inputInitial ${className} ${status} ${
        icon ? "with-icon" : ""
      } ${iconRight ? "icon-right" : "icon-left"}`}
      margin={margin}
      padding={padding}
      style={{ maxWidth: width, width: "100%" }}
    >
      <input {...props} {...register(name, validation)} />
      <Icon className={`${["inputInitial"]}-icon`}>{icon}</Icon>
    </Container>
  );
};

export default InputInitialUseForm;
