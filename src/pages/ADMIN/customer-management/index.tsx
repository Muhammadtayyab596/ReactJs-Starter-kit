import { Box } from "@mui/material";
import { PageHeader } from "../../../components";
import Protection from "../../../roles/protection";
import { roles } from "../../../roles";

const ADMINCustomerManagement = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Customer Management"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINCustomerManagement;
