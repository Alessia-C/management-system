import { TextField } from "@mui/material";
import React from "react";

const TextComponent = ({ formik, element }) => {
  const initialValue = formik.values[element.name] || ""; // Ensure a default value if undefined
  return (
    <TextField
      name={element.name}
      label={element.label}
      type={element.type}
      value={initialValue} // Ensure a default value here as well
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
