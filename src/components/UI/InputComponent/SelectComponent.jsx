import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectComponent = ({ element, formik }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${element.name}-select`}>{element.label}</InputLabel>
      <Select
        labelId={`${element.name}-select`}
        id={element.name}
        label={element.label}
        value={formik.values[element.name] || null}
        onChange={(event, newValue) => {
          formik.setFieldValue(element.name, newValue);
        }}
      >
        {element.options ? (
          element.options.map((item) => {
            <MenuItem value={item.value}>{item.value}</MenuItem>;
          })
        ) : (
          <MenuItem value={0}>Non ci sono opzioni disponibili</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
