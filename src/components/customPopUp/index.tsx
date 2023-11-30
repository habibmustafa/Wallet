import React from "react";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactComponent as Clear } from "~/assets/icons/clear.svg";
import Container from "../container";
import Row from "../row";
import "./style.scss";

type customPopUpProps = {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
};
const CustomPopUp = ({ open, handleClose, children }: customPopUpProps) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div className="custom-modal">
        <Row className="custom-modal-header">
          <Clear onClick={handleClose} />
        </Row>
        <Container className="custom-modal-container">{children}</Container>
      </div>
    </Dialog>
  );
};

export default CustomPopUp;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
