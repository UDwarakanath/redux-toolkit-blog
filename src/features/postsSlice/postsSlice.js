import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
  { id: 1, title: "hey hey", content: "my my" },
  { id: 2, title: "Pizzas", content: "more i eat more cravings i get" }
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