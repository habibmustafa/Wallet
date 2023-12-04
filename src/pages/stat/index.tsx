import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";
import NoData from "~/container/noData";
import NoStat from "~/assets/images/no-stat.png";

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
        <NoData
          image={NoStat}
          title="You have to have atleast 1 month of transaction"
          description="You can add transaction by tapping the + button below"
        />
      </Container>
    </Container>
  );
};

export default Stat;
