import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import ReportTableFooter from "../ReportsTableFooter";
import TableDiv from "../TableDiv";
import type { Report } from "../../../../common/types";
import axios from "axios";
import { Axios } from "axios";
import { useParams } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "dateFrom", headerName: "Date from:", width: 250 },
  { field: "dateTo", headerName: "Date to", width: 250 },
  { field: "status", headerName: "Status", width: 250 },
];

function ReportsTable() {
  const { company_id } = useParams();
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const [rows, setRows] = useState<Report[]>([]);
  const axiosInstance: Axios = axios.create({
    baseURL: "http://localhost:3000",
  });

  useEffect(() => {
    axiosInstance
      .get(`/api/companies/${company_id}/reports`)
      .then((response) => {
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
          footer: ReportTableFooter,
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

export default ReportsTable;
