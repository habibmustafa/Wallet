import { Box, Stack } from "@mui/material";
import * as dateFns from "date-fns";
import { useState } from "react";
import "./style.scss";
import { ReactComponent as Left } from "~/assets/icons/left.svg";
import { ReactComponent as Right } from "~/assets/icons/right.svg";

interface CalendarHeaderProps {
  selectedDate: Date;
  onPrevClick: () => void;
  onNextClick: () => void;
}
interface CalendarMonthProps {
  month: Date;
  selectedDate: Date;
  variant: string;
  onClick: (day: Date) => void;
}
interface CalendarDayProps {
  day: Date;
  selectedDate: Date;
  onClick: (day: Date) => void;
  variant: string;
}
export interface CustomCalendarProps {
  variant?: "month" | "week" | "year" | "half-year";
}

const CustomCalendar = ({ variant = "month" }: CustomCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
    } else if (variant === "half-year") {
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
    } else if (variant === "year") {
      const startOfYear = dateFns.startOfYear(selectedDate);
      const startOfJanuary = dateFns.endOfMonth(
        dateFns.setMonth(startOfYear, 0)
      );
      return dateFns.eachMonthOfInterval({
        start: startOfJanuary,
        end: dateFns.endOfYear(selectedDate),
      });
    } else {
      return [];
    }
  };

  const handleDateClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <Box className="custom-calendar">
      {variant === "half-year" ? (
        <Stack
          display="grid"
          gridTemplateColumns={"repeat(6, auto)"}
          justifyItems={"center"}
          gap={1.4}
        >
          {generateCalendar(variant).map((month, index) => (
            <Box key={index}>
              <p className="calendar-title">{dateFns.getYear(month)}</p>
              <CalendarMonth
                key={index}
                month={month}
                variant={variant}
                selectedDate={selectedDate}
                onClick={handleDateClick}
              />
            </Box>
          ))}
        </Stack>
      ) : null}

      {variant === "year" ? (
        <>
          <Stack
            display="grid"
            gridTemplateColumns={"repeat(3, auto)"}
            gap={1.4}
          >
            {generateCalendar(variant).map((month, index) => (
              <CalendarMonth
                key={index}
                month={month}
                variant={variant}
                selectedDate={selectedDate}
                onClick={handleDateClick}
              />
            ))}
          </Stack>
          <CalendarHeader
            selectedDate={selectedDate}
            onPrevClick={() =>
              setSelectedDate(dateFns.subYears(selectedDate, 1))
            }
            onNextClick={() =>
              setSelectedDate(dateFns.subYears(selectedDate, -1))
            }
          />
        </>
      ) : null}

      {variant === "month" || variant === "week" ? (
        <>
          <Stack
            display="grid"
            gridTemplateColumns={"repeat(7, auto)"}
            gap={1.4}
          >
            {weekNames.map((day, index) => (
              <span className="calendar-title" key={index}>
                {day}
              </span>
            ))}

            {generateCalendar(variant).map((day, index) => (
              <CalendarDay
                key={index}
                day={day}
                selectedDate={selectedDate}
                onClick={handleDateClick}
                variant={variant}
              />
            ))}
          </Stack>
          {variant === "month" ? (
            <CalendarHeader
              selectedDate={selectedDate}
              onPrevClick={() =>
                setSelectedDate(dateFns.subMonths(selectedDate, 1))
              }
              onNextClick={() =>
                setSelectedDate(dateFns.subMonths(selectedDate, -1))
              }
            />
          ) : null}
        </>
      ) : null}
    </Box>
  );
};

export default CustomCalendar;

const CalendarHeader = ({
  selectedDate,
  onPrevClick,
  onNextClick,
}: CalendarHeaderProps) => {
  const currentMonthName = dateFns.format(selectedDate, "MMMM");

  return (
    <Stack
      mt={2.5}
      pt={2.5}
      px={1.2}
      flexDirection="row"
      alignItems="center"
      borderTop="1px solid #1C202E10"
      justifyContent="space-between"
    >
      <Left onClick={onPrevClick} />
      <span className="calendar-header">
        {currentMonthName} {dateFns.getYear(selectedDate)}
      </span>
      <Right onClick={onNextClick} />
    </Stack>
  );
};

const CalendarMonth = ({
  month,
  selectedDate,
  variant,
  onClick,
}: CalendarMonthProps) => {
  return (
    <button
      onClick={() => onClick(month)}
      className={`calendar-month ${
        dateFns.isSameMonth(month, selectedDate) ? "selected" : ""
      } ${variant}`}
    >
      {variant === "year"
        ? dateFns.format(month, "MMMM")
        : dateFns.format(month, "MMM")}
    </button>
  );
};

const CalendarDay = ({
  day,
  selectedDate,
  onClick,
  variant,
}: CalendarDayProps) => {
  return (
    <button
      className={`calendar-day ${variant} ${
        dateFns.isSameDay(day, selectedDate) ? "selected" : ""
      }`}
      onClick={() => onClick(day)}
    >
      {dateFns.getDate(day)}
    </button>
  );
};
