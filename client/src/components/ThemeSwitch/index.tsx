import { StyledSwitch } from "./style";

function ThemeSwitch({ theme }: { theme: string }) {
  return <StyledSwitch checked={theme != "light"} />;
}

export default ThemeSwitch;
