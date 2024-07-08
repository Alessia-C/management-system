import React, { useMemo, useState } from "react";
import PageContent from "../../components/PageContent/PageContent";
import TableComponent from "../../components/TableComponent";
import { useFetch } from "../../hooks/useFetch";
import ListCard from "../../components/ListCard";
import SwitchComponentView from "../../components/UI/SwitchComponentView";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Employees = () => {
  const { data } = useFetch("employees", []);
  const navigate = useNavigate();

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
    ],
    [data]
  );

  const newEmployeeHandler = () => {
    navigate("newemployee");
  };

  const cardElement = {
    title: "full_name",
    chip_label: "position",
    chip_info: "department",
    detail: "detailemployee"
  }

  return (
    <PageContent label="Dipendenti" action={newEmployeeHandler}>
      <SwitchComponentView data={data} columns={columns} cardElement={cardElement} />
    </PageContent>
  );
};

export default Employees;
