import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const AutocompleteComponent = ({ element, formik }) => {
  const noOptions = [{ label: "Opzioni non disponibili", value: '0' }];
  return (
    <Autocomplete
      key={element.name}
      disablePortal
      name={element.name}
      id={`${element.name}-autocomplete`}
      value={formik.values[element.name] || null}
      onChange={(event, newValue) => {
        formik.setFieldValue(element.name, newValue);
      }}
      options={element.options ? element.options : noOptions}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={element.label}
          required={element.required}
          error={
            formik.touched[element.name] && Boolean(formik.errors[element.name])
          }
          helperText={
            formik.touched[element.name] && formik.errors[element.name]
          }
          color={
            formik.touched[element] || formik.errors[element]
              ? "error"
              : "primary"
          }
        />
      )}
    />
  );
};

export default AutocompleteComponent;
