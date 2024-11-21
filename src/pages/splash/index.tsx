import { Box, CircularProgress, Stack } from "@mui/material";
import { Logo } from "../../components";

const Splash = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        background: (theme) => theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Logo size={120} />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          mt={3}
        >
          <CircularProgress color="primary" size={30} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Splash;
