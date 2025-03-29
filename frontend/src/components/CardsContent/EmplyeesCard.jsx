import { Avatar, Chip, Typography } from "@mui/material";
import React from "react";

export const IntroEmplyeesCard = ({ data }) => {
  return (
    <>
      <Avatar
        alt={data.full_name}
        src="/static/images/avatar/1.jpg"
        sx={{ margin: "0 auto", width: "100px", height: "100px" }}
      />
      <Typography variant="h5">{data.full_name}</Typography>
      <Chip
        label={`${data.position}, ${data.department}`}
        sx={{ fontWeight: "800", fontSize: "16px" }}
      />
    </>
  );
};
export const ContentEmplyeesCard = ({ data }) => {
  return (
    <>
      <Typography variant="body1">
        Numero Di Telefono: <strong>{data.phone_number}</strong>
      </Typography>
      <Typography variant="body1">
        Email: <strong>{data.email}</strong>
      </Typography>
    </>
  );
};
