import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCareerPage = createAsyncThunk(
  "career/getCareerPage",
  async (lang, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios(
        `https://sehetna.org/api/pages/careers`,
        {
          headers: { "X-App-Locale": lang },
        }
      );
      return data.data.sections;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const careerSlice = createSlice({
  name: "career",
  initialState: {
    error: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCareerPage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCareerPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getCareerPage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default careerSlice.reducer;
