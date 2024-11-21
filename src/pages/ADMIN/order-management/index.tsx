import { Box } from "@mui/material";
import { PageHeader } from "../../../components";
import Protection from "../../../roles/protection";
import { roles } from "../../../roles";

const ADMINOrderManagement = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Order Management"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINOrderManagement;
