import React, { useEffect } from "react";
import PageContent from "../../components/PageContent";
import ReusableForm from "../../components/ReusableForm";
import Card from "../../components/UI/Card/Card";
import { usePost } from "../../hooks/useFetch";
import dayjs from "dayjs";
import { employeesFields } from "../../utils/employeesInfo";
import StepperComponent from "../../components/UI/StepperComponent";
import { useDispatch } from "react-redux";
import { setInitialValues } from "../../store/formSlice";

const NewEmployee = () => {
  const dispatch = useDispatch();
  const { isFetching, data, postData } = usePost(null);

  const handleSubmit = async (values) => {
    const newValues = { ...values };
    newValues.date_of_birth = dayjs(newValues.date_of_birth).format("YYYY-MM-DD");
    newValues.start_date = dayjs(newValues.start_date).format("YYYY-MM-DD");
    newValues.department = newValues.department.value;
    newValues.position = newValues.position.value;
    newValues.seniority_level = newValues.seniority_level.value;
    console.log(newValues);
    await postData("employees", [newValues]);
  };

  useEffect(() => {
    const initialValues = {
      full_name: "",
      date_of_birth: null,
      fiscal_code: "",
      address: "",
      phone_number: "",
      email: "",
      start_date: null,
      position: "",
      department: "",
      seniority_level: "",
      salary: "",
      contract_type: "",
      probation_period: "",
      working_hours: "",
      work_location: "",
    };

    dispatch(setInitialValues(initialValues))
  }, [dispatch]);

  return (
    <PageContent label="Nuovo Dipendente">
      <StepperComponent
        steps={employeesFields}
        onSubmit={handleSubmit}
      />
    </PageContent>
  );
};

export default NewEmployee;
