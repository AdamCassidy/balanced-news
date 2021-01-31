import { Field, Form, Formik } from "formik";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { TextField } from "formik-material-ui";
import { useAuth } from "../../contexts/AuthContext";
import * as yup from "yup";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      maxWidth: "243px",
    },
    googleLoginBtn: {
      marginTop: "0.7rem",
    },
  })
);

interface Values {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const classes: ClassNameMap<"alert" | "googleLoginBtn"> = useStyles();
  const { login, googleLogin } = useAuth();
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const userSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      if (googleLogin) await googleLogin();
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={async (values: Values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          setError(null);
          if (login) await login(values.email, values.password);
          history.push("/");
        } catch (err) {
          console.log(err);
          setError(err.message);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            {error && (
              <Alert
                severity="error"
                className={classes.alert}
                onClose={() => {
                  setError(null);
                }}
              >
                {error}
              </Alert>
            )}
          </div>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              variant="outlined"
              component={TextField}
            />
          </div>
          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              variant="outlined"
              component={TextField}
            />
          </div>
          <Button type="submit" variant="outlined" disabled={isSubmitting}>
            Submit
          </Button>
          <Button type="reset" variant="outlined" disabled={isSubmitting}>
            Reset
          </Button>
          <div>
            <Button
              variant="contained"
              onClick={handleGoogleLogin}
              disabled={isSubmitting}
              className={classes.googleLoginBtn}
              color="primary"
            >
              Log in with Google
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
