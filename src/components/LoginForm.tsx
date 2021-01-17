import { Field, Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

interface Values {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const LoginForm: React.FC<Props> = () => {
  const { login } = useAuth();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values: Values, { setSubmitting }) => {
        setSubmitting(true);
        try {
<<<<<<< HEAD
          if (login) await login(values.email, values.password);
=======
          if (login) login(values.email, values.password);
>>>>>>> 42060bbced5ea0c47d298854ef75a56fb4646a73
        } catch (err) {
          console.log(err);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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
