import { TextField } from "@mui/material";
import React from "react";

const TextComponent = ({ formik, element, onChange }) => {
  return (
    <TextField
      name={element.name}
      label={element.label}
      type={element.type}
      value={formik.values[element.name] || ''}
      onChange={formik.handleChange}
      color={
        formik.touched[element] || formik.errors[element] ? "error" : "primary"
      }
      required={element.required ? element.required : false}
      helperText={formik.touched[element] ? formik.errors[element] : ""}
      autoComplete={element.value}
      fullWidth
      {...formik.getFieldProps(element.value)}
    />
  );
};

// fullWidth
//               name={field.name}
//               label={field.label}
//               value={formik.values[field.name]}
//               onChange={handleChange}
//               color={formik.touched[field.name] && formik.errors[field.name] ? "error" : "primary"}
//               required={field.required || false}
//               helperText={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : ""}
//               autoComplete={field.value}
//               {...formik.getFieldProps(field.name)}
export default TextComponent;
