import React, { useMemo, useState } from "react";
import PageContent from "../../components/PageContent/PageContent";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { useDeleteDataById, useFetch } from "../../hooks/useFetch";
import SwitchComponentView from "../../components/UI/SwitchComponent/SwitchComponentView";
import { useNavigate } from "react-router-dom";

function DeleteUserActionItem({ deleteUser, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <GridActionsCellItem {...props} onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete this user?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setOpen(false);
              deleteUser();
            }}
            color="warning"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const Customers = () => {
  const { data } = useFetch("customers", []);
  const { deleteById } = useDeleteDataById();

  const navigate = useNavigate();
  
  const handleDelete = async (id) => {
    await deleteById("customers", id);
  };

  const newClientHandler = () => {
    navigate("newclient");
  };

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
        field: "company",
        headerName: "Azienda",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "name",
        headerName: "Nome",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "phone",
        headerName: "Telefono",
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
        field: "status",
        headerName: "Stato",
        filterable: false,
        resizable: false,
        flex: 0.8,
      },
      {
        field: "project",
        headerName: "Progetto",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "contract",
        headerName: "Contratto",
        filterable: false,
        resizable: false,
        flex: 1,
      },
      {
        field: "lastUpdate",
        headerName: "Ultimo Aggiornamento",
        filterable: false,
        resizable: false,
        flex: 1,
        valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY"),
      },
      {
        field: "lastPayment",
        headerName: "Ultimo Pagamento",
        filterable: false,
        resizable: false,
        flex: 1,
        valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY"),
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <DeleteUserActionItem
            label="Delete"
            showInMenu
            icon={<DeleteIcon />}
            deleteUser={() => handleDelete(params.id)}
            closeMenuOnClick={false}
          />,
        ],
      },
    ],
    []
  );

  const cardElement = {
    title: "company",
    chip_label: "name",
    chip_info: "company",
    detail: "company",
  };

  return (
    <PageContent label="Clienti" action={newClientHandler}>
      <SwitchComponentView
        data={data}
        columns={columns}
        cardElement={cardElement}
        handleDelete={handleDelete}
      />
    </PageContent>
  );
};

export default Customers;
