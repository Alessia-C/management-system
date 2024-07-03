import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "../pages/Dashboard/Dashboard.module.css";

const PageContent = ({ children, label }) => {
  return (
    <Box className={classes.wrapApp}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flex: 4,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          {label}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default PageContent;
