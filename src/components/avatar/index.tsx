import { Avatar as MuiAvatar } from "@mui/material";

interface Props {
  url?: string;
  width: number;
  height: number;
}
const Avatar = ({ url, width, height }: Props): ReactNode => {
  return (
    <MuiAvatar
      sx={{
        height: width,
        width: height,
      }}
      src={url}
    />
  );
};

export default Avatar;
