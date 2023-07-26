import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  typography: {
    fontFamily: "Manrope,sans-serif",
  },
  palette: {
    primary: {
      main: "#56ccf2",
      light: "#56ccf280",
    },
    secondary: {
      main: "#0c2335",
      light: "#054d85",
    },
    error: {
      main: "#e21d00",
    },
  },
});
