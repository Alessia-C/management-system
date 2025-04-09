import React from "react";
import { Box, Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./Card.module.css"

const ActionCard = ({handleAction, handleDelete}) => {
  return (
    <Box className={classes.wrapCta}>
      {/* <Button
        variant="outlined"
        type="button"
        color="secondary"
        autoFocus
        onClick={handleDelete}
        className={classes.removeCta}
      >
        <DeleteIcon />
      </Button> */}
      <Button
        variant="contained"
        type="button"
        onClick={handleAction}
        className={classes.actionCta}
      >
        Dettaglio
      </Button>
    </Box>
  );
};

export default ActionCard;
