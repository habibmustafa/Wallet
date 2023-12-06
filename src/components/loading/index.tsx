import { CircularProgress } from "@mui/material";
import "./style.scss";
interface ILoading {
  style?: any;
  className?: string;
}

const Loading: React.FC<ILoading> = ({ style, className }) => {
  return (
    <div className={`loading ${className}`} style={style}>
      <div className="loading-inner">
        <div className="root">
          <CircularProgress size={28} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
