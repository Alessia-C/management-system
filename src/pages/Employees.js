import React, { useMemo } from "react";
import PageContent from "../components/PageContent";
import TableComponent from "../components/TableComponent";
import useFetch from "../hooks/useFetch";

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
      <TableComponent columns={columns} rows={data} loading={isFetching} />
    </PageContent>
  );
};

export default Employees;
