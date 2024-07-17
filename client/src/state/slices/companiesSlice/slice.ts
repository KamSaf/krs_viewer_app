import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Company } from "@common/types";
import axiosInstance from "@axiosInstance/instance";

interface CompaniesState {
  companies: Company[];
}

const initialState: CompaniesState = {
  companies: [],
};

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    const response = await axiosInstance.get("/api/companies");
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
  },
});

export default companiesSlice.reducer;
