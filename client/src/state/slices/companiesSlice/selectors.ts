import { RootState } from "@state/store";

const selectCompanies = (state: RootState) => state.companies;

export { selectCompanies };
