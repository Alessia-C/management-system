import React from "react";
import Card from "../UI/Card/Card";
import { Box, Button } from "@mui/material";
import classes from "./CardUser.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ContentEmplyeesCard, IntroEmplyeesCard } from "../CardsContent/EmplyeesCard";
import { ContentProjectsCard, IntroProjectsCard } from "../CardsContent/ProjectsCard";
import { ContentCustomersCard, IntroCustomersCard } from "../CardsContent/CustomersCard";

const CardUser = ({ card, cssClass = "wrapCardContent" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let intro;
  let content;
  let path;

  switch (location.pathname) {
    case "/employees":
      intro = <IntroEmplyeesCard data={card} />;
      content = <ContentEmplyeesCard data={card} />;
      path = "detailemployee";
      break;
    case "/projects":
      intro = <IntroProjectsCard data={card} />;
      content = <ContentProjectsCard data={card} />;
      path = "detailproject";
      break;
    case "/customers":
      intro = <IntroCustomersCard data={card} />;
      content = <ContentCustomersCard data={card} />;
      path = "detailproject";
      break;
    default:
      intro = "Componente non trovato";
  }

  return (
    <Box sx={{ minHeight: "100%" }}>
      <Card style={cssClass}>
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
