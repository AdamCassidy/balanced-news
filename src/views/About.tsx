import React from "react";
import {
  Card,
  CardContent,
  createStyles,
  Grid,
  IconButton,
  Link,
  Theme,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

const About: React.FC = () => {
  const classes: ClassNameMap<
    "bold" | "facebook" | "reddit" | "twitter" | "whatsapp" | "marginBottom"
  > = useStyles();
  const shareItems: Array<{ icon: string; link: string; color?: string }> = [
    {
      icon: "email",
      link: "mailto:2ndopinionforum@gmail.com",
    },
    {
      icon: "mdi-facebook",
      link: "https://www.facebook.com/2ndOpinionForum/",
      color: "#3b5998",
    },
    {
      icon: "mdi-twitter",
      link:
        "https://twitter.com/intent/tweet?text=Check%20out%20this%20forum.&url=https%3a%2f%2fsecondopinionforum.com",
      color: "#00acee",
    },
    {
      icon: "mdi-reddit",
      link:
        "https://www.reddit.com/submit?title=Check%20out%20this%20forum.%20&url=https%3A%2F%2Fsecondopinionforum.com",
      color: "#FF4500",
    },
    {
      icon: "mdi-whatsapp",
      link:
        "https://wa.me/?text=Check%20out%20this%20forum.%20https%3A%2F%2Fsecondopinionforum.com",
      color: "#25d366",
    },
  ];

  return (
    <Grid container justify="center">
      <Card>
        <CardContent>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" className="title">
              About
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item className={classes.marginBottom}>
                <Typography variant="h5">FAQ</Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.marginBottom}>
              <Typography className={classes.bold}>
                How are the articles generated?
              </Typography>
              <Typography>
                Liu Bing, Hu Minqing and Cheng Junsheng compiled a list of
                positive and negative words through years of working on the data
                mining of opinions.
                <br /> Link:{" "}
                <Link
                  href="https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html"
                  color="inherit"
                >
                  https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.marginBottom}>
              <Typography className={classes.bold}>
                What news source is this coming from?
              </Typography>
              <Typography>
                It's coming from Google's "News Api". <br />
                Link:{" "}
                <Link
                  href="https://newsapi.org/s/google-news-api"
                  color="inherit"
                >
                  https://newsapi.org/s/google-news-api
                </Link>
              </Typography>
            </Grid>
            <Grid item className={classes.marginBottom}>
              <Typography className={classes.bold}>
                Why can't I set the slider to 0% or 100%?
              </Typography>
              <Typography>
                This was decided because "good" and "bad" is subjective, so news
                is always a mix of both.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.marginBottom}>
            <Typography variant="h5">Contact</Typography>
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default About;
