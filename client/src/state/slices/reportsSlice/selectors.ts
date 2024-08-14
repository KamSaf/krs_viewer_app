import { RootState } from "@state/store";

export const selectReports = (state: RootState) => state.reports;

export const selectViewedReport = (state: RootState) =>
  state.reports.viewedReport;
