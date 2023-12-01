import Container from "../container";
import Text from "../text";
import "./style.scss";
import React from "react";
import { ReactComponent as Backspace } from "~/assets/icons/backspace.svg";
import { ReactComponent as Search } from "~/assets/icons/search.svg";
import { ReactComponent as Add } from "~/assets/icons/add.svg";
import { ReactComponent as Settings } from "~/assets/icons/settings.svg";
import { ReactComponent as Clear } from "~/assets/icons/clear.svg";
import { IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import CustomCalendar from "../customCalendar";

type IAppBar = {
  children?: React.ReactNode;
  backIcon?: boolean;
  title?: string;
  firstButton?: "search" | "add" | "settings" | "clear" | "none";
  secondButton?: "search" | "add" | "settings" | "clear" | "none";
  firstButtonHandle?: () => void;
  secondButtonHandle?: () => void;
  datePicker?: boolean;
  datePickerProps?: any;
  calendar?: boolean;
  calendarProps?: {
    variant?: string;
  };
};

const iconMap: Record<string, React.ReactElement> = {
  search: <Search />,
  add: <Add />,
  settings: <Settings />,
  clear: <Clear />,
  none: <></>,
};


const CustomAppBar = ({
  children,
  backIcon = true,
  title,
  firstButton = "search",
  secondButton = "none",
  firstButtonHandle,
  secondButtonHandle,
  calendar,
  calendarProps
}: // datePicker,
// datePickerProps,
IAppBar) => {
  const navigate = useNavigate();

  
  const onBackHandle = () => {
    navigate(-1)
  };

  return (
    <Container className="appbar">
      {!children ? (
        <>
          <div className="appbar-main">
            {backIcon && (
              <IconButton onClick={onBackHandle} style={{ padding: 0 }}>
                {<Backspace />}
              </IconButton>
            )}
            <Text className="appbar-text">{title}</Text>
            {(firstButton || secondButton) && (
            <>
              {firstButton && (
                <IconButton onClick={firstButtonHandle} style={{ padding: 0 }}>
                  {iconMap[firstButton]}
                </IconButton>
              )}
              {secondButton && (
                <IconButton onClick={secondButtonHandle} style={{ padding: 0 }}>
                  {iconMap[secondButton]}
                </IconButton>
              )}
            </>
          )}
          </div>

          {calendar && (
            <div className="appbar-calendar">
              <CustomCalendar {...calendarProps} />
            </div>
          )}
        </>
      ) : (
        children
      )}
    </Container>
  );
};

export default CustomAppBar;
