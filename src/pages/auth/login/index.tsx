import AppBar from "~/components/appBar";
import "./style.scss";
import Container from "~/components/container";
import Text from "~/components/text";
import { ReactComponent as LoginImage } from "~/assets/images/login-image.svg";
import Heading from "~/components/heading";
import Row from "~/components/row";

const Login = () => {
  return (
    <Container className="login">
      <AppBar>
        <Text className="withoutText">Budget tracker</Text>
        <Text className="link">Sign Up</Text>
      </AppBar>
      <Container margin="40px 36px 60px" className="login-container">
        <LoginImage />
        <Row style={{ marginTop: "24px" }}>
          <Heading>Login to your account</Heading>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
