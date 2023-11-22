// import AppBar from "~/components/appBar";
import Container from "~/components/container";
import { ReactComponent as Bank } from "~/assets/images/bank.svg";
import "./style.scss";

const AddAccount = () => {
  return (
    <Container className="add-account">
      {/* <AppBar title="Add account" search={false} /> */}
      <Container className="add-account-container">
        <Bank />
      </Container>
    </Container>
  );
};

export default AddAccount;
