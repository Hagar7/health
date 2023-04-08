import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsPage = createAsyncThunk(
  "news/getNewsPage",
  async (lang, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios(
        `https://sehetna.ok-adv.com/api/pages/news-and-events`,
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

const newsSlice = createSlice({
  name: "news",
  initialState: {
    error: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getNewsPage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNewsPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getNewsPage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default newsSlice.reducer;
