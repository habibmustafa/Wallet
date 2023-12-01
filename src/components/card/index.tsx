import "./style.scss";
import { Grid } from "@mui/material";
import CustomLabel from "../customLabel";
import Paragraph from "../paragraph";
import Heading from "../heading";
import { ReactComponent as Bank } from "~/assets/images/bank.svg";

type CardProps = {
  withBackground?: boolean;
  name: string;
  amount: string;
  date: string;
};

const Card = ({ withBackground, name, amount, date }: CardProps) => {
  return !!withBackground ? (
    <Grid
      container
      textAlign="start"
      className="card card-background"
      rowGap={5}
    >
      <Grid item xs={12} display="flex" gap={3} justifyContent="space-between">
        <div>
          <CustomLabel className="card-background-label">Bank name</CustomLabel>
          <Heading type="h2" className="card-background-text">
            {name}
          </Heading>
        </div>
        <Bank width="80px" height="80px" opacity={0.18} />
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        gap={3}
        justifyContent="flex-start"
        alignItems="center"
      >
        <div>
          <CustomLabel className="card-background-label">
            Started amount
          </CustomLabel>
          <Heading type="h4" className="card-background-text">
            {amount}
          </Heading>
        </div>
        <div className="divider"></div>
        <div>
          <CustomLabel className="card-background-label">Date</CustomLabel>
          <Heading type="h4" className="card-background-text">
            {date}
          </Heading>
        </div>
      </Grid>
    </Grid>
  ) : (
    <Grid container className="card">
      <Grid item xs={12}>
        <CustomLabel>Bank name</CustomLabel>
        <Paragraph>United Bank Asia</Paragraph>
      </Grid>
    </Grid>
  );
};

export default Card;
