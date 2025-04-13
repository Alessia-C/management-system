import React from "react";
import TabsComponent from "../../components/UI/TabsComponent/TabsComponent";
import { employeesFields } from "../../utils/employeesInfo";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageContent from "../../components/PageContent/PageContent";
import { useGetUser } from "../../hooks/useFetch";

const UpdateEmployee = () => {
  const params = useParams();
  useGetUser("employees", {}, params.id);
  const formData = useSelector((state) => state.form.formData);

  const handleUpdateData = async () => {
    const newValues = { ...formData };
    newValues.date_of_birth = dayjs(newValues.date_of_birth).format(
      "YYYY-MM-DD"
    );
    newValues.start_date = dayjs(newValues.start_date).format("YYYY-MM-DD");
    newValues.salary = parseInt(newValues.salary);

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
    <PageContent>
      <TabsComponent
        tabs={employeesFields}
        cssclass="detailsCard"
        onSubmit={handleUpdateData}
      />
    </PageContent>
  );
};

export default UpdateEmployee;
