import { Box } from "@mui/material";
import React from "react";
import CardUser from "../CardUser/CardUser";
import classes from './ListCard.module.css'

const ListCard = ({ cards, cardElement }) => {
  return (
    <Box className={classes.wrapCards}>
      {cards.map((item) => {
        return (
          <CardUser
            card={item}
            key={item.id}
            cardElement={cardElement}
          />
        );
      })}
    </Box>
  );
};

export default ListCard;
