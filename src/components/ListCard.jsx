import { Box } from "@mui/material";
import React from "react";
import CardUser from "./CardUser/CardUser";

const ListCard = ({ cards, loading }) => {
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
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
                src="https://picsum.photos/200/200"
              />
            );
          })}
        </Box>
      )}
    </>
  );
};

export default ListCard;
