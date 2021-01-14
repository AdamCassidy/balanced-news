import { Field, Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import React from "react";

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
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
              type="input"
              name="name"
              placeholder="Name"
              variant="outlined"
              component={TextField}
            />
          </div>
          <div>
            <Field
              type="input"
              name="email"
              placeholder="Email"
              variant="outlined"
              component={TextField}
            />
          </div>
          <div>
            <Field
              type="input"
              name="password"
              placeholder="Password"
              variant="outlined"
              component={TextField}
            />
          </div>
          <div>
            <Field
              type="input"
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
