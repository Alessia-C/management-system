import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import React from "react";

const SwitchComponentView = ({ mode, setMode }) => {
  return (
    <Box
      className="filter"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1em",
      }}
    >
      <Box>Filter</Box>
      <Box>
        <Button
          variant={mode === "card" ? "contained" : "outlined"}
          onClick={() => setMode("card")}
        >
          <ViewModuleIcon />
        </Button>
        <Button
          variant={mode === "list" ? "contained" : "outlined"}
          onClick={() => setMode("list")}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default SwitchComponentView;
