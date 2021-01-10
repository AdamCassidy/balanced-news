import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { createBrowserHistory } from "history";
import Nav from "./components/Nav";
import { createMuiTheme, Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

const history = createBrowserHistory();

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Nav></Nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
