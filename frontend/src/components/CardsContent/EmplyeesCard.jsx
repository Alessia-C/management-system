import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";

import classes from "./CardContent.module.css";
import { positions, seniorityLevels } from "../../utils/employeesInfo";

export const EmplyeesCard = ({ data }) => {
  const positionLabel = positions.find((el) => el.value === data.position)?.label;
  const seniorityLabel = seniorityLevels.find((el) => el.value === data.seniority_level)?.label;

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
        <Typography variant="body1" className={classes.position}>{positionLabel}</Typography>
        <Chip
          variant="outlined"
          label={seniorityLabel}
          className={classes.mpEmployeesPosition}
          sx={{ fontWeight: "800", fontSize: "16px" }}
        />
      </Box>
    </>
  );
};
