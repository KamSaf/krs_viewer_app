import StyledSwitch from "./style";

export default function ThemeSwitch({ theme }: { theme: string }) {
  return <StyledSwitch checked={theme != "light"} />;
}
