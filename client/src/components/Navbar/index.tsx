import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@state/store";
import { toggleTheme } from "@state/slices/configSlice/slice";
import { FormControlLabel } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { NavbarBox, NavbarTypography } from "./style";
import ThemeSwitch from "@components/ThemeSwitch";

export default function Navbar() {
  const theme = useSelector((state: RootState) => state.config.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <NavbarBox>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <NavbarTypography variant="h6">
              <Link
                color="inherit"
                component={RouterLink}
                underline="none"
                to="/"
              >
                📔 KRS Viewer
              </Link>
            </NavbarTypography>
            <FormControlLabel
              control={<ThemeSwitch theme={theme} />}
              label=""
              onClick={() => dispatch(toggleTheme())}
            />
          </Toolbar>
        </AppBar>
      </NavbarBox>
    </div>
  );
}
