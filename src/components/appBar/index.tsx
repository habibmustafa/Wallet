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
import { useNavigate } from "react-router-dom";
import CustomCalendar, { CustomCalendarProps } from "../customCalendar";

type IAppBar = {
  children?: React.ReactNode;
  backIcon?: "backspace" | "clear" | false;
  title?: string;
  firstButton?: "search" | "add" | "settings" | "clear" | false;
  secondButton?: "search" | "add" | "settings" | "clear" | false;
  firstButtonHandle?: () => void;
  secondButtonHandle?: () => void;
  closeHandle?: () => void;
  datePicker?: boolean;
  datePickerProps?: any;
  calendar?: boolean;
  calendarProps?: CustomCalendarProps;
};

const iconMap: Record<string, React.ReactElement> = {
  search: <Search />,
  add: <Add />,
  settings: <Settings />,
  clear: <Clear />,
  backspace: <Backspace />,
  none: <></>,
};

const CustomAppBar = ({
  children,
  backIcon = "backspace",
  title,
  firstButton = "search",
  secondButton,
  firstButtonHandle,
  secondButtonHandle,
  closeHandle,
  calendar,
  calendarProps,
}: IAppBar) => {
  const navigate = useNavigate();

  const onBackHandle = () => {
    navigate(-1);
  };

  return (
    <Container className={`appbar ${calendarProps?.variant==="year" ? "with-calendar" : ""}`}>
      {!children ? (
        <>
          <div className="appbar-main">
            {backIcon && (
              <IconButton onClick={closeHandle || onBackHandle} style={{ padding: "0 14px 0 0" }}>
                {iconMap[backIcon]}
              </IconButton>
            )}
            <Text className="appbar-text">{title}</Text>
            {(firstButton || secondButton) && (
              <>
                {firstButton && (
                  <IconButton
                    onClick={firstButtonHandle}
                    style={{ padding: 0 }}
                  >
                    {iconMap[firstButton]}
                  </IconButton>
                )}
                {secondButton && (
                  <IconButton
                    onClick={secondButtonHandle}
                    style={{ padding: 0, marginLeft: 14 }}
                  >
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
        <div className="appbar-main">
          {children}
        </div>
      )}
    </Container>
  );
};

export default CustomAppBar;
