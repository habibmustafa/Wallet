import CustomAppBar from '~/components/appBar'
import Container from '~/components/container'
import "./style.scss";

const Daily = () => {
  return (
    <Container motion className="daily">
      <CustomAppBar backIcon={false} title="Daily"/>
      <Container
        padding="40px 18px"
        className="daily-container"
        maxWidth="800px"
      >
        {/* Image */}
      </Container>
    </Container>
  )
}

export default Daily
