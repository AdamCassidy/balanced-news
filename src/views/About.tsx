import React from "react";
import { createStyles, Grid, Link, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import AboutSideNav from "../components/nav/AboutSideNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingBottom: "8px",
    },
    bold: {
      fontWeight: "bold",
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
    marginBottom: {
      marginBottom: "2rem",
    },
    aboutContent: {
      paddingLeft: "6rem",
      paddingRight: "6rem",
    },
  })
);

const About: React.FC = () => {
  const classes: ClassNameMap<
    | "title"
    | "bold"
    | "facebook"
    | "reddit"
    | "twitter"
    | "whatsapp"
    | "marginBottom"
    | "aboutContent"
  > = useStyles();

  return (
    <Grid container>
      <Grid item xs={10}>
        <Grid container justify="center" className={classes.aboutContent}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              align="center"
              className={classes.title + " title"}
            >
              About
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item className={classes.marginBottom} xs={12}>
                <Typography variant="h5">FAQ</Typography>
              </Grid>
              <Grid item className={classes.marginBottom} xs={12}>
                <Typography className={classes.bold}>
                  How are the articles generated?
                </Typography>
                <Typography>
                  Liu Bing, Hu Minqing and Cheng Junsheng compiled a list of
                  positive and negative words through years of working on the
                  data mining of opinions.
                  <br /> Link:{" "}
                  <Link
                    href="https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html"
                    color="inherit"
                  >
                    https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html
                  </Link>
                </Typography>
              </Grid>
              <Grid item className={classes.marginBottom} xs={12}>
                <Typography className={classes.bold}>
                  What news source is this coming from?
                </Typography>
                <Typography>
                  Google's "News Api". <br />
                  Link:{" "}
                  <Link
                    href="https://newsapi.org/s/google-news-api"
                    color="inherit"
                  >
                    https://newsapi.org/s/google-news-api
                  </Link>
                </Typography>
              </Grid>
              <Grid item className={classes.marginBottom} xs={12}>
                <Typography className={classes.bold}>
                  Why can't I set the slider to 0% or 100%?
                </Typography>
                <Typography>
                  This was decided because "good" and "bad" is relative, so news
                  is always a mix of both.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.marginBottom}>
            <Typography variant="h5">Citations</Typography>
            <Typography>
              Minqing Hu and Bing Liu. "Mining and Summarizing Customer
              Reviews." ; Proceedings of the ACM SIGKDD International Conference
              on Knowledge ; Discovery and Data Mining (KDD-2004), Aug 22-25,
              2004, Seattle, ; Washington, USA, <br />
              Bing Liu, Minqing Hu and Junsheng Cheng. "Opinion Observer:
              Analyzing ; and Comparing Opinions on the Web." Proceedings of the
              14th ; International World Wide Web conference (WWW-2005), May
              10-14, ; 2005, Chiba, Japan.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <AboutSideNav></AboutSideNav>
      </Grid>
    </Grid>
  );
};

export default About;
