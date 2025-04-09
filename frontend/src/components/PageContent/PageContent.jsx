import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
// import classes from "../pages/Dashboard/Dashboard.module.css";
import { useSelector } from "react-redux";
import LoadingComponent from "../UI/LoadingComponent/LoadingComponent";
import classes from "./PageContent.module.css";

const PageContent = ({
  children,
  label,
  action,
  color = "primary",
  labelCta = "Nuovo",
}) => {

  const loading = useSelector((state) => state.ui.loading);
  
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
        <Box className={classes.wrapContent}>
          <Typography variant="h4">{label}</Typography>
          {action && (
            <Button variant="contained" onClick={action} color={color}>
              {labelCta}
            </Button>
          )}
        </Box>
        <Divider sx={{ marginBottom: "1em" }} />
        {loading ? <LoadingComponent /> : children}
      </Box>
    </Box>
  );
};

export default PageContent;
