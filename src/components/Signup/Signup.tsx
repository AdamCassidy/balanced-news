import React from "react";
import SignupForm from "./SignupForm";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Grid item>
          <Typography variant="h3" align="center" className="signup-title">
            Sign Up
          </Typography>
        </Grid>
        <Grid item>
          <SignupForm></SignupForm>
        </Grid>
        <Grid item>
          <Typography align="center" className="signup-contingency-link">
            Need to log in? <Link to="/login"> Log In</Link>
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Signup;
