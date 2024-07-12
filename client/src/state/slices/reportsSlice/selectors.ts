import { RootState } from "@state/store";

const selectReports = (state: RootState) => state.reports;

export { selectReports };
