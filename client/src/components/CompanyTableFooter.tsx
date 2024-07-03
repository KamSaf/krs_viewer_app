import { Grid } from "@mui/material";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import UploadFileButton from "./UploadFileButton";
import FooterPagination from "./TableFooterPagination";
import ViewButton from "./ViewButton";

function CompanyTableFooter(
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) {
  return (
    <>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ViewButton
            url={"/companies/" + props.rowId + "/reports"}
            disabled={!props.rowId}
          />
          <UploadFileButton />
        </Grid>
        <FooterPagination />
      </Grid>
    </>
  );
}

export default CompanyTableFooter;
