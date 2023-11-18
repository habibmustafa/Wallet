import { ReactElement } from "react";

interface IMainContent {
  children: ReactElement;
}

const MainContent = ({ children }: IMainContent) => {
  return (
    <main>
      {/* Height: 96px */}
      {/*<Header />*/}

      {/* Container: 1fr */}
      {/* <main>{children}</main> */}
      {children}

      {/* Height: 72px */}
      {/*<Footer />*/}
    </main>
  );
};

export default MainContent;
