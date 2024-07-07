import React from "react";
import Card from "../UI/Card/Card";
import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import classes from "./CardUser.module.css";
import { Link } from "react-router-dom";

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
          <Chip
            label={card.position}
            sx={{ fontWeight: "800", fontSize: "16px" }}
          />
        </Box>
        <Box sx={{ width: "100%" }} className={classes.content}>
          {/*
            <Box>
              {card.idProject && (
                <>
                  <Typography variant="body1">Un progetto attivo: </Typography>
                  <Link to={`#/${card.idProject}`}>Vai al progetto</Link>
                </>
              )}
            </Box> */}
          <Box className={classes.wrapCta}>
            <Button variant="contained">Dettaglio</Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CardUser;
