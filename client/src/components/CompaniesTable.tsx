import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import CompanyTableFooter from "../components/CompanyTableFooter";
import { useState, useEffect } from "react";
import type { Company } from "../../../common/types";
import axios from "axios";
import { Axios } from "axios";
import { findRow } from "../utils";

declare module "@mui/x-data-grid" {
  interface FooterPropsOverrides {
    companyId: number | null;
  }
}

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
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={(id) => {
          const selectedId = new Set(id).values().next().value;
          const row = findRow(selectedId, rows);
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
          footer: CompanyTableFooter,
        }}
        slotProps={{
          footer: {
            companyId: selectedRowId,
          },
        }}
        pageSizeOptions={[5, 10]}
        disableMultipleRowSelection
      />
    </div>
  );
}

export default CompaniesTable;
