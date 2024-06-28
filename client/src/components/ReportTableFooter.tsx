import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { GridPagination, GridSlotsComponentsProps } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import { useLocation, useNavigate } from "react-router-dom";

function ReportTableFooter(
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) {
  const navigate = useNavigate();
  const location = useLocation();

  const reportId = props.reportData ? props.reportData.id : null;
  const reportYears = props.reportData ? props.reportData.years : null;

  return (
    <>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            variant="contained"
            style={{ margin: 10 }}
            onClick={() =>
              navigate("/reports/" + reportId?.toString(), {
                state: {
                  ...location.state,
                  reportYears: reportYears,
                },
              })
            }
            disabled={!props.reportData}
          >
            View
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ justifyContent: "flex-end" }}>
            <GridPagination />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ReportTableFooter;
