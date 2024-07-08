import { Grid } from "@mui/material";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";
import UploadFileButton from "./UploadFileButton";
import FooterPagination from "./TableFooterPagination";
import ViewButton from "./ViewButton";

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
          <UploadFileButton />
        </Grid>
        <FooterPagination />
      </Grid>
    </>
  );
}

export default ReportTableFooter;
