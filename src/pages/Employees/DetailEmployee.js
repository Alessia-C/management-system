import React from "react";
import PageContent from "../../components/PageContent";
import { useDeleteDataById, useGetUser } from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Card from "../../components/UI/Card/Card";
import { employeesFields } from "../../utils/employeesInfo";

const DetailEmployee = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { isFetching, error, data } = useGetUser("employees", {}, params.id);
  const { deleteById, success } = useDeleteDataById();

  const handleDelete = async () => {
    await deleteById("employees", params.id);
    // if (success) navigate(-1);
  };

  if (isFetching) return <Typography variant="h5">Loading</Typography>;
  return (
    <PageContent
      label={`Dettaglio ${data.full_name}`}
      labelCta="Elimina"
      color="error"
      action={handleDelete}
    >
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
    </PageContent>
  );
};

export default DetailEmployee;
