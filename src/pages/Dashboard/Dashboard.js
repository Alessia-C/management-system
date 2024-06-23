import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "../../components/UI/Card/Card";
import classes from "./Dashboard.module.css";
import PageContent from "../../components/PageContent";

const DATA = [
  {
    id: 1,
    title: "Progetto A",
    description: "Descrizione del progetto A",
    status: "In corso",
    dueDate: "2024-07-01",
    assignedTo: "Mario Rossi",
    priority: "Alta",
    progress: 70,
  },
  {
    id: 2,
    title: "Progetto B",
    description: "Descrizione del progetto B",
    status: "Completato",
    dueDate: "2024-06-15",
    assignedTo: "Luigi Bianchi",
    priority: "Media",
    progress: 100,
  },
  {
    id: 3,
    title: "Progetto C",
    description: "Descrizione del progetto C",
    status: "In attesa",
    dueDate: "2024-08-01",
    assignedTo: "Anna Verdi",
    priority: "Bassa",
    progress: 20,
  },
  {
    id: 4,
    title: "Progetto D",
    description: "Descrizione del progetto D",
    status: "In corso",
    dueDate: "2024-07-10",
    assignedTo: "Giovanni Neri",
    priority: "Alta",
    progress: 50,
  },
  // {
  //   id: 5,
  //   title: "Progetto E",
  //   description: "Descrizione del progetto E",
  //   status: "Completato",
  //   dueDate: "2024-05-20",
  //   assignedTo: "Maria Rossi",
  //   priority: "Media",
  //   progress: 100,
  // },
  // {
  //   id: 6,
  //   title: "Progetto F",
  //   description: "Descrizione del progetto F",
  //   status: "In corso",
  //   dueDate: "2024-07-20",
  //   assignedTo: "Marco Bianchi",
  //   priority: "Alta",
  //   progress: 80,
  // },
];

const DashboardPage = () => {
  return (
    <>
      <PageContent label="Dashboard">
        <Box className={classes.cardIntro}>
          <Card bg="#C6D8FF">
            <Typography variant="h5">Progetti</Typography>
            <Typography variant="h3">4</Typography>
          </Card>
          {/* bg="#442559" */}
          <Card bg="#642D73" color="#fff">
            <Typography variant="h5">Dipendenti</Typography>
            <Typography variant="h3">300</Typography>
          </Card>
          <Card bg="#A67B9F" color="#fff">
            <Typography variant="h5">Clienti</Typography>
            <Typography variant="h3">55</Typography>
          </Card>
        </Box>
        <Box className={classes.wrapContent}>
          {DATA.map((card) => (
            <Card key={card.id}>
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="body1">{card.description}</Typography>
              <Typography variant="body1">{card.dueDate}</Typography>
              <Typography variant="body1">Status: {card.status}</Typography>
              <Typography variant="body1">
                Assegnato Da: {card.assignedTo}
              </Typography>
              <Typography variant="body1">Priorità: {card.priority}</Typography>
            </Card>
          ))}
        </Box>
      </PageContent>
    </>
  );
};

export default DashboardPage;
