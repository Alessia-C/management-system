import React from "react";
import Card from "../UI/Card/Card";
import { Avatar, Box, Typography } from "@mui/material";
import classes from "./CardUser.module.css";

const CardUser = ({ card }) => {
  return (
    <Card>
      <Box className={classes.wrapCardContent}>
        {card.src && (
          <Avatar
            src={card.src}
            alt={card.name}
            className={classes.cardAvatar}
          />
        )}
        <Box>
          <Typography variant="h5">{card.name}</Typography>
          <Typography variant="body1" className={classes.boldText}>
            {card.position}
          </Typography>
          <Box className={classes.wrapCta}>
            {card.idProject && (
              <Button variant="contained">Vai al progetto</Button>
            )}
            <Button variant="outlined">Dettaglio</Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CardUser;
