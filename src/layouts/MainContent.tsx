// import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import BottomTabScreen from "~/components/bottomTabScreen";
import Container from "~/components/container";

// interface IMainContent {
//   children: ReactElement;
// }

const MainContent = () => {
  return (
    <Container
      className="main-content"
      style={{ display: "grid", gridTemplateRows: "minmax(0, 1fr) auto" }}
    >
      <Outlet />
      <BottomTabScreen />
    </Container>
  );
};

export default MainContent;
