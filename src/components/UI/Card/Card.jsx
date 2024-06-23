import { Box } from "@mui/material";
import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, bg = "#fff", color = "#000000de" }) => {
  return (
    <Box
      component="div"
      className={classes.wrapCard}
      sx={{ background: bg, color: color }}
    >
      {children}
    </Box>
  );
};

export default Card;
