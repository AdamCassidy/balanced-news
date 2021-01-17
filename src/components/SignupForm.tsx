import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { TextField } from "formik-material-ui";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const SignupForm: React.FC<Props> = () => {
  const { signup } = useAuth();
  const [error, setError] = useState<string | null>(null);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors: { email: string; confirmPassword: string } = {
          email: "",
          confirmPassword: "",
        };

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (values.password !== values.confirmPassword)
          errors.confirmPassword = "Passwords do not match";

        return errors;
      }}
      onSubmit={async (values: Values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          setError("");
          if (signup) await signup(values.email, values.password);
        } catch (err) {
          setError(err);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {error && <Alert severity="error">{error}</Alert>}
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
