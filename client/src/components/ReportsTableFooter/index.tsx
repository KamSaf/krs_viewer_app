import { Grid } from "@mui/material";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";
import UploadButton from "../UploadButton";
import FooterPagination from "../TableFooterPagination";
import ViewButton from "../ViewButton";

function ReportTableFooter(
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) {
  const location = useLocation();
  return (
    <>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ViewButton
            url={location.pathname + "/" + props.rowId}
            disabled={!props.rowId}
          />
          <UploadButton />
        </Grid>
        <FooterPagination />
      </Grid>
    </>
  );
}

export default ReportTableFooter;
