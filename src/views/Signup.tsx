import React from "react";
import SignupForm from "../components/SignupForm";
import { Grid } from "@material-ui/core";

const onSubmit = ({ email, password }) => {
  console.log(email);
};

const Signup = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <SignupForm onSubmit={onSubmit}></SignupForm>
      </Grid>
    </Grid>
  );
};

export default Signup;
