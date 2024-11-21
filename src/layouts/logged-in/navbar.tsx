import PropTypes from "prop-types";
import { Stack, styled } from "@mui/material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountPopover from "./account-popover";
import OpenArrow from "../../assets/images/sidebar/open-arrow.png";
import ClosedArrow from "../../assets/images/sidebar/closed-arrow.png";
import { Logo } from "../../components";

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  height: "78px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "none",
  background: "#FFF",
  [theme.breakpoints.down("md")]: {
    height: "58px",
  },
}));

interface INavbar {
  onSidebarOpen?: () => void;
  isSidebarExtended: boolean;
  onSidebarExtend: () => void;
}

export const Navbar = (props: INavbar): ReactNode => {
  const { onSidebarOpen, isSidebarExtended, onSidebarExtend, ...rest } = props;

  return (
    <>
      <NavbarRoot
        sx={{
          left: {
            md: isSidebarExtended ? 270 : 100,
            transition: "0.3s",
          },
          width: {
            md: `calc(100% - ${isSidebarExtended ? "270px" : "100px"})`,
          },
          borderBottom: "1px solid #E4E4E4",
        }}
        {...rest}
      >
        <Toolbar
          disableGutters
          sx={{
            left: 0,
            px: { md: 3.8, xs: 1 },
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: -13,
              top: 20,
              display: {
                xs: "none",
                md: "block",
              },
              cursor: "pointer",
              width: "28px",
              height: "26px",
              borderRadius: "15px",
            }}
            onClick={onSidebarExtend}
          >
            <img
              src={isSidebarExtended ? ClosedArrow : OpenArrow}
              alt=""
              width={28}
            />
          </Box>
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },
              mr: 1,
            }}
            color="secondary"
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },
            }}
          >
            <Logo size={70} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction={"row"} alignItems={"center"} spacing={1.2}>
            <AccountPopover />
          </Stack>
        </Toolbar>
      </NavbarRoot>
    </>
  );
};

Navbar.defaultProps = {
  onSidebarOpen: undefined,
  isPermanentSidebarOpen: true,
};
Navbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  isPermanentSidebarOpen: PropTypes.bool,
};
