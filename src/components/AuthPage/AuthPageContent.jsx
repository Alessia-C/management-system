import { Box, Typography } from "@mui/material";
import classes from "./AuthPage.module.css";
import React from "react";

const AuthPageContent = ({ children, intro }) => {
  return (
    <Box className={classes.wrapPage}>
      <Box className={`${classes.structure} ${classes.brand}`}>
        <Typography variant="h3">Welcome in</Typography>
        <Typography variant="h1">ManagePro</Typography>
      </Box>
      <Box className={`${classes.structure} ${classes.auth}`}>
        <Box sx={{ width: "80%" }}>
          <Box className={classes.authIntro}>
            <Typography variant="h3">{intro.title}</Typography>
            <Typography variant="body1">{intro.text}</Typography>
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPageContent;
