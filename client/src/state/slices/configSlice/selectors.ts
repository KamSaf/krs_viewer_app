import { RootState } from "../../store";

const selectTheme = (state: RootState) => state.config.theme;

export { selectTheme };
