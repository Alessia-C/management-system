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
          variant={mode === "card" ? "outlined" : "text"}
          sx={{ borderColor: "#191919" }}
          onClick={() => setMode("card")}
        >
          <ViewModuleIcon sx={{ color: "#191919" }} />
        </Button>
        <Button
          variant={mode === "list" ? "outlined" : "text"}
          sx={{ borderColor: "#191919" }}
          onClick={() => setMode("list")}
        >
          <MenuIcon sx={{ color: "#191919" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default SwitchComponentView;
