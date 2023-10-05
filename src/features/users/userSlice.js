import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id:"1",user:"gordan"},
  {id:"2",user:"Dwaraka"},
  {id:"3",user:"Stephen"},
]

const usersSlice = createSlice({
  name : "users",
  initialState ,
  reducers:{}

})

export const selectAllUsers = state => state.users

export default usersSlice.reducer