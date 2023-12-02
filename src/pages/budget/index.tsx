import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";

const Budget = () => {
  const [isHalf, setIsHalf] = useState(true);

  return (
    <Container motion className="budget">
      <CustomAppBar
        backIcon={false}
        firstButton="add"
        title="Budget"
        calendar
        calendarProps={{
          variant: "month",
          isHalf,
        }}
        secondButton={isHalf ? "search" : "clear"}
        secondButtonHandle={() => {
          setIsHalf(!isHalf);
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
