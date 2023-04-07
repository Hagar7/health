import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPublicationPage = createAsyncThunk(
  "publication/getPublicationPage",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios(
        `https://sehetna.ok-adv.com/api/pages/publications`,
        {
          headers: { "X-App-Locale": localStorage.getItem("lang") || "en" },
        }
      );

      return data.data.sections;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const publicationSlice = createSlice({
  name: "publication",
  initialState: {
    error: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getPublicationPage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPublicationPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getPublicationPage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default publicationSlice.reducer;
