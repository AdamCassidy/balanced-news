import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import LoginForm from "./LoginForm";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <Card className="login-card">
      <CardContent>
        <Grid item>
          <Typography align="center" variant="h3" className="login-title">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <LoginForm></LoginForm>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Login;
