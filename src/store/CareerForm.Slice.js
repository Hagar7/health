import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const postCareerForm = createAsyncThunk(
  "career/postCareerForm",
  async (careerData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `https://sehetna.org/api/careers`,careerData,
        {
            headers: { "Accept": "application/json" },
          }
      );
      if(data.success === true){
        await Swal.fire({
          icon: "success",
          text: "Message Sent Successfuly!",
          showConfirmButton: false,
          timer: 1500,
        });
        return data;
      }

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const careerFormSlice = createSlice({
  name: "careerForm",
  initialState: {
    error: false,
    isLoading: false,
    user:{},
  },
  extraReducers: (builder) => {
    builder.addCase(postCareerForm.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(postCareerForm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(postCareerForm.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default careerFormSlice.reducer;
