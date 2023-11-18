import { ReactNode } from "react";
import "./style.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | number | ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "red" | "blue" | "green";
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  className?: string;
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled = false,
  startIcon,
  endIcon,
  loading = false, // TODO: add loading state
  className = "",
  height = "48px",
  width,
  padding,
  margin,
  type,
  ...props
}: IProps) {
  return (
    <button
      className={`button ${color} ${variant} ${size} ${className}`}
      disabled={disabled}
      type={type}
      style={{
        height,
        width,
        padding,
      }}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
