import React, { Fragment } from "react";
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../store/formSlice";
import classes from "./FormComponent/Form.module.css";
import { renderInput } from "../utils/FormInput";

const ReusableForm = ({
  fields,
  labelCta = "Salva",
  style = "genericForm",
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const initialValues = fields.reduce((acc, field) => {
    if (field.type === "array") {
      acc[field.name] = formData[field.name] || [];
    } else if (field.type === "object") {
      acc[field.name] = formData[field.name] || {};
      Object.keys(field.fields).forEach((subField) => {
        acc[field.name][subField] = formData[field.name]?.[subField] || "";
      });
    } else if (field.type === "date") {
      acc[field.name] = formData[field.name] || null;
    } else {
      acc[field.name] =
        formData[field.name] !== undefined ? formData[field.name] : "";
    }
    return acc;
  }, {});

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formik.handleChange(e);
    dispatch(updateForm({ name, value }));
  };

  return (
    <form onSubmit={formik.handleSubmit} className={classes[style]}>
      {fields.map((element, i) => (
        <Fragment key={i}>{renderInput(element, formik)}</Fragment>
      ))}
      <Box className={classes.wrapCta}>
        <Button>Annulla</Button>
        <Button variant="contained" type="submit">
          {labelCta}
        </Button>
      </Box>
    </form>
  );
};

export default ReusableForm;
