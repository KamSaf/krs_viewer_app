import Link, { LinkProps } from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";

type PathInfo = {
  regex: RegExp;
  name: string;
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function findBreadcrumbName(
  url: string,
  breadcrumbRoutesNames: PathInfo[]
): string | null {
  let routeName: string | null = null;
  breadcrumbRoutesNames.forEach((route: PathInfo) => {
    if (url.match(route.regex)) {
      routeName = route.name;
    }
  });
  return routeName;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

function NavBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbRoutesNames: PathInfo[] = [
    {
      regex: /^\/companies\/\d+$/,
      name: location.state.companyName,
    },
  ];

  return (
    <Grid container spacing={2} style={{ margin: 2 }}>
      <Grid item xs={4}>
        <Breadcrumbs aria-label="breadcrumb">
          {pathnames.map((_value, index) => {
            const path = pathnames.slice(0, index + 1).join("/");
            if (path === "companies") {
              return (
                <LinkRouter key="/" underline="hover" color="primary" to="/">
                  Home
                </LinkRouter>
              );
            }
            const last = index === pathnames.length - 1;
            const to = `/${path}`;
            const pathName = findBreadcrumbName(to, breadcrumbRoutesNames);
            return last ? (
              <Typography color="text.primary" key={to}>
                {pathName} {location.state.companyId}
              </Typography>
            ) : (
              <LinkRouter underline="hover" color="primary" to={to} key={to}>
                {pathName} {location.state.companyId}
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
