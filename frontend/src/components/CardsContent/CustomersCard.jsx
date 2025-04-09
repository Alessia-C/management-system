import { Box, Typography } from "@mui/material";
import React from "react";

export const IntroCustomersCard = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{data.company}</Typography>
      <Typography>{data.status}</Typography>
    </Box>
  );
};

export const ContentCustomersCard = ({ data }) => {
  return (
    <>
      <Typography>Referente: {data.name}</Typography>
      <Typography>Contatti:</Typography>
      <Typography>{data.phone} - {data.email}</Typography>
      <Typography>Ultimo pagamento: {data.last_payment}</Typography>
    </>
  );
};


// "project": "Gestione IT",
// "contract": "annuale",
// "lastUpdate": "2024-03-19T23:00:00.000Z",
// "lastPayment": "2024-03-14T23:00:00.000Z"
