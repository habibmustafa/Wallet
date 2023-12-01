import { Box, Stack } from "@mui/material";
import * as dateFns from "date-fns";
import { useState } from "react";
import "./style.scss"
import {ReactComponent as Left} from "~/assets/icons/left.svg";
import {ReactComponent as Right} from "~/assets/icons/Right.svg";

type CustomCalendarProps = {
  variant?: string;
};

const CustomCalendar = ({ variant = "month" }: CustomCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const startOfWeek = (date: any) => {
    return dateFns.startOfWeek(date, { weekStartsOn: 1 });
  };
  const endOfWeek = (date: any) => {
    return dateFns.endOfWeek(date, { weekStartsOn: 1 });
  };

  const generateCalendar = (variant: string) => {
    if (variant === "week") {
      return dateFns.eachDayOfInterval({
        start: startOfWeek(selectedDate),
        end: endOfWeek(selectedDate),
      });
    } else if (variant === "month") {
      const startOfMonth = dateFns.startOfMonth(selectedDate);
      const endOfMonth = dateFns.endOfMonth(selectedDate);
      const start = startOfWeek(startOfMonth);
      const end = endOfWeek(endOfMonth);
      return dateFns.eachDayOfInterval({
        start,
        end,
      });
    } else if (variant === "year") {
      const startOfYear = dateFns.startOfYear(selectedDate);
      const startOfJanuary = dateFns.endOfMonth(
        dateFns.setMonth(startOfYear, 0)
      );
      const endOfJune = dateFns.endOfMonth(dateFns.setMonth(startOfYear, 5));
      const startOfJuly = dateFns.endOfMonth(dateFns.setMonth(startOfYear, 6));
      return dateFns.eachMonthOfInterval({
        start: selectedDate >= endOfJune ? startOfJuly : startOfJanuary,
        end:
          selectedDate <= endOfJune
            ? endOfJune
            : dateFns.endOfYear(selectedDate),
      });
    } else {
      return [];
    }
  };

  const currentMonth = dateFns.getMonth(selectedDate);
  const currentMonthName = monthNames[currentMonth];

  const handleDateClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
      <Box
        textAlign="center"
        className="custom-calendar"
      >
        {variant === "year" ? (
          <Stack display="grid" gridTemplateColumns={"repeat(6, 1fr)"} gap={"10px"}>
            {generateCalendar(variant).map((month, index) => (
              <div key={index}>
                <span>{dateFns.getYear(month)}</span>
                <button
                  key={index}
                  disabled={dateFns.isSameMonth(month, selectedDate)}
                  onClick={() => handleDateClick(month)}
                >
                  {monthNames[dateFns.getMonth(month)].slice(0, 3)}
                </button>
              </div>
            ))}
          </Stack>
        ) : null}

        {variant === "month" || variant === "week" ? (
          <Stack display="grid" gridTemplateColumns={"repeat(7, auto)"} gap={1.4}>
            {weekNames.map((day, index) => (
              <span className="calendar-title" key={index}>{day}</span>
            ))}

            {generateCalendar(variant).map((day, index) => (
              <button
                className={`calendar-day ${variant} ${dateFns.isSameDay(day, selectedDate) ? "selected" : ""}`}
                key={index}
                onClick={() => handleDateClick(day)}
              >
                {dateFns.getDate(day)}
              </button>
            ))}
          </Stack>
        ) : null}

        {variant === "month" ? (
          <Stack mt={2.5} pt={2.5} px={1.2} flexDirection="row" alignItems={"center"} borderTop={"1px solid #1C202E10"} justifyContent={"space-between"}>
            <Left onClick={() => setSelectedDate(dateFns.subMonths(selectedDate, 1))} />
            <span className="calendar-monthname">{currentMonthName}</span>
            <Right onClick={() => setSelectedDate(dateFns.subMonths(selectedDate, -1))} />
          </Stack>
        ) : null}
      </Box>
  );
};

export default CustomCalendar;
