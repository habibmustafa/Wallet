import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import { useState } from "react";
import NoData from "~/container/noData";
import NoTransaction from "~/assets/images/no-transaction.png";

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
        <NoData
          image={NoTransaction}
          title="No transaction yet"
          description="You can add transaction by tapping the + button below"
        />
      </Container>
    </Container>
  );
};

export default Daily;
