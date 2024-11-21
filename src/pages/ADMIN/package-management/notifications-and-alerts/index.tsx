import { Box } from "@mui/material";
import { PageHeader } from "../../../../components";
import Protection from "../../../../roles/protection";
import { roles } from "../../../../roles";

const ADMINNotificationsAndAlerts = () => {
  return (
    <Protection protection={[roles.ADMIN]}>
      <Box>
        <PageHeader title={"Notifications & Alerts"} />
        <Box></Box>
      </Box>
    </Protection>
  );
};

export default ADMINNotificationsAndAlerts;
