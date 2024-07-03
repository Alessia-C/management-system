import React, { useMemo } from "react";
import PageContent from "../components/PageContent";
import TableComponent from "../components/TableComponent";
import useFetch from "../hooks/useFetch";
import Card from "../components/UI/Card/Card";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Employees = () => {
  const { isFetching, error, data } = useFetch("employees", []);

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        filterable: false,
        resizable: false,
        flex: 0.4,
        hide: true,
      },
      {
        field: "name",
        headerName: "Nome",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "phone",
        headerName: "Telefono",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "position",
        headerName: "Ruolo",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "department",
        headerName: "Settore",
        filterable: false,
        resizable: false,
        flex: 1,
      },

      {
        field: "salary",
        headerName: "RAL",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "startDate",
        headerName: "Data Assunzione",
        filterable: false,
        resizable: false,
        flex: 1,
      },
    ],
    [data]
  );

  return (
    <PageContent label="Dipendenti">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2em",
        }}
      >
        {!isFetching &&
          data.map((item) => (
            <Card key={item.id}>
              <Box
                sx={{
                  display: "flex",
                  gap: "1em",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src="https://picsum.photos/200/200"
                  alt={item.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    {item.position}
                  </Typography>
                  <Box sx={{ display: "flex", gap: "1em" }}>
                    {item.idProject && (
                      <Button variant="contained">Vai al progetto</Button>
                    )}
                    <Button variant="outlined">Dettaglio</Button>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}
      </Box>
      {/* <TableComponent columns={columns} rows={data} loading={isFetching} /> */}
    </PageContent>
  );
};

export default Employees;
