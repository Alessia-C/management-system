import React from "react";
import PageContent from "../../components/PageContent/PageContent";
import { useDeleteDataById, useGetUser } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { employeesFields } from "../../utils/employeesInfo";
import TabsComponent from "../../components/UI/TabsComponent/TabsComponent";
import { useSelector } from "react-redux";
import LoadingComponent from "../../components/UI/LoadingComponent/LoadingComponent";

const DetailEmployee = () => {
  const params = useParams();
  const loading = useSelector((state) => state.ui.loading);

  const { data } = useGetUser("employees", {}, params.id);
  const { deleteById } = useDeleteDataById();

  const handleDelete = async () => {
    await deleteById("employees", params.id);
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
        <TabsComponent tabs={employeesFields} cssclass="detailsCard" />
      )}
    </PageContent>
  );
};

export default DetailEmployee;
