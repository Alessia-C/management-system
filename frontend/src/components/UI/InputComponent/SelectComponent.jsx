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
        value={formik.values[element.name] || ""}
        onChange={(event) => {
          formik.setFieldValue(element.name, event.target.value);
        }}
      >
        {element.options ? (
          element.options.map((item) => (
            <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
          ))
        ) : (
          <MenuItem value={0}>Non ci sono opzioni disponibili</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
