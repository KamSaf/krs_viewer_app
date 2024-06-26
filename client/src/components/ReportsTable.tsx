import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

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
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableMultipleRowSelection
      />
    </div>
  );
}

export default ReportsTable;
