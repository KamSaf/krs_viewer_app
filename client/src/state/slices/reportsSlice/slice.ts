import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Report } from "@common/types";
import axiosInstance from "@axiosInstance/instance";

interface ReportsState {
  reports: Report[];
  viewedReport: Report | null;
}

const initialState: ReportsState = {
  reports: [],
  viewedReport: null,
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

export const fetchReport = createAsyncThunk(
  "reports/fetchReport",
  async (id: string) => {
    const response = await axiosInstance.get(`/api/reports/details/${id}`);
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
    builder.addCase(fetchReport.fulfilled, (state, action) => {
      state.viewedReport = action.payload;
    });
  },
});

export default reportsSlice.reducer;
