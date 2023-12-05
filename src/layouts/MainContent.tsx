import { ReactElement } from "react";
import BottomTabScreen from "~/components/bottomTabScreen";
import Container from "~/components/container";
import AddTransaction from "~/popUps/addTransaction";
import { useAppSelector } from "~/redux/store";

interface IMainContent {
  children: ReactElement;
}

const MainContent = ({ children }: IMainContent) => {
  const { popUps } = useAppSelector((state) => state.main);
  return (
    <>
      <Container
        className="main-content"
        style={{ display: "grid", gridTemplateRows: "minmax(0, 1fr) auto" }}
      >
        {children}
        <BottomTabScreen />
      </Container>
      <AddTransaction open={popUps.addTransaction} />
    </>
  );
};

export default MainContent;
