import { ReactElement } from "react";
import BottomTabScreen from "~/components/bottomTabScreen";
import Container from "~/components/container";

interface IMainContent {
  children: ReactElement;
}

const MainContent = ({ children }: IMainContent) => {
  return (
    <Container
      className="main-content"
      style={{ display: "grid", gridTemplateRows: "minmax(0, 1fr) auto" }}
    >
      {children}
      <BottomTabScreen />
    </Container>
  );
};

export default MainContent;
