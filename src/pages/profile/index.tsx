import CustomAppBar from '~/components/appBar'
import Container from '~/components/container'
import "./style.scss";

const Profile = () => {
  return (
    <Container motion className="profile">
      <CustomAppBar backIcon={false} firstButton="settings" title="Profile"/>
      <Container
        padding="40px 18px"
        className="profile-container"
        maxWidth="800px"
      >
        {/* Image */}
      </Container>
    </Container>
  )
}

export default Profile
