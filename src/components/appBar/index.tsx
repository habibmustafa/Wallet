import Container from "../container";
import Text from "../text";
import "./style.scss";
import React from "react";
import { ReactComponent as Backspace } from "~/assets/icons/backspace.svg";
import { ReactComponent as Search } from "~/assets/icons/search.svg";
import { ReactComponent as Add } from "~/assets/icons/add.svg";
import { IconButton } from "@mui/material";

type IAppBar = {
  children?: React.ReactNode;
  backIcon?: boolean;
  title?: string;
  search?: boolean;
  add?: boolean;
  searchHandle?: () => void;
  addHandle?: () => void;
  datePicker?: boolean;
  datePickerProps?: any;
};

const CustomAppBar = ({
  // children,
  backIcon = true,
  title = "Add Expense",
  search = true,
  add,
  searchHandle,
  addHandle,
  // datePicker,
  // datePickerProps,
}: IAppBar) => {
  const onBackHandle = () => {};

  return (
    <Container className="appbar">
      {backIcon && (
        <IconButton onClick={onBackHandle}>{<Backspace />}</IconButton>
      )}
      <Text className="appbar-text">{title}</Text>
      {(search || add) && (
        <React.Fragment>
          {add && <IconButton onClick={addHandle}>{<Add />}</IconButton>}
          {search && (
            <IconButton onClick={searchHandle}>{<Search />}</IconButton>
          )}
        </React.Fragment>
      )}
      {/* {!children ? (
        <React.Fragment>
          {leftIcon}
          <Text className="appbar-text">{title}</Text>
          {(search || add) && (
            <React.Fragment>
              {add && <Add />}
              {search && <Search />}
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        children
      )} */}
    </Container>
  );
};

export default CustomAppBar;
