import React from "react";
import PageContent from "../../components/PageContent";
import ReusableForm from "../../components/ReusableForm";
import Card from "../../components/UI/Card/Card";
import { usePost } from "../../hooks/useFetch";
import dayjs from "dayjs";

const fields = [
  {
    label: "Nome",
    name: "name",
    type: "text",
    value: "name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    value: "email",
    required: true,
  },
  {
    label: "Numero Di Telefono",
    name: "phone",
    type: "text",
    value: "phone",
    required: true,
  },
  {
    label: "Data Di Inizio",
    name: "startDate",
    type: "date",
    value: "startDate",
    required: true,
  },
  {
    label: "Ral",
    name: "salary",
    type: "text",
    value: "salary",
    required: true,
  },
  {
    label: "Position",
    name: "position",
    type: "text",
    value: "position",
    required: true,
  },
  {
    label: "Settore",
    name: "department",
    type: "text",
    value: "department",
    required: true,
  },
  {
    label: "Seniority",
    name: "seniority",
    type: "text",
    value: "seniority",
    required: true,
  },
];

const NewEmployee = () => {
  const { isFetching, data, postData } = usePost(null);
  const handleSubmit = async (values) => {
    const newValues = {...values}
    newValues.startDate = dayjs(newValues.startDate).format('YYYY-MM-DD')
    await postData("employees", [newValues]);
  };

  return (
    <PageContent label="Nuovo Dipendente">
      <Card>
        <ReusableForm
          fields={fields}
          labelCta="Salva"
          onSubmit={handleSubmit}
        />
      </Card>
    </PageContent>
  );
};

export default NewEmployee;
