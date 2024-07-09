import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { selectTheme } from "./state/slices/configSlice/selectors";
import { PaletteMode } from "@mui/material";
import HomePage from "./routes/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./routes/NotFound";
import CompanyPage from "./routes/CompanyPage";
import ReportPage from "./routes/ReportPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/companies/:company_id/reports",
    element: <CompanyPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/companies/:company_id/reports/:report_id/",
    element: <ReportPage />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  const mode = useSelector(selectTheme) as PaletteMode;
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
