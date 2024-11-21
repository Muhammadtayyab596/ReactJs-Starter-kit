import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { UserContext, IUserContext } from "../../context/user-context";

interface Props {
  children?: ReactNode;
  protection?: string[] | undefined;
}
const Protection = ({ children, protection }: Props): ReactNode => {
  const {
    data: { user },
  } = useContext(UserContext) as IUserContext;
  if (!protection?.includes(user?.userRole || "")) {
    return (
      <Stack
        alignItems="center"
        sx={{
          p: 5,
          borderRadius: 1,
          background: (theme) => theme.palette.grey[200],
        }}
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        <LockIcon
          fontSize="large"
          sx={{ color: (theme) => theme.palette.secondary.main }}
        />
        <Typography variant="h5" color="primary.main">
          Permission Denied!
        </Typography>
        <Typography variant="body1">
          {`${"You're not authorised to access this page!"}`}
        </Typography>
      </Stack>
    );
  }
  return <>{children}</>;
};

export default Protection;
