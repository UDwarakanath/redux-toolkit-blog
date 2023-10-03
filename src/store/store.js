import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice/postsSlice"
const store = configureStore({
  reducer:{posts : postsReducer} 
})

export default store