import { Box, Button, Stack, Typography } from "@mui/material";
import { Logo, TextInput } from "../../../components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, IUserContext } from "../../../context/user-context";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext) as IUserContext;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setUserData({
      _id: `1`,
      name: "Admin",
      email: "admin@abc.com",
      userRole: "admin",
      isActive: true,
      profilePicURL: "",
    });
  };

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Box sx={{ width: { xs: "95%", sm: "70%" }, p: { xs: 2, md: 0 } }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={1.5}>
            <Box sx={{ mb: 2, display: { md: "none", sm: "block" } }}>
              <Logo size={120} />
            </Box>
            <Box>
              <Typography
                fontSize={{ md: "32px", xs: "22px" }}
                fontWeight={600}
              >
                Sign-in
              </Typography>
              <Typography fontSize={14} color={"neutral.500"}>
                Please enter your login information to get in.
              </Typography>
            </Box>
            <Box
              sx={{
                width: 100,
                height: 5,
                background: (theme) => theme.palette.primary.main,
                borderRadius: 10,
              }}
            />
          </Stack>
          <Box sx={{ my: 2 }}>
            <Stack spacing={2}>
              <Box>
                <TextInput
                  label="Email"
                  type="email"
                  placeholder="hi@example.com"
                  color="success"
                  error={false}
                  helperText={""}
                  value={email}
                  handleChangeValue={(val: string) => setEmail(val)}
                />
              </Box>
              <Box>
                <TextInput
                  label="Password"
                  placeholder="*************"
                  color="success"
                  type={"password"}
                  error={false}
                  helperText={""}
                  value={password}
                  handleChangeValue={(val: string) => setPassword(val)}
                />
              </Box>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                mt={3}
              >
                <Typography
                  variant="subtitle2"
                  fontSize={14}
                  color="primary"
                  sx={{ cursor: "pointer", fontWeight: 500 }}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: "16px",
              fontWeight: 500,
            }}
            disabled={email === "" || password === ""}
            type="submit"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default Login;
