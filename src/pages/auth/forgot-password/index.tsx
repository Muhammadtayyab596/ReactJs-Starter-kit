import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { Logo, TextInput } from "../../../components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageContext,
  IMessageContext,
} from "../../../context/message-context";

const ForgotPassword = (): JSX.Element => {
  const { showSnackbar } = useContext(MessageContext) as IMessageContext;
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    showSnackbar(
      `Reset Instruction sent to your email!`,
      "We’ve sent you a link where you can change your password.",
      "info"
    );
    setEmail("");
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
            <Button
              variant="outlined"
              fullWidth
              sx={{
                mt: 2,
                py: 1,
                fontSize: "13px",
                fontWeight: 500,
                color: "#000000",
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
              }}
              color="secondary"
              onClick={() => navigate(-1)}
              startIcon={<KeyboardBackspace />}
            >
              Go Back
            </Button>
            <Box>
              <Typography
                fontSize={{ md: "32px", xs: "22px" }}
                fontWeight={600}
              >
                Forgot your password?
              </Typography>
              <Typography fontSize={14} color={"neutral.500"}>
                Enter your email address below and we'll send you password reset
                instructions.
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
            disabled={email === ""}
            type="submit"
            color="primary"
          >
            Send Reset Instructions
          </Button>
          <Divider sx={{ my: 4 }} />
          <Typography fontSize={14} color={"neutral.500"}>
            If you don't see your reset email be sure to check your spam filter
            for an email from{" "}
            <Box
              component={"strong"}
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              support@lifym.com
            </Box>
          </Typography>
        </form>
      </Box>
    </Stack>
  );
};

export default ForgotPassword;
