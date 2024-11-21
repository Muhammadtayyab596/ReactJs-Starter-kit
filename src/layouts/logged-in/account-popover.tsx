import { useContext, useRef, useState } from "react";
import { Button, Box, Typography, Divider, Stack } from "@mui/material";
import { MenuPopover, Avatar } from "../../components";
import { LogoutItem } from "./logout-item";
import { IUserContext, UserContext } from "../../context/user-context";
import { FaCaretDown } from "react-icons/fa6";

function AccountPopover(): ReactNode {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const { data } = useContext(UserContext) as IUserContext;

  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: "6px 10px",
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: 1,
              position: "absolute",
              border: "1px solid #0B494B",
              boxShadow: "0px 0px 0px 4px #0B494B3D",
            },
          }),
        }}
      >
        <Avatar url={data?.user?.profilePicURL} width={30} height={30} />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Box sx={{ px: 1, textAlign: "left" }}>
            <Typography color={"primary.main"} fontWeight={500} fontSize={14}>
              {data?.user?.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <FaCaretDown />
          </Box>
        </Stack>
      </Button>
      {/* MENU POPOVER */}
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current as Element}
        sx={{ width: 220, borderRadius: "8px" }}
      >
        <Stack sx={{ my: 1.5, px: 2 }} spacing={1}>
          {/* <Button
            color="inherit"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
            onClick={() => {
              navigate("/account");
              handleClose();
            }}
          >
            <MdOutlineAccountCircle size={22} color="#8e9494" />
            <Typography
              sx={{
                lineHeight: "20px",
                fontSize: "15px",
                ml: 1.5,
                color: "#8E9494",
              }}
            >
              Account
            </Typography>
          </Button> */}
          <Typography variant="subtitle1">{data?.user?.email}</Typography>
          <Typography variant="subtitle2" color={"primary"}>
            ({data?.user?.userRole})
          </Typography>
        </Stack>
        <Divider sx={{ my: 1 }} />
        <Stack sx={{ px: 2, pb: 1 }}>
          <LogoutItem />
        </Stack>
      </MenuPopover>
    </>
  );
}

export default AccountPopover;
