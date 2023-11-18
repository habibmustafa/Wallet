import { ReactElement } from "react";
import Container from "~/components/container";

interface IMainContent {
  children: ReactElement;
}

const MainContent = ({ children }: IMainContent) => {
  return (
    <Container type="main">
      {/* Height: 96px */}
      {/*<Header />*/}

      {/* Container: 1fr */}
      <main>{children}</main>

      {/* Height: 72px */}
      {/*<Footer />*/}
    </Container>
  );
};

export default MainContent;
