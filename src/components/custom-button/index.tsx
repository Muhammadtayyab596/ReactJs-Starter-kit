import React from "react";
import { Button, CircularProgress } from "@mui/material";
import Icon from "../../components/icon";
import { Box } from "@mui/system";

interface CustomButtonProps {
  isLoading?: boolean;
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  sx?: object;
  type?: "submit" | "button";
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  icon?: string;
  iconFontSize?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  isLoading,
  onClick,
  label,
  disabled = false,
  sx = {},
  type = "button",
  variant = "contained",
  color = "primary",
  icon,
  iconFontSize = "18px",
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{ width: "100%", ...sx }}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? (
        <CircularProgress
          sx={{ width: "16px !important", height: "16px !important" }}
        />
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {icon && <Icon icon={icon} fontSize={iconFontSize} />}
          <span>{label}</span>
        </Box>
      )}
    </Button>
  );
};

export default CustomButton;
