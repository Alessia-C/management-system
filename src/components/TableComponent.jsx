import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": {
    fontSize: "1.1rem",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "700",
  },
  "& .MuiDataGrid-cell": {
    fontSize: "1rem", // Cambia la dimensione del testo delle celle
  },
}));

const TableComponent = ({ rows, columns, loading }) => {
  return (
    <Box
      sx={{ width: "100%", height: "100%", maxHeight: "calc(95vh - 5.5em)" }}
    >
      <CustomDataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
          columns: {
            ...columns.initialState?.columns,
            columnVisibilityModel: { id: false },
          },
        }}
        sx={{ bgcolor: "#fff" }}
        pageSizeOptions={[5, 10, 20]}
        disableColumnSorting
        disableColumnMenu
        // autoHeight
        // checkboxSelection
      />
    </Box>
  );
};

export default TableComponent;
