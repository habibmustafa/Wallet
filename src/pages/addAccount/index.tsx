// import AppBar from "~/components/appBar";
import Container from "~/components/container";
import { ReactComponent as Bank } from "~/assets/images/bank.svg";
import { ReactComponent as RightButton } from "~/assets/icons/right-button.svg";
import "./style.scss";
import CustomAppBar from "~/components/appBar";
import { FormProvider, useForm } from "react-hook-form";
import Heading from "~/components/heading";
import { Grid } from "@mui/material";
import InputUseForm from "~/components/inputUseForm";
import IconButton from "~/components/iconButton";
import ColorPickerUseForm from "~/components/colorPickerUseForm";
import { useState } from "react";
import SuccessPopUp from "./successPopUp";

const AddAccount = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm();
  const { accountName, amount, colorId } = methods.watch();

  return (
    <Container motion className="add-account">
      <CustomAppBar title="Add account" search={false} />
      <Container
        className="add-account-container"
        padding="40px 18px"
        maxWidth="800px"
      >
        {/* Image */}
        <Bank style={{ minHeight: "64px" }} />

        {/* Input form */}
        <FormProvider {...methods}>
          <Grid container gap={4} sx={{ marginTop: "24px" }}>
            <Grid item xs={12} mb={3}>
              <Heading>Add primary bank account</Heading>
            </Grid>
            <Grid item xs={12}>
              <ColorPickerUseForm label="Select color" name="colorId" colors={colors} />
            </Grid>
            <Grid item xs={12}>
              <InputUseForm
                label="Account name"
                name="accountName"
                placeholder="Account name here"
              />
            </Grid>
            <Grid item xs={12} display="flex" gap={4}>
              <InputUseForm
                label="Starter amount"
                name="amount"
                placeholder="$ 0,000.00"
              />
              <IconButton
                onClick={methods.handleSubmit((data) => {
                  console.log(data);
                  setOpen(true)
                })}
                disabled={!accountName || !amount || !colorId}
              >
                <RightButton />
              </IconButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Container>

      <SuccessPopUp open={open} setOpen={setOpen} />
    </Container>
  );
};

export default AddAccount;

const colors = [
  { id: 1, color: "linear-gradient(180deg, #7562FF 0%, #33C9FF 100%)" },
  { id: 2, color: "linear-gradient(180deg, #FF8B62 0%, #FF3378 100%)" },
  { id: 3, color: "linear-gradient(180deg, #36F6E4 0%, #19EA25 100%)" },
  { id: 4, color: "linear-gradient(180deg, #F433DD 0%, #174EE5 100%)" },
  { id: 5, color: "linear-gradient(180deg, #FFA27F 0%, #FFCD48 100%)" },
  { id: 6, color: "linear-gradient(180deg, #00FAAB 0%, #8F5DFF 100%)" },
  { id: 7, color: "linear-gradient(180deg, #F274FF 0%, #F61F6D 100%)" },
];
