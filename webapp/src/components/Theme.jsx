import { createTheme } from "@mui/material/styles"

export const DarkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#161A1D",
        },
      },
    },
  },
})
