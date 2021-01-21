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
  })
);

interface Values {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const classes: ClassNameMap<"alert"> = useStyles();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const userSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={async (values: Values, { setSubmitting }) => {
        console.log("Initialized submit");
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
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
