import { Box, Typography } from "@mui/material";
import React from "react";
import AuthForm from "../../components/AuthForm";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <Box className={classes.wrapPage}>
      <Box className={`${classes.structure} ${classes.brand}`}>
        <Typography variant="h3">Welcome in</Typography>
        <Typography variant="h1">ManagePro</Typography>
      </Box>
      <Box className={`${classes.structure} ${classes.auth}`}>
        <Box sx={{ width: "80%" }}>
          <AuthForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
