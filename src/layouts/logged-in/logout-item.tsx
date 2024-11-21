import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ConfirmationModal } from "../../components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, IUserContext } from "../../context/user-context";
import LogoutIcon from "../../assets/images/sidebar/logout.png";

export const LogoutItem = ({
  isSidebarExtended,
}: {
  isSidebarExtended?: boolean;
}): ReactNode => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext) as IUserContext;
  const [openLogoutConfirmModal, setOpenLogoutConfirmModal] = useState(false);
  const theme = useTheme();
  const { breakpoints } = theme;
  const IsMdUp = useMediaQuery(breakpoints.up("md"));

  const extendedSidebar = () => {
    if (IsMdUp) {
      return isSidebarExtended ? true : false;
    }
    return false;
  };

  const handleLogout = async (): Promise<void> => {
    setOpenLogoutConfirmModal(false);
    setUserData(null);
    navigate("/login");
  };

  return (
    <>
      <Stack
        direction={extendedSidebar() ? "row" : "column"}
        alignItems={"center"}
        justifyContent={extendedSidebar() ? "flex-start" : "center"}
        sx={{
          borderRadius: "6px",
          width: extendedSidebar() ? "80%" : "64px",
          height: extendedSidebar() ? "48px" : "64px",
          mx: "auto",
          cursor: "pointer",
          pl: extendedSidebar() ? 1.5 : 0.5,
          my: extendedSidebar() ? 0.8 : 0,
        }}
        spacing={extendedSidebar() ? 1.5 : 0.5}
        onClick={() => {
          setOpenLogoutConfirmModal(true);
        }}
      >
        <img src={LogoutIcon} width={16} />

        <Typography
          color={"neutral.500"}
          sx={{
            fontWeight: 400,
            lineHeight: "20px",
            fontSize: extendedSidebar() ? "15px" : "12px",
            letterSpacing: "-0.5px",
          }}
        >
          Logout
        </Typography>
      </Stack>
      <ConfirmationModal
        maxWidth="xs"
        open={openLogoutConfirmModal}
        onClose={() => setOpenLogoutConfirmModal(false)}
        title="Logout"
        subtitle="Are you sure you want to logout?"
        confirmText="Logout"
        confirmAction={handleLogout}
      />
    </>
  );
};
