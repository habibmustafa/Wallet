import { Box, Stack } from "@mui/material";
import * as dateFns from "date-fns";
import { useState } from "react";
import "./style.scss";
import { ReactComponent as Left } from "~/assets/icons/left.svg";
import { ReactComponent as Right } from "~/assets/icons/right.svg";
import { motion } from "framer-motion";

interface CalendarHeaderProps extends CustomCalendarProps {
  selectedDate: Date;
  onPrevClick: () => void;
  onNextClick: () => void;
}
interface CalendarMonthProps extends CustomCalendarProps {
  month: Date;
  selectedDate: Date;
  onClick: (day: Date) => void;
}
interface CalendarDayProps extends CustomCalendarProps {
  day: Date;
  selectedDate: Date;
  onClick: (day: Date) => void;
}
export interface CustomCalendarProps {
  variant?: "day" | "month" | any;
  isHalf?: boolean;
}

const CustomCalendar = ({
  variant = "month",
  isHalf = false,
}: CustomCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const startOfWeek = (date: any) => {
    return dateFns.startOfWeek(date, { weekStartsOn: 1 });
  };
  const endOfWeek = (date: any) => {
    return dateFns.endOfWeek(date, { weekStartsOn: 1 });
  };

  const generateCalendar = (variant: string) => {
    const startOfYear = dateFns.startOfYear(selectedDate);
    const startOfMonth = dateFns.startOfMonth(selectedDate);
    const endOfMonth = dateFns.endOfMonth(selectedDate);
    const startOfWeekOfMonth = startOfWeek(startOfMonth);
    const endOfWeekOfMonth = endOfWeek(endOfMonth);
    const startOfJanuary = dateFns.endOfMonth(dateFns.setMonth(startOfYear, 0));
    const endOfJune = dateFns.endOfMonth(dateFns.setMonth(startOfYear, 5));
    const startOfJuly = dateFns.endOfMonth(dateFns.setMonth(startOfYear, 6));

    switch (variant) {
      case "day": {
        return isHalf
          ? dateFns.eachDayOfInterval({
              start: startOfWeek(selectedDate),
              end: endOfWeek(selectedDate),
            })
          : dateFns.eachDayOfInterval({
              start: startOfWeekOfMonth,
              end: endOfWeekOfMonth,
            });
      }
      case "month": {
        return isHalf
          ? dateFns.eachMonthOfInterval({
              start: selectedDate >= endOfJune ? startOfJuly : startOfJanuary,
              end:
                selectedDate <= endOfJune
                  ? endOfJune
                  : dateFns.endOfYear(selectedDate),
            })
          : dateFns.eachMonthOfInterval({
              start: startOfJanuary,
              end: dateFns.endOfYear(selectedDate),
            });
      }
      default:
        return [];
    }
  };

  const handleDateClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <Box className="custom-calendar">
      {variant === "day" && (
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
                isHalf={isHalf}
              />
            ))}
          </Stack>
          {!isHalf && (
            <CalendarHeader
              selectedDate={selectedDate}
              onPrevClick={() =>
                setSelectedDate(dateFns.subMonths(selectedDate, 1))
              }
              onNextClick={() =>
                setSelectedDate(dateFns.subMonths(selectedDate, -1))
              }
            />
          )}
        </>
      )}

      {variant === "month" && (
        <>
          <Stack
            display="grid"
            gridTemplateColumns={`repeat(${isHalf ? 6 : 3}, auto)`}
            justifyItems={"center"}
            gap={1.4}
          >
            {generateCalendar(variant).map((month, index) =>
              isHalf ? (
                <Box key={index}>
                  <p className="calendar-title">{dateFns.getYear(month)}</p>
                  <CalendarMonth
                    key={index}
                    month={month}
                    isHalf={isHalf}
                    selectedDate={selectedDate}
                    onClick={handleDateClick}
                  />
                </Box>
              ) : (
                <CalendarMonth
                  key={index}
                  month={month}
                  isHalf={isHalf}
                  selectedDate={selectedDate}
                  onClick={handleDateClick}
                />
              )
            )}
          </Stack>
          {!isHalf && (
            <CalendarHeader
              selectedDate={selectedDate}
              onPrevClick={() =>
                setSelectedDate(dateFns.subYears(selectedDate, 1))
              }
              onNextClick={() =>
                setSelectedDate(dateFns.subYears(selectedDate, -1))
              }
            />
          )}
        </>
      )}
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
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "just", duration: 0.1 }}
    >
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
    </motion.div>
  );
};

const CalendarMonth = ({
  month,
  selectedDate,
  isHalf,
  onClick,
}: CalendarMonthProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "just", duration: 0.1 }}
      onClick={() => onClick(month)}
      className={`calendar-month ${
        dateFns.isSameMonth(month, selectedDate) ? "selected" : ""
      } ${!isHalf ? "year" : ""}`}
    >
      {isHalf ? dateFns.format(month, "MMM") : dateFns.format(month, "MMMM")}
    </motion.button>
  );
};

const CalendarDay = ({
  day,
  selectedDate,
  onClick,
  isHalf,
}: CalendarDayProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "just", duration: 0.1 }}
      className={`calendar-day ${isHalf ? "week" : "month"} ${
        dateFns.isSameDay(day, selectedDate) ? "selected" : ""
      } ${dateFns.isToday(day) ? "today" : ""}`}
      onClick={() => onClick(day)}
    >
      {dateFns.getDate(day)}
    </motion.button>
  );
};
