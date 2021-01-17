import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import "./Login.css";

const onSubmit = ({ email, password }) => {
  console.log(email);
};

const Login = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h3" className="title">
          Login
        </Typography>
      </Grid>
      <Grid item>
        <LoginForm onSubmit={onSubmit}></LoginForm>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" className="login-contingency-link">
          Need to sign up? <Link to="/signup"> Sign Up</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
