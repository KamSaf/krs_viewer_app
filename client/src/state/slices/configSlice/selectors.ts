import { RootState } from "@state/store";

const selectTheme = (state: RootState) => state.config.theme;

export { selectTheme };
