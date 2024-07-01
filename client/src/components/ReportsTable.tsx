import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import ReportTableFooter from "./ReportTableFooter";
import type { Report } from "../../../common/types";
import { findRow } from "../utils";
import axios from "axios";
import { Axios } from "axios";
import { useParams } from "react-router-dom";

declare module "@mui/x-data-grid" {
  interface FooterPropsOverrides {
    reportId: number | null;
  }
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "dateFrom", headerName: "Date from:", width: 250 },
  { field: "dateTo", headerName: "Date to", width: 250 },
  { field: "status", headerName: "Status", width: 250 },
];

function ReportsTable() {
  const { companyId } = useParams();
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const [rows, setRows] = useState<Report[]>([]);
  const axiosInstance: Axios = axios.create({
    baseURL: "http://localhost:3000",
  });

  useEffect(() => {
    axiosInstance.get("/api/companies/" + companyId).then((response) => {
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
          footer: ReportTableFooter,
        }}
        slotProps={{
          footer: {
            reportId: selectedRowId,
          },
        }}
        pageSizeOptions={[5, 10]}
        disableMultipleRowSelection
      />
    </div>
  );
}

export default ReportsTable;
