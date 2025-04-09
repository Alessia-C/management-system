import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../../../store/formSlice";

const TextComponent = React.memo(({ formik, element }) => {
  const dispatch = useDispatch();

  return (
    <TextField
    {...formik.getFieldProps(element.name)}
    name={element.name}
    label={element.label}
    type={element.type}
    color={formik.touched[element.name] && formik.errors[element.name] ? 'error' : 'primary'}
    required={Boolean(element.required)} 
    helperText={formik.touched[element.name] && formik.errors[element.name] ? formik.errors[element.name] : ''}
    autoComplete={element.name}
    fullWidth
    onChange={(e) => {
      formik.handleChange(e);
      dispatch(updateForm({ name: element.name, value: e.target.value })); 
    }}
    />
  );
});

export default TextComponent;
