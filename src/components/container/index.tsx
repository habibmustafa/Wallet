import React from "react";
import "./style.scss";
import { motion as framermotion } from "framer-motion";

type IContainer = {
  children: React.ReactNode;
  type?: "main" | "container";
  padding?: string;
  margin?: string;
  maxWidth?: string;
  backgroundColor?: string;
  className?: string;
  height?: string;
  style?: React.CSSProperties;
  motion?: boolean;
};

const Container = ({
  children,
  type = "container",
  padding,
  margin,
  maxWidth,
  backgroundColor,
  className,
  height,
  style,
  motion = false,
}: IContainer) => {
  return motion ? (
    <framermotion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${type} ${className ? className : ""}`}
      style={{
        padding,
        margin,
        maxWidth,
        backgroundColor,
        height,
        ...style,
      }}
    >
      {children}
    </framermotion.div>
  ) : (
    <div
      className={`${type} ${className ? className : ""}`}
      style={{
        padding,
        margin,
        maxWidth,
        backgroundColor,
        height,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
