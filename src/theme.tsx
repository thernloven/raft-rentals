import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#F8F9FA",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // List Item Component
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans, sans-serif",
          color: "#2D3748",
          fontWeight: 600,
          fontSize: 15,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          ":hover": {
            backgroundColor: "white",
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          },
        },
      },
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
});

export default theme;
