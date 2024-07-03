import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import CompanyTableFooter from "../components/CompanyTableFooter";
import { useState } from "react";
import TableDiv from "./TableDiv";

type Company = {
  id: number;
  name: string;
  address: string;
  krs: string;
};

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
    </TableDiv>
  );
}

export default CompaniesTable;
