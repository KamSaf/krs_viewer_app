import ReportsTable from "../components/ReportsTable.tsx";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";

function CompanyPage() {
  return (
    <>
      <Navbar />
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
