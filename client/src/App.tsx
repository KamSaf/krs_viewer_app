import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { PaletteMode } from "@mui/material";
import HomePage from "./routes/HomePage";

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
      <Navbar />
      <Container
        style={{
          marginTop: 30,
        }}
        maxWidth="xl"
      >
        <HomePage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
