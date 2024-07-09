import { Box, Grid } from "@mui/material";
import { GridPagination } from "@mui/x-data-grid";
import { styled } from "@mui/system";

const FooterPaginationBox = styled(Box)({
  justifyContent: "flex-end",
});

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
