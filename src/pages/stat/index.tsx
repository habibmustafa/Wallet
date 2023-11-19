import { Box, Stack } from "@mui/material";
import * as dateFns from "date-fns";
import { useState } from "react";

const Stat = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const variant: string = "month";
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
    <div>
      <Box
        bgcolor="#fcfcfc"
        boxShadow="0px 0px 4px 0px #999"
        borderRadius={2}
        padding={2}
        margin={2}
        textAlign="center"
      >
        {variant === "year" ? (
          <Stack display="grid" gridTemplateColumns={"repeat(6, 1fr)"} gap={1}>
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

        {variant === "month"  || variant === "week" ? (
          <Stack display="grid" gridTemplateColumns={"repeat(7, 1fr)"} gap={1}>
            {weekNames.map((day, index) => (
              <span key={index}>{day}</span>
            ))}

            {generateCalendar(variant).map((day, index) => (
              <button
                key={index}
                disabled={dateFns.isSameDay(day, selectedDate)}
                onClick={() => handleDateClick(day)}
              >
                {dateFns.getDate(day)}
              </button>
            ))}
          </Stack>
        ) : null}

        {variant === "month" ? (
          <Stack mt={2} flexDirection="row" justifyContent={"space-around"}>
            <button
              onClick={() =>
                setSelectedDate(dateFns.subMonths(selectedDate, 1))
              }
            >
              left
            </button>
            <span>{currentMonthName}</span>
            <button
              onClick={() =>
                setSelectedDate(dateFns.subMonths(selectedDate, -1))
              }
            >
              right
            </button>
          </Stack>
        ) : null}
      </Box>
    </div>
  );
};

export default Stat;
