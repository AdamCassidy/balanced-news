import { Grid } from "@material-ui/core";
import React from "react";
import LoginForm from "../components/LoginForm";

const onSubmit = ({ email, password }) => {
  console.log(email);
};

const Login = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <LoginForm onSubmit={onSubmit}></LoginForm>
      </Grid>
    </Grid>
  );
};

export default Login;
