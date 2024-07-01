import Link, { LinkProps } from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import { Grid } from "@mui/material";

interface LinkRouterProps extends LinkProps {
  state?: { companyId: number; companyName: string };
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

function NavBreadcrumbs() {
  // eslint-disable-next-line prefer-const
  let { companyId, reportId } = useParams();
  if (!companyId) {
    companyId = "1"; // hardcoded until data can be fetched from the server
  }
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => {
    if (isNaN(parseInt(x))) {
      return x;
    }
  });
  const breadcrumbNameMap: { [key: string]: string[] } = {
    "/companies": ["COMPANY NAME", "/companies/" + companyId], // hardcoded until data can be fetched from the server
    "/companies/reports": ["REPORT YEARS", "/companies/reports/" + reportId], // hardcoded until data can be fetched from the server
  };

  return (
    <Grid container spacing={2} style={{ margin: 2 }}>
      <Grid item xs={4}>
        <Breadcrumbs aria-label="breadcrumb">
          <LinkRouter underline="hover" color="primary" to="/">
            Home
          </LinkRouter>
          {pathnames.map((_value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            return last ? (
              <Typography color="text.primary" key={breadcrumbNameMap[to][1]}>
                {breadcrumbNameMap[to][0]}
              </Typography>
            ) : (
              <LinkRouter
                underline="hover"
                color="primary"
                to={breadcrumbNameMap[to][1]}
                key={breadcrumbNameMap[to][1]}
              >
                {breadcrumbNameMap[to][0]}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
      </Grid>
      <Grid item xs={8} />
    </Grid>
  );
}

export default NavBreadcrumbs;
