import CustomAppBar from "~/components/appBar";
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
import { Link } from "react-router-dom";
import IconButton from "~/components/iconButton";
import Paragraph from "~/components/paragraph";
import { useAppDispatch } from "~/redux/store";
import { signUp } from "~/redux/actions/auth";

const Register = () => {
  const methods = useForm();
  const dispatch = useAppDispatch();
  const { name, email, password } = methods.watch();

  const onSubmit = methods.handleSubmit( async(data) => {
    dispatch(signUp(data));
  });

  return (
    <Container motion className="register">
      {/* App bar */}
      <CustomAppBar>
        <Text className="text">Budget tracker</Text>
        <Link to="/login">
          <Text className="link">Login</Text>
        </Link>
      </CustomAppBar>

      {/* Container */}
      <Container
        padding="40px 18px"
        className="register-container"
        maxWidth="800px"
      >
        {/* Image */}
        <LoginImage style={{ minHeight: "64px" }} />

        {/* Input form */}
        <FormProvider {...methods}>
          <Grid container gap={4} sx={{ marginTop: "24px" }}>
            <Grid item xs={12}>
              <Heading>Sign up to Budget tracker</Heading>
              <Paragraph margin="14px 0 0">
                Keep your finantial data store to our server so that you can
                access from anywhere you want
              </Paragraph>
            </Grid>
            <Grid item xs={12}>
              <InputUseForm
                label="Your name"
                name="name"
                placeholder="Your name"
                // validation={inputValidationProps("", true)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputUseForm
                label="Email"
                name="email"
                placeholder="name@domain.com"
                // validation={inputValidationProps("", true)}
              />
            </Grid>
            <Grid item xs={12} display="flex" gap={4}>
              <InputUseForm
                label="Password"
                name="password"
                type="pass"
                placeholder="************"
                // validation={inputValidationProps("", true)}
              />
              <IconButton
                onClick={onSubmit}
                disabled={!name || !email || !password}
              >
                <RightButton />
              </IconButton>
            </Grid>
          </Grid>
        </FormProvider>

        {/* Or */}
        <Text fontSize="12px" lineHeight="14px" style={{ opacity: 0.5 }}>
          or
        </Text>

        {/* Sign up with Google */}
        <Button
          style={{ borderColor: "#3B5998", color: "#3B5998", width: "100%" }}
          variant="outlined"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Sign up with Google
        </Button>

        {/* Forgot password */}
        <Text fontSize="12px" lineHeight="14px" style={{ opacity: 0.5 }}>
          Forgot password?
        </Text>
      </Container>
    </Container>
  );
};

export default Register;
