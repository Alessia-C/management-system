import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "../../ListCards/ListCard";
import TableComponent from "../../TableComponent";
import useDeviceType from "../../../hooks/useDeviceType";
import FiltersComponent from "../FiltersComponent/FiltersComponent";
import MenuIcon from "@mui/icons-material/Menu";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { Box, Button } from "@mui/material";
import { changeView } from "../../../store/uiSlice";
import classes from "./Switch.module.css";

const SwitchComponentView = ({ columns, data, cardElement, handleDelete }) => {
  const device = useDeviceType();
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.ui.viewContent);

  const handleCardView = () => {
    dispatch(changeView("card"));
  };

  const handleListView = () => {
    dispatch(changeView("list"));
  };

  return (
    <Box className={classes.mpListElements}>
      <FiltersComponent cardElement={cardElement}>
        {device === "desktop" && (
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
        )}
      </FiltersComponent>
      {mode === "card" ? (
        <ListCard cards={data} key={"card"} handleDelete={handleDelete} />
      ) : (
        <TableComponent columns={columns} rows={data} key={"list"} />
      )}
    </Box>
  );
};

export default SwitchComponentView;
