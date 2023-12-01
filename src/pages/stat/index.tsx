import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";

const Stat = () => {
  const [variant, setVariant] = useState("week");

  return (
    <Container motion className="stat">
      <CustomAppBar
        backIcon={false}
        title="Stat"
        calendar
        calendarProps={{
          variant,
        }}
        firstButton={variant === "week" ? "search" : "add"}
        firstButtonHandle={() => {
          variant === "week" ? setVariant("month") : setVariant("week");
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
