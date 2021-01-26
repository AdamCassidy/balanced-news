import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

const About: React.FC = () => {
  return (
    <Grid container justify="center">
      <Card>
        <CardContent>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" className="title">
              About
            </Typography>
          </Grid>
          <Grid item></Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default About;
