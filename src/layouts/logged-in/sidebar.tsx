/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Theme as MuiTheme } from "@mui/material/styles";
import { Box, Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Logo } from "../../components";
import { NavItem } from "./nav-item";
import { LogoutItem } from "./logout-item";
import { SidebarItems } from "../../roles/sidebar-items";
import { roles } from "../../roles";
import { IUserContext, UserContext } from "../../context/user-context";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Sidebar = (props: ISidebar): ReactNode => {
  const { data } = useContext(UserContext) as IUserContext;
  const { open, onClose, isSidebarExtended } = props;
  const router = useLocation();
  const mdUp = useMediaQuery((theme: MuiTheme) => theme.breakpoints.up("md"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  }, [router.pathname]);

  const extendedSidebar = () => {
    if (mdUp) {
      return isSidebarExtended ? true : false;
    }
    return false;
  };

  const items = () => {
    return (
      <>
        <Box
          sx={{
            border: extendedSidebar() ? "none" : "1px solid",
            borderImageSource:
              "radial-gradient(35.29% 163199.99% at 50% 50%, #2f3142 0%, rgba(151, 151, 151, 0) 100%)",
            borderImageSlice: 1,
            py: 2,
          }}
        >
          {isSidebarExtended && mdUp && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                px: 3,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#BFBFBF",
                  fontSize: "14px",
                  lineHeight: "29px",
                  letterSpacing: "1px",
                  fontWeight: 500,
                }}
              >
                HOME
              </Typography>
              <MoreHorizIcon sx={{ color: "#BFBFBF", fontSize: 20 }} />
            </Stack>
          )}
          {data?.user?.userRole === roles.ADMIN && (
            <>
              {SidebarItems.ADMIN.home.map((item: ISidebarItem): ReactNode => {
                return (
                  <NavItem
                    key={item.title}
                    icon={item.icon}
                    icon2={item.icon2}
                    href={item.href}
                    title={item.title}
                    isSidebarExtended={isSidebarExtended}
                    children={item.children}
                  />
                );
              })}
            </>
          )}
        </Box>
        {/* {isSidebarExtended && mdUp && (
          <Box
            sx={{
              height: "0.5px",
              background: "#FFFFFF1F",
              width: "80%",
              margin: "0px auto",
            }}
          />
        )}
        <Box
          sx={{
            py: 2,
          }}
        >
          {isSidebarExtended && mdUp && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                px: 3,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "neutral.500",
                  fontSize: "14px",
                  lineHeight: "29px",
                  letterSpacing: "1px",
                  fontWeight: 500,
                }}
              >
                OTHERS
              </Typography>
              <MoreHorizIcon sx={{ color: "neutral.500", fontSize: 20 }} />
            </Stack>
          )}
          {data?.user?.userRole === roles.ADMIN && (
            <>
              {SidebarItems.ADMIN.others.map(
                (item: ISidebarItem): ReactNode => {
                  return (
                    <NavItem
                      key={item.title}
                      icon={item.icon}
                      icon2={item.icon2}
                      href={item.href}
                      title={item.title}
                      isSidebarExtended={isSidebarExtended}
                      children={item.children}
                    />
                  );
                }
              )}
            </>
          )}
        </Box> */}
      </>
    );
  };

  const content = (
    <>
      <Box
        className="logged-in-sidebar-wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Box
          sx={{
            height: { md: "78px", xs: "58px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: extendedSidebar() ? "1px solid #FFFFFF1F" : "none",
          }}
        >
          <Logo full={isSidebarExtended} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>{items()}</Box>
        <Box sx={{ my: 0.5 }}>
          <LogoutItem isSidebarExtended={isSidebarExtended} />
        </Box>
      </Box>
    </>
  );

  if (mdUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            color: "#FFFFFF",
            width: isSidebarExtended ? 270 : 100,
            borderRight: "none",
            boxShadow: "0px 4px 14px 6px rgba(247, 247, 247, 0.60)",
            transition: "0.3s",
            backgroundColor: (theme) => theme.palette.secondary.main,
            display: "flex",
            zIndex: 0,
          },
        }}
        variant={"permanent"}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          color: "#FFFFFF",
          width: 100,
          backgroundColor: (theme) => theme.palette.secondary.main,
          display: "flex",
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

Sidebar.defaultProps = {
  onClose: undefined,
  open: false,
  openPermanentSidebar: true,
  onTogglePermanentSidebar: undefined,
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  openPermanentSidebar: PropTypes.bool,
  onTogglePermanentSidebar: PropTypes.func,
};
