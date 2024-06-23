import dayjs from "dayjs";
import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import PageContent from "../components/PageContent";
import TableComponent from "../components/TableComponent";

const Projects = () => {
  const { isFetching, error, data } = useFetch("projects", []);

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
        headerName: "Nome Progetto",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "description",
        headerName: "Descrizione",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "manager",
        headerName: "Manager",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "startDate",
        headerName: "Data di inizio",
        filterable: false,
        resizable: false,
        flex: 1,
        valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY"),
      },
      {
        field: "endDate",
        headerName: "Data di fine",
        filterable: false,
        resizable: false,
        flex: 1,
        valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY"),
      },
      {
        field: "budget",
        headerName: "Budget",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "teamMembers",
        headerName: "Team",
        filterable: false,
        resizable: false,
        flex: 1,
        valueFormatter: (value) => value.length > 0 ? value.length : '0',
      },
    ],
    [data]
  );

  return (
    <PageContent label="Progetti">
      <TableComponent columns={columns} rows={data} loading={isFetching} />
    </PageContent>
  );
};

export default Projects;
