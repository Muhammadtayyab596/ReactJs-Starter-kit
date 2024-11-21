import { Box } from "@mui/material";
import { PageHeader } from "../../../../components";
import Protection from "../../../../roles/protection";
import { roles } from "../../../../roles";

const ADMINCustomerSubscriptions = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Customer Subscriptions"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINCustomerSubscriptions;
