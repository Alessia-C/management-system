import React from "react";
import TextComponent from "../components/UI/InputComponent/TextComponent";
import PswComponent from "../components/UI/InputComponent/PswComponent";
import DateComponent from "../components/UI/InputComponent/DateComponent";
import SelectComponent from "../components/UI/InputComponent/SelectComponent";
import AutocompleteComponent from "../components/UI/InputComponent/AutocompleteComponent";

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
    case "select":
      input = <SelectComponent formik={formik} element={element} />;
      break;
    case "autocomplete":
      input = <AutocompleteComponent formik={formik} element={element} />;
      break;
    default:
      input = "Componente non trovato";
      break;
  }

  return input;
};
