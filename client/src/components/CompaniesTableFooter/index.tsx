import { Grid } from "@mui/material";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import UploadButton from "@components/UploadButton";
import FooterPagination from "@components/TableFooterPagination";
import ViewButton from "@components/ViewButton";

function CompaniesTableFooter(
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
          <UploadButton />
        </Grid>
        <FooterPagination />
      </Grid>
    </>
  );
}

export default CompaniesTableFooter;
