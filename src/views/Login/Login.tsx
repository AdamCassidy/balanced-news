import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Grid item>
          <Typography align="center" variant="h3" className="login-title">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <LoginForm></LoginForm>
        </Grid>
        <Grid item>
          <Typography align="center" className="login-contingency-link">
            Need to sign up? <Link to="/signup"> Sign Up</Link>
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Login;
