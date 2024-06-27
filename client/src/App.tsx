import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { PaletteMode } from "@mui/material";
import HomePage from "./routes/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./routes/NotFound";
import CompanyPage from "./routes/CompanyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/companies/:companyId/",
    element: <CompanyPage />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  const theme = createTheme({
    palette: {
      mode: useSelector(
        (state: RootState) => state.config.theme
      ) as PaletteMode,
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
