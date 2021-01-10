import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import React from "react";
import BasicField from "./BasicField";

interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}
const SignupForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => {
        <Form>
          <div>
            <Field
              type="input"
              name="name"
              placeholder="Name"
              component={BasicField}
              as={TextField}
            />
          </div>
          <div>
            <Field
              type="input"
              name="email"
              placeholder="Email"
              component={BasicField}
              as={TextField}
            />
          </div>
          <div>
            <Field
              type="input"
              name="password"
              placeholder="Password"
              component={BasicField}
              as={TextField}
            />
          </div>
          <div>
            <Field
              type="input"
              name="confirmPassword"
              placeholder="Confirm Password"
              component={BasicField}
              as={TextField}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>;
      }}
    </Formik>
  );
};

export default SignupForm;
