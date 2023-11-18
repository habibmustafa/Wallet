import React from "react";
import "./style.scss";

type IContainer = {
  children: React.ReactNode;
  type?: "main" | "container";
  padding?: string;
  margin?: string;
  maxWidth?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Container = ({
  children,
  type = "container",
  padding,
  margin,
  maxWidth,
  backgroundColor,
  className,
  style,
}: IContainer) => {
  return (
    <div
      className={`${type} ${className}`}
      style={{
        padding,
        margin,
        maxWidth,
        backgroundColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
