import { Grid } from "@mui/material";
import { GridPagination } from "@mui/x-data-grid";
import { FooterPaginationBox } from "./style";

function FooterPagination() {
  return (
    <Grid item xs={8}>
      <FooterPaginationBox>
        <GridPagination />
      </FooterPaginationBox>
    </Grid>
  );
}

export default FooterPagination;
