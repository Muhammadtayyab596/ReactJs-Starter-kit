import { TextField, TextFieldProps, Typography } from "@mui/material";

type TInputProps = {
  label?: string;
  required?: boolean;
  type: string;
  value: string | number | null;
} & TextFieldProps;

export default function TextInput(props: TInputProps): ReactNode {
  const { label, type, required, InputLabelProps, ...rest } = props;

  return (
    <>
      {label && (
        <Typography
          sx={{ mb:1, display: "flex", alignItems: "center", gap: 0.5 }}
          fontSize={14}
          variant="caption"
        >
          {label} {required && <Typography color={"error"}>*</Typography>}
        </Typography>
      )}
      <TextField
        {...rest}
        type={type}
        fullWidth
        InputLabelProps={InputLabelProps}
      />
    </>
  );
}
