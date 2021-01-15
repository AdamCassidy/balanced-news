import React from "react";
import SignupForm from "../../components/SignupForm";
import { Grid, Typography } from "@material-ui/core";
import "./Signup.css";

const onSubmit = ({ email, password }) => {
  console.log(email);
};

const Signup = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h3" align="center" className="title">
          Sign Up
        </Typography>
      </Grid>
      <Grid item>
        <SignupForm onSubmit={onSubmit}></SignupForm>
      </Grid>
    </Grid>
  );
};

export default Signup;
