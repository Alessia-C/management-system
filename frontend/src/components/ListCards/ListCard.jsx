import { Box } from "@mui/material";
import React, { Fragment } from "react";
import ContainerUser from "../CardUser/CardUser";
import classes from "./ListCard.module.css";

const ListCard = ({ cards, cardElement, handleDelete }) => {
  return (
    <Box className={classes.wrapCards}>
      {cards.map((item) => {
        return (
          <Fragment key={item.id}>
            <ContainerUser
              card={item}
              cardElement={cardElement}
              handleDelete={handleDelete}
            />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default ListCard;
