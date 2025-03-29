import React from "react";
import PageContent from "../../components/PageContent/PageContent";
import { useDeleteDataById, useGetUser } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import TabsComponent from "../../components/UI/TabsComponent/TabsComponent";
import { useSelector } from "react-redux";
import LoadingComponent from "../../components/UI/LoadingComponent/LoadingComponent";
import { projectsFields } from "../../utils/projectInfo";

const DetailProject = () => {
  const params = useParams();
  const loading = useSelector((state) => state.ui.loading);

  const { data } = useGetUser("projects", {}, params.id);
  const { deleteById } = useDeleteDataById();

  const handleDelete = async () => {
    await deleteById("projects", params.id);
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
        <TabsComponent tabs={projectsFields} cssclass="detailsCard" />
      )}
    </PageContent>
  );
};

export default DetailProject;
