import React from "react";
import { Box, Dialog, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal({
  open,
  onClose,
  children,
  noPadding,
  maxWidth,
  hideClose
}: {
  open: boolean;
  noPadding?: boolean;
  hideClose?: boolean;
  onClose: () => void;
  children: JSX.Element;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
        fullWidth
        sx={{
          background: "rgba(97, 101, 106, 0.3)",
          ".MuiDialog-paper": {
            padding: noPadding ? "0rem" : "1.5rem",
            "::-webkit-scrollbar": { width: "0" },
          },
          div: {
            borderRadius: "10px",
          },
        }}
      >
        {!hideClose &&
        <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
          <IconButton color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        }
        <Box>{children}</Box>
      </Dialog>
    </React.Fragment>
  );
}
