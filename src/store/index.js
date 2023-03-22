import { configureStore } from "@reduxjs/toolkit";
import home from "./Home.Slice";

export default configureStore({
  reducer: {
    home,
  },
});
