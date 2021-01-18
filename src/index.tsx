import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "./contexts/AuthContext";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E3E36A",
    },
    secondary: {
      main: "#CBFF8C",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        width: "600px",
      },
    },
    MuiCard: {
      root: {
        paddingLeft: "1.2rem",
        paddingRight: "1.2rem",
      },
    },
    MuiSlider: {
      thumb: {
        color: "yellow",
      },
      track: {
        color: "green",
      },
      rail: {
        color: "red",
      },
    },
  },
});

// const render = (Component) => {
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
