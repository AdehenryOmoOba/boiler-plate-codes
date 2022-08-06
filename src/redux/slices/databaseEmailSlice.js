import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmails = createAsyncThunk("emails/fetchEmails", async () => {
  const { data } = await axios.get("http://localhost:4100/api/users");
  return data;
});

const initialState = { loading: false, data: [], error: "" };

const slice = createSlice({
  name: "emails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEmails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchEmails.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export default slice.reducer;
