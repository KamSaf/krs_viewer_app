import CompaniesTable from "../components/CompaniesTable";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";

function HomePage() {
  return (
    <>
      <Navbar />
      <Container
        style={{
          marginTop: 30,
        }}
        maxWidth="xl"
      >
        <CompaniesTable />
      </Container>
    </>
  );
}

export default HomePage;
