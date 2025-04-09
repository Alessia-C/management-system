import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";

import classes from "./CardContent.module.css";

export const EmplyeesCard = ({ data }) => {
  return (
    <>
      <Box className={classes.mpWrapEmployeesInfo}>
        <Avatar
          alt={data.full_name}
          src="/static/images/avatar/1.jpg"
          sx={{ width: "100px", height: "100px" }}
        />
        <Typography variant="h5" className={classes.mpEmployeesName}>
          {data.full_name}
        </Typography>
        <Typography variant="body1" className={classes.position}>
          {data.position}
        </Typography>
        <Chip
          variant="outlined"
          label={data.seniority_level}
          className={classes.mpEmployeesPosition}
          sx={{ fontWeight: "800", fontSize: "16px" }}
        />
      </Box>
      {/* <Typography variant="body1">
        Numero Di Telefono: <strong>{data.phone_number}</strong>
      </Typography>
      <Typography variant="body1">
        Email: <strong>{data.email}</strong>
      </Typography> */}
    </>
  );
};
