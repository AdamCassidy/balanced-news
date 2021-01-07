import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { websiteTitle } from "./App";
import { Link, Router } from "react-router-dom";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingBottom: theme.spacing(3),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      wordSpacing: 0,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {websiteTitle}
          </Typography>
          {/* <Router>
            <div>
              <Button
                color="inherit"
                component={<Link component={Login} />}
                {...({ to: "/login" } as any)}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={<Link component={Signup} />}
                {...({ to: "/signup" } as any)}
              >
                Sign up
              </Button>
            </div>
          </Router> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
