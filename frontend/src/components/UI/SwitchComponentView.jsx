import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../store/uiSlice";
import ListCard from "../ListCards/ListCard";
import TableComponent from "../TableComponent";

const SwitchComponentView = ({ columns, data, cardElement }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.ui.viewContent);

  const handleCardView = () => {
    dispatch(changeView("card"));
  };

  const handleListView = () => {
    dispatch(changeView("list"));
  };

  return (
    <>
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
            onClick={handleCardView}
          >
            <ViewModuleIcon sx={{ color: "#191919" }} />
          </Button>
          <Button
            variant={mode === "list" ? "outlined" : "text"}
            sx={{ borderColor: "#191919" }}
            onClick={handleListView}
          >
            <MenuIcon sx={{ color: "#191919" }} />
          </Button>
        </Box>
      </Box>

      
      {mode === "card" ? (
        <ListCard cards={data} key={"card"} />
      ) : (
        <TableComponent columns={columns} rows={data} key={"list"} />
      )}
    </>
  );
};

export default SwitchComponentView;
