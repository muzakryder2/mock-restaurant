import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import App from "./App";

import "./index.css";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#5d4037",
    },
    secondary: {
      main: "#8bc34a",
    },
    text: {
      primary: "rgba(80,72,72,0.87)",
      secondary: "rgba(181,117,45,0.54)",
    },
    info: {
      main: "#3f51b5",
    },
    success: {
      main: "#2da632",
    },
  },
  typography: {
    fontFamily: ["Acme", "Arial", "sans-serif"].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
