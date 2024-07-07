import React, { useMemo, useState } from "react";
import PageContent from "../../components/PageContent";
import TableComponent from "../../components/TableComponent";
import { useFetch } from "../../hooks/useFetch";
import ListCard from "../../components/ListCard";
import SwitchComponentView from "../../components/UI/SwitchComponentView";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const { isFetching, error, data } = useFetch("employees", []);
  const navigate = useNavigate();

  const [mode, setMode] = useState("card");

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
        field: "full_name",
        headerName: "Nome",
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
        field: "phone_number",
        headerName: "Telefono",
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
        field: "position",
        headerName: "Ruolo",
        filterable: false,
        resizable: false,
        flex: 1,
      },

      // {
      //   field: "salary",
      //   headerName: "RAL",
      //   filterable: false,
      //   resizable: false,
      //   flex: 1,
      // },
      // {
      //   field: "startDate",
      //   headerName: "Data Assunzione",
      //   filterable: false,
      //   resizable: false,
      //   flex: 1,
      // },
    ],
    [data]
  );

  const newEmployeeHandler = () => {
    navigate("newemployee");
  };

  return (
    <PageContent label="Dipendenti" action={newEmployeeHandler}>
      <SwitchComponentView mode={mode} setMode={setMode} />
      {mode === "card" ? (
        <ListCard cards={data} loading={isFetching} />
      ) : (
        <TableComponent columns={columns} rows={data} loading={isFetching} />
      )}
    </PageContent>
  );
};

export default Employees;
