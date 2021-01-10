import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { websiteTitle } from "../views/home/Home";
import { Router, Link, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/home/Home";

const history = createBrowserHistory();

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
          <Router history={history}>
            <Typography
              variant="h6"
              className={classes.title}
              component={Link}
              to="/"
            >
              {websiteTitle}
            </Typography>

            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign up
            </Button>
          </Router>
        </Toolbar>
      </AppBar>
    </div>
  );
}
