import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

type Company = {
  id: number;
  name: string;
  address: string;
  krs: string;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Company name", width: 250 },
  { field: "address", headerName: "Address", width: 250 },
  { field: "krs", headerName: "KRS", width: 250 },
];

const rows: Company[] = [
  {
    id: 1,
    name: "Revolve Healthcare",
    address: "Katowice, ul. Porcelanowa 23 40-246",
    krs: "0000972657",
  },
  {
    id: 2,
    name: "Neubloc Polska",
    address: "Katowice, ul. Grabowa 2 40-172",
    krs: "0000335382",
  },
];

function CompaniesTable() {
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

export default CompaniesTable;
