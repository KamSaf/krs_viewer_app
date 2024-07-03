import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { toggleTheme } from "../state/slices/configSlice";
import { FormControlLabel } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

const Switch = styled(ThemeSwitch)({
  margin: 4,
});

const NavbarBox = styled(Box)({
  flexGrow: 1,
});

const NavbarTypography = styled(Typography)({
  flexGrow: 1,
});

function Navbar() {
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
              control={<Switch checked={theme != "light"} />}
              label=""
              onClick={() => dispatch(toggleTheme())}
            />
          </Toolbar>
        </AppBar>
      </NavbarBox>
    </div>
  );
}

export default Navbar;
