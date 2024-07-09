import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Navbar from "../components/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          marginTop: 100,
        }}
      >
        <h1>404 Not Found 🧐</h1>
        <Link component={RouterLink} underline="hover" to="/">
          Return to Home Page
        </Link>
      </div>
    </>
  );
}
