import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";

const Budget = () => {
  const [variant, setVariant] = useState<"half-year" | "year">("half-year");
  return (
    <Container motion className="budget">
      <CustomAppBar
        backIcon={false}
        firstButton="add"
        title="Budget"
        calendar
        calendarProps={{
          variant
        }}
        secondButton={variant === "half-year" ? "search" : "clear"}
        secondButtonHandle={() => {
          variant === "half-year"
            ? setVariant("year")
            : setVariant("half-year");
        }}
      />
      <Container
        padding="40px 18px"
        className="budget-container"
        maxWidth="800px"
      >
        {/* Image */}
      </Container>
    </Container>
  );
};

export default Budget;
