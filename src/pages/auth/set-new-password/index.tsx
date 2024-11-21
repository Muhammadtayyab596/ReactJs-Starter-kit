import { Box, Button, Stack, Typography } from "@mui/material";
import { Logo, TextInput } from "../../../components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageContext,
  IMessageContext,
} from "../../../context/message-context";

const SetNewPassword = (): JSX.Element => {
  const { showSnackbar } = useContext(MessageContext) as IMessageContext;
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    showSnackbar(
      `Reset Password successfully`,
      "Your password has been reset. Login with your new password.",
      "success"
    );
    navigate("/login");
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
          <Box sx={{ mb: 2, display: { md: "none", sm: "block" } }}>
            <Logo size={120} />
          </Box>

          <Stack spacing={1.5}>
            <Box>
              <Typography
                fontSize={{ md: "32px", xs: "22px" }}
                fontWeight={600}
              >
                Reset Password
              </Typography>
              <Typography fontSize={14} color={"neutral.500"}>
                Create a new password for your account by filling out the form
                below
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
                  label="New Password"
                  type="password"
                  placeholder="Create new password"
                  color="success"
                  error={false}
                  helperText={""}
                  value={password}
                  handleChangeValue={(val: string) => setPassword(val)}
                />
              </Box>
              <Box>
                <TextInput
                  label="Confirm New Password"
                  type="password"
                  placeholder="Re-enter new password"
                  color="success"
                  error={false}
                  helperText={""}
                  value={confirmPassword}
                  handleChangeValue={(val: string) => setConfirmPassword(val)}
                />
              </Box>
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
            disabled={password === "" || confirmPassword === ""}
            type="submit"
            color="primary"
          >
            Change Password
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default SetNewPassword;
