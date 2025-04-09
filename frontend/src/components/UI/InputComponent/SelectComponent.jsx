import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import React from "react";

const SelectComponent = ({ element, formik }) => {
  const isError = formik.touched[element.name] && Boolean(formik.errors[element.name]);
  const options = element.options?.length ? element.options : [{ label: "Nessuna opzione disponibile", value: "" }];

  return (
    <FormControl fullWidth error={isError}>
      <InputLabel id={`${element.name}-select`}>{element.label}</InputLabel>
      <Select
        labelId={`${element.name}-select`}
        id={element.name}
        label={element.label}
        value={formik.values[element.name] || ""}
        onChange={(event) => formik.setFieldValue(element.name, event.target.value)}
      >
        {options.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {isError && <FormHelperText>{formik.errors[element.name]}</FormHelperText>}
    </FormControl>
  );
};

export default SelectComponent;
