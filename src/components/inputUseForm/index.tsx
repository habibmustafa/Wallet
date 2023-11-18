import { FC } from "react";
import "./style.scss";
import { useFormContext } from "react-hook-form";
//type
import { IInput } from "~/types/componentsType";
import { findInputError, isFormInvalid } from "~/validation/inputsErrorCheck";
import Container from "../container";
import CustomLabel from "../customLabel";
import CustomMessage from "../customMessage";
import InputInitialUseForm from "../inputInitialUseForm";

const InputUseForm: FC<IInput> = ({
  className = "",
  label,
  message,
  margin,
  padding,
  status = "",
  width,
  name,
  ...props
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <Container
      className={`customInput ${className} ${status}`}
      margin={margin}
      padding={padding}
      style={{ maxWidth: width, width: "100%" }}
    >
      {label && <CustomLabel>{label}</CustomLabel>}
      <InputInitialUseForm
        name={name}
        {...props}
        status={isInvalid ? "error" : ""}
      />
      {isInvalid && (
        <CustomMessage text={inputErrors?.error?.message} status="error" />
      )}
    </Container>
  );
};

export default InputUseForm;
