import { Paper, Box, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo } from "../../components";

const AuthLayout = (): JSX.Element => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={0}
        sm={0}
        md={6}
        sx={{ display: { md: "block", xs: "none" } }}
      >
        <Box
          sx={{
            background: (theme) => theme.palette.secondary.main,
            borderTop: (theme) => `5px solid ${theme.palette.primary.main}`,
            pt: 5,
            pb: 6,
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ px: 5 }}>
            <Logo size={200} />
            <Typography
              variant="h2"
              color="neutral.100"
              sx={{
                mt: 2,
                lineHeight: "120%",
                letterSpacing: "-0.5px",
              }}
            >
              Welcome to IiFYM
            </Typography>
            <Typography variant="subtitle1" color="neutral.100" sx={{ mt: 2 }}>
              This is a secure system. Let's Start!
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} component={Paper}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
