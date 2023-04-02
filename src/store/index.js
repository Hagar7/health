import { configureStore } from "@reduxjs/toolkit";
import home from "./Home.Slice";
import about from './About.Slice'

export default configureStore({
  reducer: {
    home,
    about
  },
});
