import { Box } from "@mui/material";
import React from "react";
import CardUser from "./CardUser/CardUser";

const ListCard = ({ cards, cardElement }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "max-content",
        gap: "2em",
      }}
      style={{
        height: "calc( 95% - 3em)",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      {cards.map((item) => {
        return (
          <CardUser
            card={item}
            key={item.id}
            cardElement={cardElement}
          />
        );
      })}
    </Box>
  );
};

export default ListCard;
