import { Autocomplete, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const AutocompleteComponent = ({ element, formik }) => {
  const noOptions = [{ label: "Opzioni non disponibili", value: "0" }];
  const options = element.options?.length ? element.options : noOptions;

  const [selectedValue, setSelectedValue] = useState(
    options.find((opt) => opt.value === formik.values[element.name]) || null
  );

  useEffect(() => {
    const newValue = options.find((opt) => opt.value === formik.values[element.name]) || null;
    setSelectedValue(newValue);
  }, [element.options, formik.values[element.name]]);

  return (
    <Autocomplete
      key={element.name}
      disablePortal
      name={element.name}
      id={`${element.name}-autocomplete`}
      options={options}
      value={selectedValue}
      onChange={(event, newValue) => {
        setSelectedValue(newValue);
        formik.setFieldValue(element.name, newValue ? newValue.value : "");
      }}
      isOptionEqualToValue={(option, value) => option.value === value?.value}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={element.label}
          required={element.required}
          error={formik.touched[element.name] && Boolean(formik.errors[element.name])}
          helperText={formik.touched[element.name] && formik.errors[element.name]}
          color={formik.touched[element.name] || formik.errors[element.name] ? "error" : "primary"}
        />
      )}
    />
  );
};

export default AutocompleteComponent;
