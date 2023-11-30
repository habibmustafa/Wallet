import Container from "../container";
import "./style.scss"

type colorPickerProps = {
  className?: string;
  margin?: string;
  padding?: string;
  width?: string;
  colors?: any[];
  value?: number;
  onChangeColor?: any;
};

const ColorPicker = ({
  className,
  margin,
  padding,
  width,
  colors,
  value,
  onChangeColor
}: colorPickerProps) => {

  return (
    <Container
      className={`customColorPicker ${className}`}
      margin={margin}
      padding={padding}
      style={{ maxWidth: width, width: "100%" }}
    >
      {colors?.map((item, index) => (
        <div
          key={index}
          className={`color ${item.id === value ? "selected" : ""}`}
          style={{ background: item.color }}
          onClick={() => onChangeColor(item.id)}
        ></div>
      ))}

    </Container>
  );
};

export default ColorPicker;
