import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {id:1,title:"hey hey",content:"my my"},
  {id:2,title:"Pizzas",content:"more i eat more cravings i get"}
]
const postsSlice = createSlice({
  name:"posts",
  initialState,
  reducers : {
    addPosts : (state,action) =>{
      state.push(action.payload)
    }
  }
})

export default postsSlice.reducer