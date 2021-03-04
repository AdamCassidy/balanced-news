import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Suspense, useEffect, useState } from "react";
import { Alert } from "@material-ui/lab";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Search from "./Search";
import AboutSideNav from "./AboutSideNav";

const Signup = React.lazy(() => import("../signup/Signup"));
const Login = React.lazy(() => import("../login/Login"));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
      paddingBottom: theme.spacing(3),
      zIndex: 1251,
      position: "relative",
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
    spacer: {
      flexGrow: 1,
    },
    fullTitle: {
      textDecoration: "none",
    },
    centerText: {
      textAlign: "center",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Nav: (props: Props) => JSX.Element = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser) {
      handleCloseForm("signup");
      handleCloseForm("login");
    }
  }, [currentUser]);

  const dispatchLogout = () => {
    try {
      setError(null);
      if (logout) logout();
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleOpenForm = (form: string) => {
    if (form === "signup") setSignupOpen(true);
    else if (form === "login") setLoginOpen(true);
  };

  const handleCloseForm = (form: string) => {
    if (form === "signup") setSignupOpen(false);
    else if (form === "login") setLoginOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["About"].map((text, index) => (
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            onClick={handleDrawerToggle}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                disableFocusRipple
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Grid className={classes.spacer}>
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
              </Grid>

              <Search></Search>

              {currentUser ? (
                <Button color="inherit" onClick={dispatchLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    color="inherit"
                    disableFocusRipple
                    onClick={() => handleOpenForm("login")}
                  >
                    Login
                  </Button>
                  <Button
                    color="inherit"
                    disableFocusRipple
                    className={classes.centerText}
                    onClick={() => handleOpenForm("signup")}
                  >
                    Sign up
                  </Button>
                </>
              )}
              <Modal
                open={signupOpen}
                className={classes.modal}
                onClose={() => handleCloseForm("signup")}
              >
                {
                  <span>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Signup></Signup>
                    </Suspense>
                  </span>
                }
              </Modal>
              <Modal
                open={loginOpen}
                className={classes.modal}
                onClose={() => handleCloseForm("login")}
              >
                {
                  <span>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Login></Login>
                    </Suspense>
                  </span>
                }
              </Modal>
            </Toolbar>
          </AppBar>
        </Grid>

        <nav className={classes.drawer}>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </nav>
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
};

export default Nav;
