import React from "react";
import { Box } from "@mui/material";
import classes from "./Filters.module.css";

const FiltersComponent = ({children}) => {

  return (
    <Box
      className={classes.wrapFilter}
    >
      <Box>Filter</Box>
      {children}
    </Box>
  );
};

export default FiltersComponent;
