import { Box } from "@mui/material";
import React from "react";
import CardUser from "./UI/CardUser/CardUser";

const ListCard = ({ cards, loading }) => {
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2em",
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
