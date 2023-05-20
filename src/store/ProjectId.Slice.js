import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjectId = createAsyncThunk(
  "projectId/getProjectId",
  async (value, thunkAPI) => {   //value
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios(
        `https://sehetna.org/api/projects/${value.id}`,  ///value.id
        {
          headers: { "X-App-Locale": value.lang },  //value.lang
        }
      );
      return data.data.sections;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectIdSlice = createSlice({
  name: "projectId",
  initialState: {
    error: false,
    isLoading: false,
    info: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectId.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProjectId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.info = action.payload;
    });
    builder.addCase(getProjectId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default projectIdSlice.reducer;
