import Container from "../container";
import CustomLabel from "../customLabel";
import { Controller, useFormContext } from "react-hook-form";
import ColorPicker from "../colorPicker";

type colorPickerProps = {
  name: string;
  className?: string;
  label?: string;
  margin?: string;
  padding?: string;
  width?: string;
  colors?: any[];
  value?: number;
  onChangeColor?: any;
};

const ColorPickerUseForm = ({
  name = "",
  className,
  label,
  margin,
  padding,
  width,
  colors,
}: colorPickerProps) => {
  const { control } = useFormContext();

  return (
    <Container
      className={`${className}`}
      margin={margin}
      padding={padding}
      style={{ maxWidth: width, width: "100%" }}
    >
      {label && <CustomLabel margin="0 0 3px 0">{label}</CustomLabel>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ColorPicker
            colors={colors}
            value={field.value}
            onChangeColor={(id: number) => {
              field.onChange(id);
            }}
          />
        )}
      />

      {/* {isInvalid && (
        <CustomMessage text={inputErrors?.error?.message} status="error" />
      )} */}
    </Container>
  );
};

export default ColorPickerUseForm;
