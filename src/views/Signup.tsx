import React from "react";
import SignupForm from "../components/SignupForm";

const onSubmit = () => {};

const Signup = () => {
  return (
    <div>
      <SignupForm onSubmit={onSubmit}></SignupForm>
    </div>
  );
};

export default Signup;
