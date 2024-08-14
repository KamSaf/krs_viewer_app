import Link, { LinkProps } from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { RootGrid } from "./style";
import { selectBreadcrumbCompany } from "@state/slices/companiesSlice/selectors";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@state/store";
import { useEffect } from "react";
import { fetchCompany } from "@state/slices/companiesSlice/slice";
import { selectViewedReport } from "@state/slices/reportsSlice/selectors";
import { fetchReport } from "@state/slices/reportsSlice/slice";
import dayjs from "dayjs";

interface LinkRouterProps extends LinkProps {
  state?: { companyId: number; companyName: string };
  to: string;
  replace?: boolean;
}

type PathPattern = {
  reg: RegExp;
  label: string;
  url: string;
};

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

function createLink(to: string, label: string, isLast: boolean) {
  return isLast ? (
    <Typography color="text.primary" key={to}>
      {label}
    </Typography>
  ) : (
    <LinkRouter underline="hover" color="primary" to={to} key={to}>
      {label}
    </LinkRouter>
  );
}

export default function NavBreadcrumbs() {
  const { company_id, report_id } = useParams();
  const pathnames = location.pathname.split("/");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (company_id) {
      dispatch(fetchCompany(company_id));
    }
    if (report_id) {
      dispatch(fetchReport(report_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const breadcrumbCompany = useSelector(selectBreadcrumbCompany);
  const viewedReport = useSelector(selectViewedReport);
  const pathPatterns: PathPattern[] = [
    {
      reg: /^\/companies\/\d+\/reports$/,
      label: breadcrumbCompany ? breadcrumbCompany.name : "N/A",
      url: `/companies/${company_id}/reports`,
    },
    {
      reg: /^\/companies\/\d+\/reports\/\d+$/,
      label: viewedReport
        ? `Report for year ${dayjs(viewedReport.dateFrom).year()}`
        : "N/A",
      url: `/companies/${company_id}/reports/${report_id}`,
    },
  ];
  const links = pathnames.map((_value, index) => {
    const last = index === pathnames.length - 1;
    const path = pathnames.slice(0, index + 1).join("/");
    for (const patt of pathPatterns) {
      if (path.match(patt.reg)) {
        return createLink(patt.url, patt.label, last);
      }
    }
  });
  return (
    <RootGrid container spacing={2}>
      <Grid item xs={4}>
        <Breadcrumbs>
          <LinkRouter underline="hover" color="primary" to="/">
            Home
          </LinkRouter>
          {links}
        </Breadcrumbs>
      </Grid>
      <Grid item xs={8} />
    </RootGrid>
  );
}
