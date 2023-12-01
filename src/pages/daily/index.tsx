import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";

const Daily = () => {
  const [variant, setVariant] = useState("week");

  return (
    <Container motion className="daily">
      <CustomAppBar
        backIcon={false}
        title="Daily"
        calendar
        calendarProps={{
          variant: variant as "month" | "week" | "year" | "half-year",
        }}
        firstButton={variant === "week" ? "search" : "add"}
        firstButtonHandle={() => {
          variant === "week" ? setVariant("month") : setVariant("week");
        }}
      />
      <Container
        padding="40px 18px"
        className="daily-container"
        maxWidth="800px"
      >
        {/* Image */}
      </Container>
    </Container>
  );
};

export default Daily;
