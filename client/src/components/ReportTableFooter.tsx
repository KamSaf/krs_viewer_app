import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { GridPagination, GridSlotsComponentsProps } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import { useLocation, useNavigate } from "react-router-dom";
import UploadFileButton from "./UploadFileButton";

function ReportTableFooter(
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            variant="contained"
            style={{ margin: 10 }}
            onClick={() => navigate(location.pathname + "/" + props.reportId)}
            disabled={!props.reportId}
          >
            View
          </Button>
          <UploadFileButton />
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
