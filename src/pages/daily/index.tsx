import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";

const Daily = () => {
  const [isHalf, setIsHalf] = useState(true);

  return (
    <Container motion className="daily">
      <CustomAppBar
        backIcon={false}
        title="Daily transaction"
        calendar
        calendarProps={{
          variant: "day",
          isHalf,
        }}
        firstButton={isHalf ? "search" : "clear"}
        firstButtonHandle={() => {
          setIsHalf(!isHalf);
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
