import { TextField } from "@mui/material";
import React from "react";

const TextComponent = ({ formik, element }) => {
  return (
    <TextField
      name={element.name}
      label={element.label}
      type={element.type}
      value={formik.values[element.name] || ""}
      onChange={formik.handleChange}
      color={
        formik.touched[element.name] && formik.errors[element.name]
          ? "error"
          : "primary"
      }
      required={element.required ? element.required : false}
      helperText={
        formik.touched[element.name] && formik.errors[element.name]
          ? formik.errors[element.name]
          : ""
      }
      autoComplete={element.name}
      fullWidth
      {...formik.getFieldProps(element.name)}
    />
  );
};

export default TextComponent;
