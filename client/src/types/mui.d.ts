import "@mui/x-data-grid";

declare module "@mui/x-data-grid" {
  interface FooterPropsOverrides {
    rowId: number | null;
  }
}
