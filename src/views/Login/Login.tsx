import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <Grid container justify="center">
      <Card>
        <CardContent>
          <Grid item xs={12}>
            <Typography align="center" variant="h3" className="title">
              Login
            </Typography>
          </Grid>
          <Grid item>
            <LoginForm></LoginForm>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" className="login-contingency-link">
              Need to sign up? <Link to="/signup"> Sign Up</Link>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
