import { TextField, OutlinedTextFieldProps } from "@mui/material";
import "./style.scss";

interface ITextField extends OutlinedTextFieldProps {}

const MuiTextField = (props: ITextField) => {
  return <TextField className="textField" {...props} variant="outlined" />;
};

export default MuiTextField;
