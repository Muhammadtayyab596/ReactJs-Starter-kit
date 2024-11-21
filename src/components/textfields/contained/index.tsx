import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
import EyeOffIcon from "../../../assets/images/eye-off.png";

type SInputProps = {
  handleChangeValue: (val: string) => void;
  value: string | number | null;
  type?: string;
  Addborder?:boolean;
  required?: boolean;
} & TextFieldProps;

export default function ContainedTextInput(props: SInputProps): ReactNode {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { handleChangeValue, value, type, required,Addborder, ...rest } = props;

  return (
    <>
      {type === "password" && (
        <TextField
          {...rest}
          type={showPassword ? "text" : "password"}
          fullWidth
          value={value}
          required={required}
          onChange={(e) => handleChangeValue(e.target.value)}
          sx={{
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              background: "#F9F9F9",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  <img src={EyeOffIcon} alt="" width="20px" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      {type !== "password" && (
        <TextField
          {...rest}
          type={type || "text"}
          fullWidth
          value={value}
          required={required}
          onChange={(e) => handleChangeValue(e.target.value)}
          sx={{
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              background: Addborder ? "#FFFFFF":"#F9F9F9",
              border:Addborder ? '1px solid #D4D4DA' : 'none',
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
      )}
    </>
  );
}
