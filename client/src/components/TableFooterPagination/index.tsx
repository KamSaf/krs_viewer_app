import { Grid } from "@mui/material";
import { GridPagination } from "@mui/x-data-grid";
import FooterPaginationBox from "./style";

export default function FooterPagination() {
  return (
    <Grid item xs={8}>
      <FooterPaginationBox>
        <GridPagination />
      </FooterPaginationBox>
    </Grid>
  );
}
