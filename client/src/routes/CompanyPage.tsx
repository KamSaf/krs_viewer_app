import ReportsTable from "@components/ReportsTable";
import Navbar from "@components/Navbar";
import NavBreadcrumbs from "@components/Breadcrumb";
import Container from "@mui/material/Container";

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <NavBreadcrumbs />
      <Container
        style={{
          marginTop: 30,
        }}
        maxWidth="xl"
      >
        <ReportsTable />
      </Container>
    </>
  );
}
