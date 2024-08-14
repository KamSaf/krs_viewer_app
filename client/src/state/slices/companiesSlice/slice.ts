import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Company } from "@common/types";
import axiosInstance from "@axiosInstance/instance";

interface CompaniesState {
  companies: Company[];
  breadcrumbCompany: Company | null;
}

const initialState: CompaniesState = {
  companies: [],
  breadcrumbCompany: null,
};

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    const response = await axiosInstance.get("/api/companies");
    return response.data;
  }
);

export const fetchCompany = createAsyncThunk(
  "companies/fetchCompany",
  async (id: string) => {
    const response = await axiosInstance.get(`/api/companies/details/${id}`);
    return response.data;
  }
);

const companiesSlice = createSlice({
  name: "companies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companies = action.payload;
    });
    builder.addCase(fetchCompany.fulfilled, (state, action) => {
      state.breadcrumbCompany = action.payload;
    });
  },
});

export default companiesSlice.reducer;
