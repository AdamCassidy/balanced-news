import React from "react";
import SignupForm from "../components/SignupForm";

const onSubmit = () => {};

export const Signup = () => {
  return (
    <div>
      <SignupForm onSubmit={onSubmit}></SignupForm>
    </div>
  );
};
