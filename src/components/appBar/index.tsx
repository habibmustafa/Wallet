import Container from "../container";
import Text from "../text";
import "./style.scss";
import React from "react";
import { ReactComponent as Backspace } from "~/assets/icons/backspace.svg";
import { ReactComponent as Search } from "~/assets/icons/search.svg";
import { ReactComponent as Add } from "~/assets/icons/add.svg";

type IAppBar = {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  text?: string;
  search?: boolean;
  add?: boolean;
};

const AppBar = ({
  children,
  leftIcon = <Backspace />,
  text = "Add account",
  search = true,
  add,
}: IAppBar) => {
  return (
    <Container className="appbar">
      {/* {!withIcon && (
        <Stack className="appbar-auth">
          <Text className="withoutText">{text}</Text>
          <Text className="link">Sign Up</Text>
        </Stack>
      )} */}

      {!children ? (
        <React.Fragment>
          {leftIcon}
          <Text className="appbar-text">{text}</Text>
          {(search || add) && (
            <React.Fragment>
              {add && <Add />}
              {search && <Search />}
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        children
      )}
    </Container>
  );
};

export default AppBar;
