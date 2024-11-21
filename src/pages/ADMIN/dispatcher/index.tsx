import { Box } from "@mui/material";
import { PageHeader } from "../../../components";
import Protection from "../../../roles/protection";
import { roles } from "../../../roles";

const ADMINDispatcher = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Dispatcher"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINDispatcher;
