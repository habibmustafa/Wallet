import CustomAppBar from '~/components/appBar'
import Container from '~/components/container'
import "./style.scss";

const Budget = () => {
  return (
    <Container motion className="budget">
      <CustomAppBar backIcon={false} secondButton='add' title="Budget"/>
      <Container
        padding="40px 18px"
        className="budget-container"
        maxWidth="800px"
      >
        {/* Image */}
      </Container>
    </Container>
  )
}

export default Budget
