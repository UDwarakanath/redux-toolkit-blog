import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  { id: 1, title: "hey hey", content: "my my", date:sub(new Date(),{minutes:10}).toISOString()},
  { id: 2, title: "Pizzas", content: "more i eat more cravings i get", date:sub(new Date(),{minutes:5}).toISOString()}
]
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date : new Date().toISOString(),
            userId
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer