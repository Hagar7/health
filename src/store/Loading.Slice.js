import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getHomePage = createAsyncThunk(
  "home/getHomePage",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios(
        `https://sehetna.ok-adv.com/api/pages/home`,
        {
          headers: { "X-App-Locale": localStorage.getItem("lang")  || "en" },
          // headers: { "X-App-Locale": "ar" }
        }
      );

      return data.data.sections;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    error: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getHomePage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getHomePage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default homeSlice.reducer;