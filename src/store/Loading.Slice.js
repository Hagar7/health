import {  createSlice } from "@reduxjs/toolkit";






const LoadingSlice = createSlice({
  name: "loading",
  initialState:{lang:localStorage.getItem("lang") || "en"},
  reducers:{
    changeLanguage:(state,action)=>{
      console.log(action.payload);
      state.lang = action.payload
    }
  }
});

export default LoadingSlice.reducer;
export const {changeLanguage} = LoadingSlice.actions;
