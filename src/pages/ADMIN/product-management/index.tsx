import { Box } from "@mui/material";
import { PageHeader } from "../../../components";
import Protection from "../../../roles/protection";
import { roles } from "../../../roles";

const ADMINProductManagement = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Product Management"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINProductManagement;
