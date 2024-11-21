// material
import { Popover, SxProps, Theme } from "@mui/material";

// ----------------------------------------------------------------------

interface IMenuPopover {
  open: boolean;
  onClose: (e?: any) => void;
  children: ReactNode[] | ReactNode;
  sx?: SxProps<Theme>;
  anchorEl: Element;
}

export default function MenuPopover({
  open,
  onClose,
  children,
  sx,
  anchorEl,
  ...rest
}: IMenuPopover): ReactNode {
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      anchorEl={anchorEl}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: "inherit",
          width: 200,
          border: "none", 
          boxShadow: "0px 3px 8px 0px #1A1A1A26",
          ...sx,
        },
      }}
      {...rest}
    >
      {children}
    </Popover>
  );
}
