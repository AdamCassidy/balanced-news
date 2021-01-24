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
import { Grid, Modal } from "@material-ui/core";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingBottom: theme.spacing(3),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    titleFirst: {
      wordSpacing: "-0.1rem",
      textDecoration: "none",
      color: "green",
      textShadow:
        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    },
    titleMid: {
      wordSpacing: "-0.1rem",

      textDecoration: "none",
      color: "yellow",
      textShadow:
        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    },
    titleLast: {
      textDecoration: "none",
      color: "red",
      textShadow:
        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    },
    fullTitle: {
      textDecoration: "none",
      flexGrow: 1,
    },
    centerText: {
      textAlign: "center",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

function ButtonAppBar() {
  const classes = useStyles();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState<string | null>("");
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  const dispatchLogout = () => {
    try {
      setError(null);
      if (logout) logout();
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleOpen = (form: string) => {
    if (form === "signup") setSignupOpen(true);
    else if (form === "login") setLoginOpen(true);
  };

  const handleClose = (form: string) => {
    if (form === "signup") setSignupOpen(false);
    else if (form === "login") setLoginOpen(false);
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
                component={Link}
                to="/"
                className={classes.fullTitle}
              >
                <span className={classes.titleFirst}>Gimme </span>
                <span className={classes.titleMid}>the </span>
                <span className={classes.titleLast}>News</span>
              </Typography>

              {currentUser ? (
                <Button color="inherit" onClick={dispatchLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Button color="inherit" onClick={() => handleOpen("login")}>
                    Login
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.centerText}
                    onClick={() => handleOpen("signup")}
                  >
                    Sign up
                  </Button>
                </>
              )}
              <Modal
                open={signupOpen}
                className={classes.modal}
                onClose={() => handleClose("signup")}
              >
                {<Signup></Signup>}
              </Modal>
              <Modal
                open={loginOpen}
                className={classes.modal}
                onClose={() => handleClose("login")}
              >
                {<Login></Login>}
              </Modal>
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
