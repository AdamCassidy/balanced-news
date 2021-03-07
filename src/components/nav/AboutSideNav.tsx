import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { IconButton } from "@material-ui/core";
import { Grid, Link } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      zIndex: 1250,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    facebook: {
      color: "#3b5998",
    },
    twitter: {
      color: "#00acee",
    },
    reddit: {
      color: "#FF4500",
    },
    whatsapp: {
      color: "#25d366",
    },
  })
);

const AboutSideNav: () => JSX.Element = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />

        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">Contact</Typography>
            <Divider />

            <Link href="mailto:adamcassidy011@gmail.com">
              <IconButton color="inherit">Email</IconButton>
            </Link>
            <Link href="">
              <IconButton className={classes.facebook}>Facebook</IconButton>
            </Link>
            <Link href="">
              <IconButton className={classes.twitter}>Twitter</IconButton>
            </Link>
            <Link href="">
              <IconButton className={classes.reddit}>Reddit</IconButton>
            </Link>
            <Link href="">
              <IconButton className={classes.whatsapp}>WhatsApp</IconButton>
            </Link>
          </Grid>
        </Grid>
      </Drawer>
    </Grid>
  );
};

export default AboutSideNav;
