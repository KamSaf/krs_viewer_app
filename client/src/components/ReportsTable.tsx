import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import ReportTableFooter from "./ReportTableFooter";
import TableDiv from "./TableDiv";

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

function ReportsTable() {
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
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
