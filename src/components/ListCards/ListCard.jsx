import { Box } from "@mui/material";
import React from "react";
import ContainerUser from "../CardUser/CardUser";
import classes from './ListCard.module.css'

const ListCard = ({ cards, cardElement }) => {
  return (
    <Box className={classes.wrapCards}>
      {cards.map((item) => {
        return (
          <ContainerUser
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
