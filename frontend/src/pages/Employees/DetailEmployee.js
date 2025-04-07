import React from "react";
import PageContent from "../../components/PageContent/PageContent";
import { useDeleteDataById, useGetUser } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { employeesFields } from "../../utils/employeesInfo";
import TabsComponent from "../../components/UI/TabsComponent/TabsComponent";
import { useSelector } from "react-redux";
import LoadingComponent from "../../components/UI/LoadingComponent/LoadingComponent";
import dayjs from "dayjs";

const DetailEmployee = () => {
  const params = useParams();
  const loading = useSelector((state) => state.ui.loading);

  const { data } = useGetUser("employees", {}, params.id);
  const { deleteById } = useDeleteDataById();

  const handleDelete = async () => {
    await deleteById("employees", params.id);
  };

  const handleUpdateData = async (values) => {
    const newValues = { ...values };
    newValues.date_of_birth = dayjs(newValues.date_of_birth).format("YYYY-MM-DD");
    newValues.start_date = dayjs(newValues.start_date).format("YYYY-MM-DD");
    newValues.salary = parseInt(newValues.salary);
    newValues.department = newValues.department.value || "indefinite_term";
    newValues.position = newValues.position.value || "Software Engineer";
    newValues.seniority_level = newValues.seniority_level.value || "Mid";
    console.log(values, newValues);
    try {
      const response = await fetch(
        `http://localhost:4000/employees/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newValues),
        }
      );
      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento dei dati");
      }
      alert("Dati aggiornati con successo");
    } catch (error) {
      console.error("Errore:", error);
      alert("Si è verificato un errore durante l'aggiornamento");
    }
  };

  return (
    <PageContent
      label={`Dettaglio ${data?.full_name || ""}`}
      labelCta="Elimina"
      color="error"
      action={handleDelete}
    >
      {loading ? (
        <LoadingComponent />
      ) : (
        <TabsComponent
          tabs={employeesFields}
          cssclass="detailsCard"
          handleUpdateData={handleUpdateData}
        />
      )}
    </PageContent>
  );
};

export default DetailEmployee;
