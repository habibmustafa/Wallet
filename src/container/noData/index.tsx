import Container from "~/components/container";
import Heading from "~/components/heading";
import Paragraph from "~/components/paragraph";
import Row from "~/components/row";
import "./style.scss"

type NoDataProps = {
  image: string;
  title: string;
  description: string;
};

const NoData = ({
  image,
  title = "No transaction yet",
  description = "You can add transaction by tapping the + button below",
}: NoDataProps) => {
  return (
    <Container className="no-data">
      <Row className="no-data-image">
        <img src={image} alt="no-data" />
      </Row>
      <Row className="no-data-text">
        <Heading type="h3">{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </Row>
    </Container>
  );
};

export default NoData;
