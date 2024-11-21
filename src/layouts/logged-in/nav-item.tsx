import {
  Box,
  Collapse,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

export const NavItem = (props: ISidebarItem): ReactNode => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { breakpoints } = theme;
  const { href, icon, icon2, title, isSidebarExtended, children } = props;
  const router = useLocation();
  const { id } = useParams();
  const active = href
    ? router.pathname === href ||
      router.pathname === `${href}/${id}` ||
      `/${router.pathname.split("/")[1]}` === href
    : false;
  const IsMdUp = useMediaQuery(breakpoints.up("md"));

  const extendedSidebar = () => {
    if (IsMdUp) {
      return isSidebarExtended ? true : false;
    }
    return false;
  };

  if (children && children?.length > 0) {
    const isChildActive = router.pathname.split("/")[1] === href.split("/")[1];
    return (
      <>
        <Box sx={{ position: "relative" }}>
          {isChildActive && (
            <Box
              sx={{
                position: "absolute",
                top: "2px",
                bottom: 0,
                left: 0,
                width: 4,
                height: extendedSidebar() ? "42px" : "58px",
                borderRadius: "0px 10px 10px 0px",
                backgroundColor: (theme) => theme.palette.primary.main,
              }}
            />
          )}

          <Stack
            direction={extendedSidebar() ? "row" : "column"}
            alignItems={"center"}
            justifyContent={extendedSidebar() ? "flex-start" : "center"}
            sx={{
              background:
                isChildActive && !extendedSidebar()
                  ? (theme) => theme.palette.primary.main
                  : "",
              borderRadius: "6px",
              width: extendedSidebar() ? "80%" : "80px",
              height: extendedSidebar() ? "48px" : "64px",
              mx: "auto",
              cursor: "pointer",
              pl: extendedSidebar() ? 1.5 : 0,
              my: extendedSidebar() ? 0.8 : 0,
            }}
            spacing={extendedSidebar() ? 1.5 : 0.5}
            onClick={() => {
              navigate(children[0]?.href);
            }}
          >
            <Box
              sx={{
                color: active ? "#7BBAA2" : "neutral.500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {active ? icon : icon2}
            </Box>

            <Typography
              color={active ? "#7BBAA2" : "neutral.500"}
              sx={{
                fontWeight: 400,
                lineHeight: extendedSidebar() ? "20px" : "15px",
                fontSize: extendedSidebar() ? "15px" : "12px",
                letterSpacing: "-0.5px",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
          </Stack>
          {extendedSidebar() && (
            <Box
              sx={{
                position: "absolute",
                top: "2px",
                bottom: 0,
                right: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isChildActive ? (
                <IoIosArrowUp fontSize={"14px"} color="#7BBAA2" />
              ) : (
                <IoIosArrowForward fontSize={"14px"} color="#8E9494" />
              )}
            </Box>
          )}
        </Box>
        {extendedSidebar() && (
          <Collapse
            in={isChildActive}
            timeout="auto"
            unmountOnExit
            sx={{
              pl: 4.5,
              overflow: "hidden",
            }}
          >
            {children.map((item) => {
              const activetab =
                router.pathname.split("/").length > 2
                  ? item.href.split("/")[2] === router.pathname.split("/")[2]
                  : item.href === `/${router.pathname.split("/")[1]}`;
              return (
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 5,
                      left: 12,
                      width: "0.8px",
                      height: extendedSidebar() ? "42px" : "58px",
                      backgroundColor: activetab ? "#7BBAA2" : "#20383A",
                    }}
                  />
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    sx={{
                      background: activetab ? "rgba(255, 255, 255, 0.08)" : "",
                      borderRadius: "6px",
                      width: "80%",
                      height: "36px",
                      mx: "auto",
                      cursor: "pointer",
                      pl: 1.5,
                    }}
                    onClick={() => {
                      navigate(item.href);
                    }}
                  >
                    <Typography
                      color={activetab ? "#7BBAA2" : "neutral.500"}
                      sx={{
                        fontWeight: 400,
                        lineHeight: "20px",
                        fontSize: extendedSidebar() ? "14px" : "13px",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                </Box>
              );
            })}
          </Collapse>
        )}
      </>
    );
  }

  return (
    <Box sx={{ position: "relative" }}>
      {active && (
        <Box
          sx={{
            position: "absolute",
            top: "2px",
            bottom: 0,
            left: 0,
            width: 4,
            height: extendedSidebar() ? "42px" : "58px",
            borderRadius: "0px 10px 10px 0px",
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
        />
      )}
      <Stack
        direction={extendedSidebar() ? "row" : "column"}
        alignItems={"center"}
        justifyContent={extendedSidebar() ? "flex-start" : "center"}
        sx={{
          borderRadius: "6px",
          width: extendedSidebar() ? "80%" : "80px",
          height: extendedSidebar() ? "48px" : "64px",
          mx: "auto",
          cursor: "pointer",
          pl: extendedSidebar() ? 1.5 : 2,
          my: extendedSidebar() ? 0.8 : 0,
          pr: extendedSidebar() ? 1.5 : 2,
        }}
        spacing={extendedSidebar() ? 1.5 : 0.5}
        onClick={() => {
          navigate(href);
        }}
      >
        <Box
          sx={{
            color: active ? "#7BBAA2" : "neutral.500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {active ? icon : icon2}
        </Box>

        <Typography
          color={active ? "#7BBAA2" : "neutral.500"}
          sx={{
            fontWeight: 400,
            lineHeight: extendedSidebar() ? "20px" : "15px",
            fontSize: extendedSidebar() ? "15px" : "12px",
            letterSpacing: "-0.5px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};
