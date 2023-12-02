import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";

const Stat = () => {
  const [variant, setVariant] = useState<"half-year" | "year">("half-year");

  return (
    <Container motion className="stat">
      <CustomAppBar
        backIcon={false}
        title="Stat"
        calendar
        calendarProps={{
          variant
        }}
        firstButton={variant === "half-year" ? "search" : "clear"}
        firstButtonHandle={() => {
          variant === "half-year" ? setVariant("year") : setVariant("half-year");
        }}
      />
      <Container
        padding="40px 18px"
        className="stat-container"
        maxWidth="800px"
      >
        {/* Image */}
      </Container>
    </Container>
  );
};

export default Stat;
