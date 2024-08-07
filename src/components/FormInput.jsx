import React from "react";
import TextComponent from "./UI/InputComponent/TextComponent";
import PswComponent from "./UI/InputComponent/PswComponent";
import DateComponent from "./UI/InputComponent/DateComponent";

export const renderInput = (element, formik) => {
  let input;

  switch (element.type) {
    case "text":
    case "email":
    case "textarea":
      input = <TextComponent formik={formik} element={element} />;
      break;
    case "password":
      input = <PswComponent formik={formik} element={element} />;
      break;
    case "date":
      input = <DateComponent formik={formik} element={element} />;
      break;
    default:
      input = "Componente non trovato";
      break;
  }

  return input;
};
