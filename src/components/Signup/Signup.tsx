import React from "react";
import SignupForm from "./SignupForm";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import "./Signup.scss";

const Signup: React.FC = () => {
  return (
    <Card className="signup-card">
      <CardContent>
        <Grid item>
          <Typography variant="h3" align="center" className="signup-title">
            Sign Up
          </Typography>
        </Grid>
        <Grid item>
          <SignupForm></SignupForm>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Signup;
