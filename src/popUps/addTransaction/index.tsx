import "./style.scss";
import CustomPopUp from "~/components/customPopUp";
import { Grid, MobileStepper } from "@mui/material";
import { useAppDispatch } from "~/redux/store";
import { togglePopUp } from "~/redux/reducers/main";
import Container from "~/components/container";
import CustomAppBar from "~/components/appBar";
import { useState } from "react";
import { ReactComponent as AddTransactionIcon } from "~/assets/images/add-transaction.svg";
import { ReactComponent as Income } from "~/assets/icons/income.svg";
import { ReactComponent as Expense } from "~/assets/icons/expense.svg";
import Heading from "~/components/heading";
import Item from "~/container/item";

const AddTransaction = ({ open }: { open: boolean }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleClose = () => {
    dispatch(togglePopUp("addTransaction"));
    setActiveStep(1);
  };
  return (
    <CustomPopUp open={open} handleClose={handleClose} closeIcon={false}>
      <Container className="add-transaction">
        <CustomAppBar
          title="Add transaction"
          backIcon="clear"
          firstButton={false}
          closeHandle={handleClose}
        />
        <Container
          className="add-transaction-container"
          padding="32px 18px"
          maxWidth="800px"
        >
          {/* Stepper */}
          <MobileStepper
            className="stepper"
            variant="progress"
            steps={5}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={false}
            backButton={false}
          />

          {/* Content */}
          {activeStep === 1 && (
            <Grid container className="tab-one" spacing={2.4}>
              <Grid
                item
                xs={12}
                margin={"20px 0 44px 0"}
                display="flex"
                justifyContent="center"
              >
                <AddTransactionIcon />
              </Grid>
              <Grid item xs={12} margin={"0 24px"}>
                <Heading type="h3" style={{ maxWidth: "267px", opacity: 0.8 }}>
                  What kind of transaction it is?
                </Heading>
              </Grid>
              <Grid item xs={6}>
                <Item icon={<Income />} title="Income" iconBackColor="#33C9FF" onClick={handleNext} />
              </Grid>
              <Grid item xs={6}>
                <Item icon={<Expense />} title="Expense" iconBackColor="#FF3378" onClick={handleNext} />
              </Grid>
            </Grid>
          )}
        </Container>
      </Container>
    </CustomPopUp>
  );
};

export default AddTransaction;
