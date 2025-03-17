import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CustomButton, Logo, TextInput } from "../../../components";
import {
  IMessageContext,
  MessageContext,
} from "../../../context/message-context";
import { IUserContext, UserContext } from "../../../context/user-context";
import { AppDispatch } from "../../../store";
import { loginUser } from "../../../store/slice/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const defaultValues = {
  password: "",
  email: "",
};

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
});

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { setUserData } = useContext(UserContext) as IUserContext;
  const { showSnackbar } = useContext(MessageContext) as IMessageContext;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    console.log(data);
    // setUserData({
    //   _id: `1`,
    //   name: "Admin",
    //   email: "admin@abc.com",
    //   userRole: "admin",
    //   isActive: true,
    //   profilePicURL: "",
    // });
    try {
      const response = await dispatch(loginUser({ ...data }));
      if (response.payload.success) {
        setUserData({ ...response.payload.data });
        showSnackbar(`Welcome!`, "You are now logged in.", "success");
        localStorage.setItem("token", response.payload.token);
      }
    } catch (err) {
      showSnackbar(`Error!`, "Invalid credentials.", "error");
    }
  };

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Box sx={{ width: { xs: "95%", sm: "70%" }, p: { xs: 2, md: 0 } }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1.5}>
            <Box sx={{ mb: 2, display: { md: "none", sm: "block" } }}>
              <Logo size={120} />
            </Box>
            <Box >
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
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      label="Email"
                      type="email"
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder="Enter your email address"
                      {...(errors.email && {
                        helperText: errors.email.message,
                      })}
                    />
                  )}
                />
              </Box>

              <Box>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      label="Password"
                      type="password"
                      value={value}
                      onChange={onChange}
                      placeholder="Enter your password"
                      error={Boolean(errors.password)}
                      {...(errors.password && {
                        helperText: errors.password.message,
                      })}
                    />
                  )}
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
          <CustomButton
            type="submit"
            sx={{ py: 2, fontSize: "16px" }}
            label={"Login"}
          />
        </form>
      </Box>
    </Stack>
  );
};

export default Login;
