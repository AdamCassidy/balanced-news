import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { websiteTitle } from "../views/home/Home";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

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
      textDecoration: "none",
      color: "black",
    },
    centerText: {
      textAlign: "center",
    },
  })
);

function ButtonAppBar() {
  const classes = useStyles();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState<string | null>("");

  const dispatchLogout = () => {
    try {
      setError(null);
      if (logout) logout();
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
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
              <Typography
                variant="h6"
                className={classes.title}
                component={Link}
                to="/"
              >
                {websiteTitle}
              </Typography>

              {!currentUser && (
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              )}
              {currentUser && (
                <Button color="inherit" onClick={dispatchLogout}>
                  Logout
                </Button>
              )}
              <Button
                color="inherit"
                className={classes.centerText}
                component={Link}
                to="/signup"
              >
                Sign up
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={7}>
          {error && (
            <Alert
              severity="error"
              onClose={() => {
                setError(null);
              }}
            >
              {error}
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default ButtonAppBar;
