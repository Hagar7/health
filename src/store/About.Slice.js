import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getAboutPage = createAsyncThunk(
    "about/getAboutPage",
    async (lang, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const { data } = await axios(
          `https://sehetna.ok-adv.com/api/pages/about`,
          {
            headers: { "X-App-Locale": lang  },
          }
        );
        return data.data.sections;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  const aboutSlice = createSlice({
    name: "about",
    initialState: {
      error: false,
      isLoading: false,
      data: null,
    },
    extraReducers: (builder) => {
      builder.addCase(getAboutPage.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(getAboutPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(getAboutPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    },
  });
  
  export default aboutSlice.reducer;
  