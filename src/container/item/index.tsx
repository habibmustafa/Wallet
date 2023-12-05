import { Stack } from "@mui/material";
import React from "react";
import Heading from "~/components/heading";
import "./style.scss";

type ItemProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  gap?: string | number;
  maxWidth?: string | number;
  iconBackColor?: string;
  onClick?: () => void;
};

const Item = ({
  icon,
  title,
  gap = 7,
  maxWidth,
  iconBackColor = "#D4D7D9",
  onClick,
}: ItemProps) => {
  return (
    <Stack
      padding={3}
      bgcolor={"#fff"}
      borderRadius={2}
      width="100%"
      maxWidth={maxWidth}
      gap={gap}
      boxShadow={"0px 18px 36px rgba(0, 0, 0, 0.03)"}
      className="item"
      justifyContent="space-between"
      alignItems={"flex-start"}
      onClick={onClick}
    >
      {/* icon */}
      <div className="item-icon" style={{ backgroundColor: iconBackColor }}>
        {icon}
      </div>

      {/* title */}
      <Heading type="h4" style={{ fontSize: "21px" }}>
        {title}
      </Heading>
    </Stack>
  );
};

export default Item;
