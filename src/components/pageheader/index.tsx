import { Stack, Typography } from "@mui/material";

const PageHeader = ({
  title,
  rightNode,
}: {
  title: string | JSX.Element;
  rightNode?: JSX.Element;
}) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={2}
      sx={{
        mb: { xs: 2, lg: 3 },
      }}
    >
      <Typography fontWeight={700} variant="h5" flex={1}>
        {title}
      </Typography>

      {rightNode}
    </Stack>
  );
};

export default PageHeader;
