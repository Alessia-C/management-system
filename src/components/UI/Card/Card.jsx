import { Box } from "@mui/material";
import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, bg = "#fff", color = "#000000de", style = '' }) => {

  return (
    <Box
      component="div"
      className={`${classes.wrapCard} ${classes[style]}`}
      sx={{ background: bg, color: color }}
    >
      {children}
    </Box>
  );
};

export default Card;
