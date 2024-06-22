import React from "react";
import { Box, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Form } from "react-router-dom";

const DashboardPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expiration");
  };
  return (
    <Box className="App">
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "80px" }}>
          Content
          
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
