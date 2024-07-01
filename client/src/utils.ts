import { Company, Report } from "../../common/types";

function findRow(
  id: number,
  rows: Company[] | Report[]
): Company | Report | null {
  for (const row of rows) {
    if (row.id === id) {
      return row;
    }
  }
  return null;
}

export { findRow };
