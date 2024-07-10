import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import SunIcon from "@assets/icons/sun.svg";
import MoonIcon from "@assets/icons/moon.svg";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  margin: 4,
  width: 64,
  height: 38,
  padding: 8,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 1,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${MoonIcon})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 34,
    height: 34,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${SunIcon})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export { StyledSwitch };
