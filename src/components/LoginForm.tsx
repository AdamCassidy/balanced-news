import { Field, Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import React from "react";

interface Values {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const LoginForm: React.FC<Props> = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values: Values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
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
