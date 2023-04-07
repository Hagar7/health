import { configureStore } from "@reduxjs/toolkit";
import home from "./Home.Slice";
import about from './About.Slice'
import initiative from './Initiative.slice'
import news from './News.Slice'
import publication from './Publication.Slice'
import project from './Project.Slice'
import projectId from './ProjectId.Slice'
export default configureStore({
  reducer: {
    home,
    about,
    initiative,
    news,
    publication,
    project,
    projectId
  },
});
