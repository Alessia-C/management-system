import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "../pages/Dashboard/Dashboard.module.css";

const PageContent = ({ children }) => {
  return (
    <Box className={classes.wrapApp}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flex: 4,
          // p: 3,
          // background: "#fff",
          // borderRadius: "24px",
          height: "calc( 95vh - 2em )",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContent;
