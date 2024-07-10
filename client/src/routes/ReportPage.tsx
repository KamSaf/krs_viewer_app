import Navbar from "@components/Navbar";
import NavBreadcrumbs from "@components/Breadcrumb";

function ReportPage() {
  return (
    <>
      <Navbar />
      <NavBreadcrumbs />

      <div
        style={{
          textAlign: "center",
          marginTop: 100,
        }}
      >
        <h1>Report data</h1>
      </div>
    </>
  );
}

export default ReportPage;
