import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInitiativePage = createAsyncThunk(
  "initiative/getInitiativePage",
  async (lang, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios(
        `https://sehetna.ok-adv.com/api/pages/initiative`,
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

const initiativeSlice = createSlice({
  name: "initiative",
  initialState: {
    error: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getInitiativePage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getInitiativePage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getInitiativePage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default initiativeSlice.reducer;
