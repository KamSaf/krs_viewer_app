import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { toggleTheme } from "../state/slices/configSlice";
import { FormControlLabel } from "@mui/material";
import ThemeButton from "./ThemeButton";

function Navbar() {
  const theme = useSelector((state: RootState) => state.config.theme);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            📔 KRS Viewer
          </Typography>
          <FormControlLabel
            control={
              <ThemeButton sx={{ m: 1 }} defaultChecked={theme != "light"} />
            }
            label=""
            onClick={() => dispatch(toggleTheme())}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
