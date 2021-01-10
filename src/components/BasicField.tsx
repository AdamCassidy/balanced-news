import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React from "react";

interface Props extends FieldProps {
  placeholder: string;
}

const BasicField: React.FC<Props> = ({ placeholder, field }) => {
  return <TextField placeholder={placeholder} label="filled" {...field} />;
};

export default BasicField;
