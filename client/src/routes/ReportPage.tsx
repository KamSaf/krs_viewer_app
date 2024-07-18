import Navbar from "@components/Navbar";
import NavBreadcrumbs from "@components/Breadcrumb";

export default function ReportPage() {
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
