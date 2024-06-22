import { TextField } from "@mui/material";
import React from "react";

const TextComponent = ({ formik, element }) => {
  return (
    <TextField
      label={element.label}
      type={element.type}
      color={
        formik.touched[element] || formik.errors[element] ? "error" : "primary"
      }
      required={element.required ? element.required : false}
      helperText={formik.touched[element] ? formik.errors[element] : ""}
      autoComplete={element.value}
      {...formik.getFieldProps(element.value)}
    />
  );
};

export default TextComponent;
