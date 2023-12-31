import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice/postsSlice"
import userReducer from "../features/users/userSlice"


const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer
  }
})

export default store