import { Field, Form, Formik } from "formik";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { TextField } from "formik-material-ui";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const useStyles: (props?: any) => ClassNameMap<"alert"> = makeStyles({
  alert: {
    maxWidth: "243px",
  },
});
interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const { signup } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();
  const classes = useStyles();

  const lowercaseRegex: RegExp = /(?=.*[a-z])/;
  const uppercaseRegex: RegExp = /(?=.*[A-Z])/;
  const numberRegex: RegExp = /(?=.*[0-9])/;

  const userSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6)
      .matches(lowercaseRegex, "at least one lowercase required")
      .matches(uppercaseRegex, "at least one uppercase required")
      .matches(numberRegex, "at least one number required")
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must be the same")
      .required(),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={userSchema}
      onSubmit={async (values: Values, { setSubmitting }) => {
        console.log("Initialized submit");
        setSubmitting(true);
        try {
          setError(null);
          if (signup) await signup(values.email, values.password);
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
          <div>
            <Field
              type="input"
              name="name"
              placeholder="Name"
              variant="outlined"
              component={TextField}
            />
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

          <div>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
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

export default SignupForm;
