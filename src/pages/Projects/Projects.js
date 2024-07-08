import dayjs from "dayjs";
import React, { useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import PageContent from "../../components/PageContent/PageContent";
import TableComponent from "../../components/TableComponent";
import SwitchComponentView from "../../components/UI/SwitchComponentView";


const Projects = () => {
  const {  data } = useFetch("projects", []);

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
        field: "project_name",
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
        field: "project_type",
        headerName: "Tipo Progetto",
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
        field: "status",
        headerName: "Status",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "budget",
        headerName: "Budget",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      
    ],
    [data]
  );

  return (
    <PageContent label="Progetti">
      <SwitchComponentView data={data} columns={columns} />
    </PageContent>
  );
};

export default Projects;
