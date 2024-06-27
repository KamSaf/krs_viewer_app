import ReportsTable from "../components/ReportsTable.tsx";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import NavBreadcrumbs from "../components/Breadcrumb.tsx";

function CompanyPage() {
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

export default CompanyPage;
