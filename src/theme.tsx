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
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans, sans-serif",
          borderColor: "#E9ECEF",
          backgroundColor: "#FFFFFF",
          fontWeight: 600,
          fontSize: 12,
          "&.Mui-selected": {
            color: "white",
            background: "linear-gradient(45deg, #01A8E6 0%, #070077 100%)", // Custom background
          },
          "&.MuiPaginationItem-previousNext": {
            color: "#8392AB",
            borderColor: "#8392AB",
            backgroundColor: "#FFFFFF",
          },
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
