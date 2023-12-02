import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";

const Stat = () => {
  const [isHalf, setIsHalf] = useState(true);

  return (
    <Container motion className="stat">
      <CustomAppBar
        backIcon={false}
        title="Stat"
        calendar
        calendarProps={{
          variant: "month",
          isHalf,
        }}
        firstButton={isHalf ? "search" : "clear"}
        firstButtonHandle={() => {
          setIsHalf(!isHalf);
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
