import React from "react";
import Card from "../Card/Card";
import { Avatar, Box, Button, Typography } from "@mui/material";
import classes from "./CardUser.module.css";

const CardUser = ({ card, src }) => {
  return (
    <Card>
      <Box className={classes.wrapCardContent}>
        <Box className={classes.introCard}>
          {/* {card.src && ( */}
          <Avatar
            // src={card.src}
            src={src}
            alt={card.name}
            className={classes.cardAvatar}
            sx={{ width: "150px", height: "150px" }}
          />
          {/* )} */}
          <Typography variant="h5">{card.name}</Typography>
          <Typography variant="body1" className={classes.boldText}>
            {card.position}
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }} className={classes.content}>
          <Box className={classes.wrapCta}>
            {card.idProject && (
              <Button variant="outlined">Vai al progetto</Button>
            )}
            <Button variant="contained">Dettaglio</Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CardUser;
