import React, { Fragment } from "react";
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FormComponent/Form.module.css";
import { renderInput } from "../utils/FormInput";
import { useNavigate } from "react-router-dom";

const ReusableForm = ({
  fields,
  labelCta = "Salva",
  style = "genericForm",
  onSubmit,
  stepsForm,
  checkBtn,
  handleNext,
  handleBack,
}) => {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form.formData);
  const initialForm = useSelector((state) => state.form.initialValues);

  const initialValues = initialForm
    ? initialForm
    : fields.reduce((acc, field) => {
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


  return (
    <form onSubmit={formik.handleSubmit} className={classes[style]}>
      {fields.map((element, i) => (
        <Fragment key={i}>{renderInput(element, formik)}</Fragment>
      ))}
      <Box className={classes.wrapCta}>
        {stepsForm && !checkBtn ? (
          <>
            <Button
              onClick={handleBack !== null ? handleBack : () => navigate(-1)}
            >
              {handleBack !== null ? "Indietro" : "Annulla"}
            </Button>
            <Button variant="contained" onClick={handleNext}>
              Avanti
            </Button>
          </>
        ) : (
          <Button variant="contained" type="submit">
            {labelCta}
          </Button>
        )}
        {!stepsForm && (
          <>
            <Button onClick={() => navigate(-1)}>Annulla</Button>
            <Button variant="contained" type="submit">
              {labelCta}
            </Button>
          </>
        )}
      </Box>
    </form>
  );
};

export default ReusableForm;
