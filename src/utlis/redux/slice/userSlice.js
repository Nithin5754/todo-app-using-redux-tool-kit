import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
  name:'users',
  initialState:{
  userLists:[
    {id:0,name:'nithin joji'},
    {id:1,name:'nelvin'},
    {id:2,name:'minnu'},

  ]},
  reducers:{}
})

export const selectAllUsers=(state)=>state.users.userLists

export default userSlice.reducer