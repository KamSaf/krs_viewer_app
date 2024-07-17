import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import CompaniesTableFooter from "@components/CompaniesTableFooter";
import TableDiv from "@components/TableDiv";
import { useState, useEffect } from "react";
import { fetchCompanies } from "@state/slices/companiesSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@state/store";
import { selectCompanies } from "@state/slices/companiesSlice/selectors";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Company name", width: 250 },
  { field: "address", headerName: "Address", width: 250 },
  { field: "krs", headerName: "KRS", width: 250 },
];

export default function CompaniesTable() {
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCompanies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const rows = useSelector(selectCompanies).companies;

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
