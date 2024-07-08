import React, { useState } from "react";
import Card from "../UI/Card/Card";
import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import classes from "./CardUser.module.css";
import { Link, useNavigate } from "react-router-dom";

const CardUser = ({ card, cardElement }) => {
  const navigate = useNavigate();

  console.log(Object.keys(cardElement));
  const element = Object.keys(cardElement);
  const switchComponent = (type, data) => {
    let element;
    switch (type) {
      case "title":
        element = <Typography variant="h5">{data[type]}</Typography>;
        break;
      default:
        element = data;
        break;
    }
    return element;
  };

  return (
    <Card>
      <Box className={classes.wrapCardContent}>
        <Box className={classes.introCard}>
          {/* <Typography variant="h5">{card.full_name}</Typography>
          <Chip
            label={`${card.position}, ${card.department}`}
            sx={{ fontWeight: "800", fontSize: "16px" }}
          /> */}
          {switchComponent(element, card)}
        </Box>
        <Box sx={{ width: "100%" }} className={classes.content}>
          <Box className={classes.wrapCta}>
            <Button
              variant="contained"
              type="button"
              onClick={() => navigate(`detailemployee/${card.id}`)}
            >
              Dettaglio
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CardUser;
