import React, { useState } from "react";
import Card from "../UI/Card/Card";
import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import classes from "./CardUser.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CardUser = ({ card, cardElement }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let intro;
  let content;
  let path;

  switch (location.pathname) {
    case "/employees":
      intro = (
        <>
          <Avatar
            alt={card.full_name}
            src="/static/images/avatar/1.jpg"
            sx={{ margin: "0 auto", width: "100px", height: "100px" }}
          />
          <Typography variant="h5">{card.full_name}</Typography>
          <Chip
            label={`${card.position}, ${card.department}`}
            sx={{ fontWeight: "800", fontSize: "16px" }}
          />
        </>
      );
      content = (
        <>
          <Typography variant="body1">
            Numero Di Telefono: <strong>{card.phone_number}</strong>
          </Typography>
          <Typography variant="body1">
            Email: <strong>{card.email}</strong>
          </Typography>
        </>
      );
      path = "detailemployee";
      break;
    case "/projects":
      intro = (
        <>
          <Typography variant="h5">{card.project_name}</Typography>
          <Chip
            label={card.project_type}
            sx={{ fontWeight: "800", fontSize: "16px" }}
          />
        </>
      );
      content = (
        <>
          <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
            Descrizione
          </Typography>
          <Typography variant="body1">{card.description}</Typography>
          <Box sx={{ marginTop: "1em" }}>
            <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
              Status
            </Typography>
            <Typography variant="body1">{card.status}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1em",
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                Data Di Inizio
              </Typography>
              <Typography variant="body1">{card.start_date}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                Data Di Fine
              </Typography>
              <Typography variant="body1">{card.end_date}</Typography>
            </Box>
          </Box>
        </>
      );
      path = "detailprojects";
      break;
    default:
      intro = "Componente non trovato";
  }

  return (
    <Box sx={{ minHeight: "100%" }}>
      <Card style="wrapCardContent">
        <Box className={classes.introCard}>{intro}</Box>
        <Box sx={{ margin: "2em 0" }}>{content}</Box>
        <Box sx={{ width: "100%" }} className={classes.content}>
          <Box className={classes.wrapCta}>
            <Button
              variant="contained"
              type="button"
              onClick={() => navigate(`${path}/${card.id}`)}
            >
              Dettaglio
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CardUser;
