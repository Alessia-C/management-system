import { useFormik } from "formik";
import React, { Fragment } from "react";
import TextComponent from "./InputComponent/TextComponent";
import { Box, Button } from "@mui/material";
import * as Yup from "yup";

const FormComponent = ({
  initialValues,
  validation,
  elements,
  handleSubmit,
  labelCta,
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
      case "password":
      case "textarea":
        input = <TextComponent formik={formik} element={element} />;
        break;
      default:
        input = "Componente non trovato";
        break;
    }

    return input;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {elements.map((element) => (
        <Fragment key={element.label}>{formatInputHandler(element)}</Fragment>
      ))}
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button>Annulla</Button>
        <Button variant="outlined" type="submit">
          {labelCta}
        </Button>
      </Box>
    </form>
  );
};

export default FormComponent;
