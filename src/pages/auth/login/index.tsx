import AppBar from "~/components/appBar";
import "./style.scss";
import Container from "~/components/container";
import Text from "~/components/text";
import { ReactComponent as LoginImage } from "~/assets/images/login-image.svg";
import { ReactComponent as RightButton } from "~/assets/icons/right-button.svg";
import Heading from "~/components/heading";
import InputUseForm from "~/components/inputUseForm";
import { FormProvider, useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import Button from "~/components/button";
import { inputValidationProps } from "~/validation/useFormValidation";

const Login = () => {
  const methods = useForm();

  return (
    <Container className="login">
      <AppBar>
        <Text className="withoutText">Budget tracker</Text>
        <Text className="link">Sign Up</Text>
      </AppBar>
      <Container margin="40px 36px 60px" className="login-container">
        <LoginImage />
        <FormProvider {...methods}>
          <Grid container gap={4} sx={{ marginTop: "24px" }}>
            <Grid item xs={12}>
              <Heading>Login to your account</Heading>
            </Grid>
            <Grid item xs={12}>
              <InputUseForm
                label="Email"
                name="email"
                placeholder="name@domain.com"
                validation={inputValidationProps("", true)}
              />
            </Grid>
            <Grid item xs={12} display="flex" gap={4}>
              <InputUseForm
                label="Password"
                name="password"
                placeholder="************"
                validation={inputValidationProps("", true)}
              />
              <RightButton
                width="68px"
                onClick={methods.handleSubmit((data) => {
                  console.log(data);
                })}
              />
            </Grid>
          </Grid>
        </FormProvider>
        <Text fontSize="12px" lineHeight="14px" style={{ opacity: 0.5 }}>
          or
        </Text>
        <Button
          style={{ borderColor: "#3B5998", color: "#3B5998", width: "100%" }}
          variant="outlined"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Login with Google
        </Button>
        <Text fontSize="12px" lineHeight="14px" style={{ opacity: 0.5 }}>
          Forgot password?
        </Text>
      </Container>
    </Container>
  );
};

export default Login;
