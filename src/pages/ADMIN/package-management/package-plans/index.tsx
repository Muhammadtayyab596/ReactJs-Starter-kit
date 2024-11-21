import { Box } from "@mui/material";
import { PageHeader } from "../../../../components";
import Protection from "../../../../roles/protection";
import { roles } from "../../../../roles";

const ADMINPackagePlans = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Package Plans"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINPackagePlans;
