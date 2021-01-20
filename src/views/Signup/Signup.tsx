import React from "react";
import SignupForm from "../../components/SignupForm";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <Grid container justify="center">
      <Card>
        <CardContent>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" className="title">
              Sign Up
            </Typography>
          </Grid>
          <Grid item>
            <SignupForm></SignupForm>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" className="signup-contingency-link">
              Need to log in? <Link to="/login"> Log In</Link>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Signup;
