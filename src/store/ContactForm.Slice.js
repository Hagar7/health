import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const postContactForm = createAsyncThunk(
  "contact/postContactForm",
  async (contactData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `https://sehetna.org/api/contact`,contactData,
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

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: {
    error: false,
    isLoading: false,
    user:{},
  },
  extraReducers: (builder) => {
    builder.addCase(postContactForm.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(postContactForm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(postContactForm.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default contactFormSlice.reducer;
