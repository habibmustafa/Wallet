import CustomAppBar from "~/components/appBar";
import Container from "~/components/container";
import "./style.scss";

const Stat = () => {
  return (
    <Container motion className="stat">
      <CustomAppBar backIcon={false} title="Stat"/>
      <Container
        padding="40px 18px"
        className="stat-container"
        maxWidth="800px"
      >
        {/* Image */}
      </Container>
    </Container>
  );
};

export default Stat;
