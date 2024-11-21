import { Box, Stack, Typography } from "@mui/material";
import Modal from "../modal";
import { ContainedButton } from "../../common";

export default function ConfirmationModal({
  open,
  onClose,
  maxWidth,
  title,
  subtitle,
  confirmText,
  confirmAction,
}: {
  open: boolean;
  onClose: () => void;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
  title: string;
  subtitle?: string;
  confirmText: string;
  confirmAction: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} maxWidth={maxWidth}>
      <>
        <Box>
          <Typography fontSize={"22px"} fontWeight={600} mb={1}>
            {title}
          </Typography>
          <Typography fontSize={14} color={"neutral.500"}>
            {subtitle}
          </Typography>
        </Box>
        <Stack
          sx={{ mt: 4 }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <ContainedButton
            title="Cancel"
            variant="text"
            onClick={onClose}
            fullWidth
            color="inherit"
          />
          <ContainedButton
            title={confirmText}
            onClick={() => confirmAction()}
            color="error"
            variant="contained"
            fullWidth
          />
        </Stack>
      </>
    </Modal>
  );
}
