import React from "react";
import PageContent from "../../components/PageContent/PageContent";
import { useDeleteDataById, useGetUser } from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import {
  contractTypes,
  departments,
  employeesFields,
  positions,
  probationPeriods,
  seniorityLevels,
  workingHours,
  workLocations,
} from "../../utils/employeesInfo";
import { useSelector } from "react-redux";
import LoadingComponent from "../../components/UI/LoadingComponent/LoadingComponent";
import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from "../../components/UI/Card/Card";
import "./detail.css";

const DetailEmployee = () => {
  const params = useParams();
  const loading = useSelector((state) => state.ui.loading);
  const navigate = useNavigate();


  const { data } = useGetUser("employees", {}, params.id);
  const { deleteById } = useDeleteDataById();

  const handleDelete = async () => {
    await deleteById("employees", params.id);
  };

  const formatData = (label, value) => {
    let newValue = "";
    switch (label.toLowerCase()) {
      case "data di nascita":
      case "data di inizio":
        newValue = dayjs(value).format("DD/MM/YYYY");
        break;
      case "numero di telefono":
        newValue = value && ("+39 " + value.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"));
        break;
      case "posizione":
        newValue = positions.find((el) => el.value === value)?.label;
        break;
      case "settore":
        newValue = departments.find((el) => el.value === value)?.label;
        break;
      case "seniority":
        newValue = seniorityLevels.find((el) => el.value === value)?.label;
        break;
      case "contratto":
        newValue = contractTypes.find((el) => el.value === value)?.label;
        break;
      case "periodo di prova":
        newValue = probationPeriods.find((el) => el.value === value)?.label;
        break;
      case "orario di lavoro":
        newValue = workingHours.find((el) => el.value === value)?.label;
        break;
      case "luogo di lavoro":
        newValue = workLocations.find((el) => el.value === value)?.label;
        break;
      case "ral":
        newValue = new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        }).format(value);
        break;
      default:
        newValue = value;
        break;
    }

    return newValue;
  };

  const handleUpdate = () => {
    navigate(`/employees/updateemployee/${params.id}`)
  }

  return (
    <PageContent
      label={data?.full_name || "Name"}
      labelCta="Modifica"
      color="primary"
      action={handleUpdate}
    >
      {loading ? (
        <LoadingComponent />
      ) : (
        <Box id="mp-details-content">
          {employeesFields.map((el, i) => {
            return (
              <Card key={i} style="mp-details-card">
                <Typography className="mp-card--title--section">
                  {el.label}
                </Typography>
                <Box className="mp-card--body--section">
                  {el.fields.map((item, k) => {
                    return (
                      <Box className="mp-card--info" key={k}>
                        <Typography className="mp-card--info-label">
                          {item.label}
                        </Typography>
                        <Typography className="mp-card--info-value">
                          {formatData(item.label, data[item.name])}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Card>
            );
          })}
        </Box>
      )}
    </PageContent>
  );
};

export default DetailEmployee;