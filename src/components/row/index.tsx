import React from "react";
import "./style.scss";

type IRow = {
  children: React.ReactNode | string | number;
  className?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "column";
  gap?: string;
  width?: string;
  maxWidth?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  backgroundColor?: string;
  flex?: boolean;
  style?: React.CSSProperties;
};
const Row = ({
  children,
  className,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  width,
  maxWidth,
  padding,
  margin,
  borderRadius,
  backgroundColor,
  flex,
  style,
}: IRow) => {
  return (
    <div
      className={`row ${className}`}
      style={{
        justifyContent,
        alignItems,
        flexDirection,
        gap,
        width,
        maxWidth,
        padding,
        margin,
        borderRadius,
        backgroundColor,
        display: flex ? "flex" : "",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
