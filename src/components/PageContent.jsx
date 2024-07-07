import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "../pages/Dashboard/Dashboard.module.css";

const PageContent = ({ children, label, action }) => {
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2em",
          }}
        >
          <Typography variant="h4">{label}</Typography>
          {action && (
            <Button variant="contained" onClick={action}>
              Nuovo
            </Button>
          )}
        </Box>
        <Divider sx={{ marginBottom: "2em" }} />
        {children}
      </Box>
    </Box>
  );
};

export default PageContent;
