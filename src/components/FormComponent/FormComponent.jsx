import { useFormik } from "formik";
import React, { Fragment } from "react";
import TextComponent from "../UI/InputComponent/TextComponent";
import { Box, Button } from "@mui/material";
import * as Yup from "yup";
import classes from "./Form.module.css";
import PswComponent from "../UI/InputComponent/PswComponent";

const FormComponent = ({
  initialValues,
  validation,
  elements,
  handleSubmit,
  labelCta,
  style = "fullColumn",
}) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validation),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const formatInputHandler = (element) => {
    let input;

    switch (element.type) {
      case "text":
      case "textarea":
        input = <TextComponent formik={formik} element={element} />;
        break;
      case "password":
        input = <PswComponent formik={formik} element={element} />;
        break;
      default:
        input = "Componente non trovato";
        break;
    }

    return input;
  };

  return (
    <form onSubmit={formik.handleSubmit} className={classes[style]}>
      {elements.map((element) => (
        <Fragment key={element.label}>{formatInputHandler(element)}</Fragment>
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

export default FormComponent;
