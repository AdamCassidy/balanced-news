import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Grid, Link } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      zIndex: 1250,
    },
    center: {
      display: "flex",
      justifyContent: "center",
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
    email: {
      color: "black",
      margin: "4px",
    },
    facebook: {
      color: "#3b5998",
      margin: "4px",
    },
    twitter: {
      color: "#00acee",
      margin: "4px",
    },
    reddit: {
      color: "#FF4500",
      margin: "4px",
    },
    whatsapp: {
      color: "#25d366",
      margin: "4px",
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

        <Grid container className={classes.center}>
          <Grid item xs={12} className={classes.center}>
            <Typography variant="h5">Contact</Typography>
          </Grid>
          <Grid item xs={12} className={classes.center}>
            <Link href="mailto:adamcassidy011@gmail.com">
              <EmailIcon className={classes.email} />
            </Link>
            <Link href="">
              <FacebookIcon className={classes.facebook} />
            </Link>
            <Link href="">
              <TwitterIcon className={classes.twitter} />
            </Link>
            <Link href="">
              <RedditIcon className={classes.reddit} />
            </Link>
            <Link href="">
              <WhatsAppIcon className={classes.whatsapp} />
            </Link>
          </Grid>
        </Grid>
      </Drawer>
    </Grid>
  );
};

export default AboutSideNav;
