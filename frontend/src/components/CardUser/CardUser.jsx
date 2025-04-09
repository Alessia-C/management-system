import React from "react";
import Card from "../UI/Card/Card";
import { Box } from "@mui/material";

import classes from "./CardUser.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { EmplyeesCard } from "../CardsContent/EmplyeesCard";
import {
  ContentProjectsCard,
  IntroProjectsCard,
} from "../CardsContent/ProjectsCard";
import {
  ContentCustomersCard,
  IntroCustomersCard,
} from "../CardsContent/CustomersCard";
import ActionCard from "../UI/Card/ActionCard";

const CardUser = ({ card, cssClass = "wrapCardContent", handleDelete }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let intro;
  let content;
  let path;

  switch (location.pathname) {
    case "/employees":
      content = <EmplyeesCard data={card} />;
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

  const handleAction = () => {
    return navigate(`${path}/${card.id}`);
  };

  const handleDeleteAction = () => {
    return handleDelete(card.id);
  };

  return (
    <Box sx={{ minHeight: "100%" }}>
      <Card style={cssClass}>
        {intro && <Box className={classes.introCard}>{intro}</Box>}
        {content && content}
        <Box sx={{ width: "100%" }} className={classes.content}>
          <ActionCard
            handleAction={handleAction}
            handleDelete={handleDeleteAction}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default CardUser;
