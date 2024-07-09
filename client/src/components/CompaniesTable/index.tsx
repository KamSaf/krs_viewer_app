import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import CompaniesTableFooter from "../CompaniesTableFooter";
import TableDiv from "../TableDiv";
import { useState, useEffect } from "react";
import type { Company } from "../../../../common/types";
import axios from "axios";
import { Axios } from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Company name", width: 250 },
  { field: "address", headerName: "Address", width: 250 },
  { field: "krs", headerName: "KRS", width: 250 },
];

function CompaniesTable() {
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const [rows, setRows] = useState<Company[]>([]);
  const axiosInstance: Axios = axios.create({
    baseURL: "http://localhost:3000",
  });

  useEffect(() => {
    axiosInstance.get("/api/companies").then((response) => {
      setRows(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableDiv>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={(ids) => {
          const row = rows.find((r) => r.id === ids[0]);
          if (row) {
            setSelectedRowId(row.id);
          }
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        slots={{
          toolbar: GridToolbar,
          footer: CompaniesTableFooter,
        }}
        slotProps={{
          footer: {
            rowId: selectedRowId,
          },
        }}
        pageSizeOptions={[5, 10]}
        disableMultipleRowSelection
      />
    </TableDiv>
  );
}

export default CompaniesTable;
