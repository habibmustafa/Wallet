import CustomPopUp from "~/components/customPopUp";
import { ReactComponent as Confetti } from "~/assets/images/confetti.svg";
import Heading from "~/components/heading";
import { Grid } from "@mui/material";
import Paragraph from "~/components/paragraph";
import Card from "~/components/card";

const SuccessPopUp = ({ open, setOpen }: any) => {
  return (
    <CustomPopUp
      open={open}
      handleClose={() => {
        setOpen(false);
      }}
    >
      <Grid container textAlign="center" justifyContent="center" p={"0 22px"}>
        <Grid item xs={12} mb={6}>
          <Confetti />
        </Grid>
        <Grid item xs={12} mb={2}>
          <Heading>Congratulation!</Heading>
        </Grid>
        <Grid item xs={12} mb={5} maxWidth="260px">
          <Paragraph>
            Your Bank account is added successfully to the app!
          </Paragraph>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Card
            withBackground
            name="United Bank Asia"
            amount="$ 25,000.00"
            date="04-16-19"
          />
        </Grid>
      </Grid>
    </CustomPopUp>
  );
};

export default SuccessPopUp;
