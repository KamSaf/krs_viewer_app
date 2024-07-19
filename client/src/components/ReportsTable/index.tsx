import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import ReportTableFooter from "@components/ReportsTableFooter";
import TableDiv from "@components/TableDiv";
import { useParams } from "react-router-dom";
import { fetchReports } from "@state/slices/reportsSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@state/store";
import { selectReports } from "@state/slices/reportsSlice/selectors";
import dayjs from "dayjs";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "dateFrom", headerName: "Date from:", width: 250 },
  { field: "dateTo", headerName: "Date to", width: 250 },
  { field: "status", headerName: "Status", width: 250 },
];

export default function ReportsTable() {
  const { company_id } = useParams();
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (company_id) {
      dispatch(fetchReports(company_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const rows = useSelector(selectReports).reports.map((rep) => {
    return {
      ...rep,
      dateFrom: dayjs(rep.dateFrom).format("DD.MM.YYYY"),
      dateTo: dayjs(rep.dateTo).format("DD.MM.YYYY"),
    };
  });

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
