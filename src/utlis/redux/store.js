

import { configureStore } from "@reduxjs/toolkit";
import postReducer from './slice/postsSlice'
import userSlice from "./slice/userSlice";



const appStore=configureStore({
  reducer:{
  posts:postReducer,
  users:userSlice 
  }
})


export default appStore
