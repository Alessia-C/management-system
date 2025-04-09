import { Box, Chip, Typography } from "@mui/material";
import React from "react";

export const IntroProjectsCard = ({ data }) => {
  return (
    <>
      <Typography variant="h5">{data.project_name}</Typography>
      <Chip
        label={data.project_type}
        sx={{ fontWeight: "800", fontSize: "16px" }}
      />
    </>
  );
};

export const ContentProjectsCard = ({ data }) => {
  return (
    <>
      <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
        Descrizione
      </Typography>
      <Typography variant="body1">{data.description}</Typography>
      <Box sx={{ marginTop: "1em" }}>
        <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
          Status
        </Typography>
        <Typography variant="body1">{data.status}</Typography>
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
          <Typography variant="body1">{data.start_date}</Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
            Data Di Fine
          </Typography>
          <Typography variant="body1">{data.end_date}</Typography>
        </Box>
      </Box>
    </>
  );
};
