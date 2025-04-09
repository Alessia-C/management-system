import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#642D73",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    htmlFontSize: 16,
    h1: {
      fontSize: "3.815rem",
    },
    h2: {
      fontSize: "3.052rem",
    },
    h3: {
      fontSize: "2.441rem",
    },
    h4: {
      fontSize: "1.953rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: " 1.563rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.8rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.8em 1.5em",
          fontWeight: 600,
        },
      },
    },
  },
});
