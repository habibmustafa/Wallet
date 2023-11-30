import CustomPopUp from "~/components/customPopUp";
import { ReactComponent as Confetti } from "~/assets/images/confetti.svg";

const SuccessPopUp = ({ open, setOpen }: any) => {
  return (
    <CustomPopUp
      open={open}
      handleClose={() => {
        setOpen(false);
      }}
    >
      <Confetti />
    </CustomPopUp>
  );
};

export default SuccessPopUp;
