import { Typography } from "@mui/material";
import React from "react";

export const IntroCustomersCard = ({ data }) => {
  return (
    <>
      <Typography>{data.company}</Typography>
      <Typography>Referente: {data.name}</Typography>
      <Typography>Ultimo pagamento: {data.last_payment}</Typography>
    </>
  );
};
export const ContentCustomersCard = ({ data }) => {
  return (
    <>
    </>
  );
};

// company: "Tech Innovators";
// contract: "Contratto a tempo indeterminato";
// email: "giovanni.rossi@tech.com";
// id: 1;
// last_payment: "2024-11-30";
// last_update: "2024-12-01";
// name: "Giovanni Rossi";
// phone: "+391234567890";
// project: "Sviluppo Software";
// project_id: 1;
// status: "Attivo";
