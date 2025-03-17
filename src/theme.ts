import { createTheme } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
        },
        contained: {
          boxShadow: "none",
        },
        outlined: {
          border: "1px solid #E6E7E7",
          boxShadow: "unset",
          borderRadius: "32px",
          padding: "3px 20px",
          width: "fit-content",
          backgroundColor: "transparent",
          borderColor: "unset",
        },
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
        outlinedPrimary: {
          borderColor: "#111827",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#8D8D8D",
          "&.Mui-selected": {
            color: "#5263FF",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#ADAFB9",
            letterSpacing: "-1%",
            fontSize: "14px",
            fontWeight: 400,
            opacity: 1,
          },
        },
        root: {
          fontSize: "14px",
          fontWeight: 500,
          color: "#111827",
          lineHeight: "160%",
          // boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        },
        notchedOutline: {
          borderColor: "#E9EAEC",
          borderRadius: "10px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            border: "1px solid #e6e6e9",
            borderTop: 0,
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 500,
            color: "#116B6F",
            backgroundColor: "#CEDBDB",
            height: "33px",
            padding: "5px 12px",
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root": {
            "&:nth-of-type(even)": {
              backgroundColor: "#f7f7f8",
            },
          },
          "& .MuiTableCell-root": {
            color: "#030712",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "-1%",
            padding: "17px ",
            border: "1px solid #e6e6e9",
          },
          "& .MuiTableRow-root .MuiTableCell-root:first-of-type": {
            borderLeft: 0,
          },
          "& .MuiTableRow-root .MuiTableCell-root:last-of-type": {
            borderRight: 0,
          },
          "& .MuiTableRow-root:last-of-type .MuiTableCell-root": {
            borderBottom: 0,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {},
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#111827",
          fontSize: 20,
          marginRight: "8px",
        },
      },
      defaultProps: {
        IconComponent: FiChevronDown,
      },
    },
  },

  palette: {
    neutral: {
      50: "#f7f7f8",
      100: "#e6e6e9",
      200: "#d4d4da",
      300: "#bfc0c8",
      400: "#adafb9",
      500: "#8E9494",
      600: "#66687c",
      700: "#40435b",
      800: "#333650",
      900: "#1a1d3a",
    },
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "#34A6B1",
      disabledBackground: "#F1F2F4",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    divider: "#e6e6e9",
    primary: {
      main: "#7BBBA3",
      light: "#6fa893",
      dark: "#6fa893",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
      light: "#1a1a1a",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#27BE69",
      light: "#45D985",
      dark: "#1F9854",
      contrastText: "#000000",
    },
    info: {
      main: "#51C0FF",
      light: "#75CDFF",
      dark: "#0FA8FF",
      contrastText: "#000000",
    },
    warning: {
      main: "#FFBF0F",
      light: "#FFCB3D",
      dark: "#D69D00",
      contrastText: "#000000",
    },
    error: {
      main: "#EA4334",
      light: "#EE695D",
      dark: "#D02516",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#8E8F96",
      disabled: "#899DB7",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  typography: {
    button: {
      fontWeight: 400,
    },
    fontFamily: `"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
			 Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      color: "#2E2C34",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: "130%",
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: "130%",
    },
    h3: {
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: "38px",
    },
    h4: {
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: "130%",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "130%",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "130%",
    },
  },
});
