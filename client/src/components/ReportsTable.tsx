import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import ReportTableFooter from "./ReportTableFooter";

declare module "@mui/x-data-grid" {
  interface FooterPropsOverrides {
    reportId: number | null;
  }
}

type Report = {
  id: number;
  dateFrom: string;
  dateTo: string;
  status: string;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "dateFrom", headerName: "Date from:", width: 250 },
  { field: "dateTo", headerName: "Date to", width: 250 },
  { field: "status", headerName: "Status", width: 250 },
];

const rows: Report[] = [
  {
    id: 1,
    dateFrom: "01.01.2023",
    dateTo: "31.12.2023",
    status: "stonks",
  },
  {
    id: 2,
    dateFrom: "01.01.2022",
    dateTo: "31.12.2022",
    status: "no stonks",
  },
];

function findRow(id: number): Report | null {
  for (const row of rows) {
    if (row.id === id) {
      return row;
    }
  }
  return null;
}

function ReportsTable() {
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={(id) => {
          const selectedId = new Set(id).values().next().value;
          const row = findRow(selectedId);
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
