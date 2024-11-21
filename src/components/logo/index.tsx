import { Box, useMediaQuery, useTheme } from "@mui/material";
import logoFull from "../../assets/images/logo-full.png";

const Logo = ({
  size,
  full,
}: {
  size?: number;
  full?: boolean;
}): JSX.Element => {
  const theme = useTheme();
  const { breakpoints } = theme;
  const IsMdUp = useMediaQuery(breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex" }}>
      {full && IsMdUp ? (
        <img src={logoFull} width={size || 100} />
      ) : (
        <img src={logoFull} width={size || 40} />
      )}
    </Box>
  );
};

export default Logo;
