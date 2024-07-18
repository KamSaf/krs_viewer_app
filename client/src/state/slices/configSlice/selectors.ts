import { RootState } from "@state/store";

export const selectTheme = (state: RootState) => state.config.theme;
