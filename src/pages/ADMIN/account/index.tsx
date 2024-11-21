import { Box } from "@mui/material";
import { PageHeader } from "../../../components";
import Protection from "../../../roles/protection";
import { roles } from "../../../roles";

const ADMINAccount = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Account"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINAccount;
