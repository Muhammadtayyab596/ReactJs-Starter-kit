import { Button } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = ({ sx }: { sx?: any }) => {
  const navigate = useNavigate();
  return (
    <Button
      color="secondary"
      sx={{ p: 0, mb: 2, mt: { xs: 1, lg: 0 }, ...sx }}
      size="large"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowBack size={20} />
      Back
    </Button>
  );
};

export default BackButton;
