import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Report } from "@common/types";
import axiosInstance from "@axiosInstance/instance";

interface ReportsState {
  reports: Report[];
}

const initialState: ReportsState = {
  reports: [],
};

export const fetchReports = createAsyncThunk(
  "reports/fetchReports",
  async (companyId: string) => {
    const response = await axiosInstance.get(
      `/api/companies/${companyId}/reports`
    );
    return response.data;
  }
);

const reportsSlice = createSlice({
  name: "reports",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReports.fulfilled, (state, action) => {
      state.reports = action.payload;
    });
  },
});

export default reportsSlice.reducer;
