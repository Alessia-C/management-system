import React from "react";
import PageContent from "../../components/PageContent/PageContent";
import { useDeleteDataById, useGetUser } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Card from "../../components/UI/Card/Card";
import { employeesFields } from "../../utils/employeesInfo";

const DetailEmployee = () => {
  const params = useParams();
  const { isFetching, data } = useGetUser("employees", {}, params.id);
  const { deleteById } = useDeleteDataById();

  const handleDelete = async () => {
    await deleteById("employees", params.id);
  };

  return (
    <PageContent
      label={`Dettaglio ${data.full_name}`}
      labelCta="Elimina"
      color="error"
      action={handleDelete}
    >
      {isFetching ? (
        <Typography variant="h5">Loading...</Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: "1.5em",
            //   gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {employeesFields.map((item) => {
            return (
              <Card>
                <Typography variant="h6">{item.label}</Typography>
                {item.fields.map((field) => {
                  return (
                    <Typography variant="body1">
                      {field.label}: <strong>{data[field.name]}</strong>
                    </Typography>
                  );
                })}
              </Card>
            );
          })}
        </Box>
      )}
    </PageContent>
  );
};

export default DetailEmployee;
