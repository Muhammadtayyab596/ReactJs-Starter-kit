import { Tooltip } from "@mui/material";
import InfoIcon from "../../assets/images/info.png";

const Help = ({ title }: { title: string }) => {
  return (
    <Tooltip title={title}>
      <img src={InfoIcon} alt="InfoIcon" width={16} />
    </Tooltip>
  );
};

export default Help;
