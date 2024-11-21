import { Box } from "@mui/material";
import { PageHeader } from "../../../components";
import Protection from "../../../roles/protection";
import { roles } from "../../../roles";

const ADMINDashboard = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Dashboard"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINDashboard;
