import { Button, ButtonProps } from "@mui/material";

const ContainedButton = (
  props: {
    title: string;
    size?: string;
    variant?: string;
  } & ButtonProps
) => {
  return (
    <Button
      {...props}
      variant={props.variant || "contained"}
      fullWidth
      sx={{
        fontSize: props.size === "large" ? "16px" : "14px",
        fontWeight: props.size === "large" ? 500 : 400,
        width: "190px",
        boxShadow:
          props.variant === "text" ? "none" : "0px 3px 8px 0px #1A1A1A26",
        border: props.variant === "text" ? "1px solid #E6E6E9" : "none",
        ...props.sx,
      }}
    >
      {props.title}
    </Button>
  );
};

export default ContainedButton;
