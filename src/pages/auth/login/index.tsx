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
import CustomAppBar from "~/components/appBar";
import { useAppDispatch } from "~/redux/store";
import { signInWithOAuth, signInWithPassword } from "~/redux/actions/auth";

const Login = () => {
  const methods = useForm();
  const { email, password } = methods.watch();
  const dispatch = useAppDispatch();

  const onSubmit = methods.handleSubmit( async(data) => {
    dispatch(signInWithPassword(data));
  });

  return (
    <Container motion className="login">
      {/* App bar */}
      <CustomAppBar>
        <Text className="text">Budget tracker</Text>
        <Link to="/register">
          <Text className="link">Sign Up</Text>
        </Link>
      </CustomAppBar>

      {/* Container */}
      <Container
        padding="40px 18px"
        className="login-container"
        maxWidth="800px"
      >
        {/* Image */}
        <LoginImage style={{ minHeight: "64px" }} />

        {/* Input form */}
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
              />
            </Grid>
            <Grid item xs={12} display="flex" gap={4}>
              <InputUseForm
                label="Password"
                name="password"
                type="pass"
                placeholder="************"
              />
              <IconButton onClick={onSubmit} disabled={!email || !password}>
                <RightButton />
              </IconButton>
            </Grid>
          </Grid>
        </FormProvider>

        {/* Or */}
        <Text fontSize="12px" lineHeight="14px" style={{ opacity: 0.5 }}>
          or
        </Text>

        {/* Login with google */}
        <Button
          style={{ borderColor: "#3B5998", color: "#3B5998", width: "100%" }}
          variant="outlined"
          onClick={() => {
            dispatch(signInWithOAuth());
          }}
        >
          Login with Google
        </Button>

        {/* Forgot password */}
        <Text fontSize="12px" lineHeight="14px" style={{ opacity: 0.5 }}>
          Forgot password?
        </Text>
      </Container>
    </Container>
  );
};

export default Login;
