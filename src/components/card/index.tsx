import "./style.scss";
import { Grid } from "@mui/material";
import CustomLabel from "../customLabel";
import Heading from "../heading";
import { ReactComponent as Bank } from "~/assets/images/bank.svg";

type CardProps = {
  withBackground?: boolean;
  name?: string;
  amount?: string;
  date?: string;
  type?: "Income" | "Expense";
};

const Card = ({
  withBackground = false,
  name,
  amount,
  date,
  type,
}: CardProps) => {
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
        <div className="card-background-divider"></div>
        <div>
          <CustomLabel className="card-background-label">Date</CustomLabel>
          <Heading type="h4" className="card-background-text">
            {date}
          </Heading>
        </div>
      </Grid>
    </Grid>
  ) : (
    <Grid container className="card card-without-background" gap={6}>
      <Grid item xs={12}>
        <CustomLabel className="card-label">Payee</CustomLabel>
        <Heading type="h2" className="card-text">
          {name}
        </Heading>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        gap={3}
        justifyContent="space-between"
        alignItems="center"
        maxWidth={"270px"}
      >
        <div>
          <CustomLabel className="card-label">Transaction type</CustomLabel>
          <Heading type="h4" className="card-text">
            {type}
          </Heading>
        </div>
        <div className="card-divider"></div>
        <div>
          <CustomLabel className="card-label">Date</CustomLabel>
          <Heading type="h4" className="card-text">
            {date}
          </Heading>
        </div>
      </Grid>
    </Grid>
  );
};

export default Card;
