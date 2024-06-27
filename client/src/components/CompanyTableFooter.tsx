import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { GridPagination, GridSlotsComponentsProps } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

function CompanyTableFooter(
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) {
  const navigate = useNavigate();
  const companyName = props.companyData ? props.companyData.name : null;
  const companyId = props.companyData ? props.companyData.id : null;
  return (
    <>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            variant="contained"
            style={{ margin: 10 }}
            onClick={() =>
              navigate("/companies/" + companyId?.toString(), {
                state: {
                  companyName: companyName,
                  companyId: companyId,
                },
              })
            }
            disabled={!props.companyData}
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

export default CompanyTableFooter;
