import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getProjectId = createAsyncThunk(
  "projectId/getProjectId",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios(
        `https://sehetna.ok-adv.com/api/pages/projects-75`,
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
