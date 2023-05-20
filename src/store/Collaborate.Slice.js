import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const postCollaborateForm = createAsyncThunk(
  "collaborate/postCollaborateForm",
  async (collaborateData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `https://sehetna.org/api/collaborate`,collaborateData,
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

const collaborateFormSlice = createSlice({
  name: "collaborateForm",
  initialState: {
    error: false,
    isLoading: false,
    user:{},
  },
  extraReducers: (builder) => {
    builder.addCase(postCollaborateForm.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(postCollaborateForm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(postCollaborateForm.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default collaborateFormSlice.reducer;
