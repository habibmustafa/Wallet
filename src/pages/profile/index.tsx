import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";
import Button from "~/components/button";
import { signOut } from "~/redux/actions/auth";
import { useAppDispatch } from "~/redux/store";

const Profile = () => {
  const dispatch = useAppDispatch();

  return (
    <Container motion className="profile">
      <CustomAppBar backIcon={false} firstButton="settings" title="Profile" />
      <Container
        padding="40px 18px"
        className="profile-container"
        maxWidth="800px"
      >
        <Button
          onClick={() => {
            dispatch(signOut());
          }}
        >
          Sign Out
        </Button>
        {/* Image */}
      </Container>
    </Container>
  );
};

export default Profile;
