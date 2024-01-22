

import { createSlice,nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";



const postSlice=createSlice({
  name:'posts',
  initialState:{
    list:[
      {
        id:1,
        title:"nithin joji",
        content:"software developer",
        date:sub(new Date(),{minutes:15}).toISOString(),
        reactions:{
          thumbsUp:0,
          wow:0,
          heart:0,
          rocket:0,
          coffee:0
        }
      },
      {
        id:2,
        title:"minnu",
        content:"police",
        date:sub(new Date(),{minutes:10}).toISOString(),
        reactions:{
          thumbsUp:0,
          wow:0,
          heart:0,
          rocket:0,
          coffee:0
        }
      },
      {
        id:3,
        title:"amala",
        content:"accountant",
        date:sub(new Date(),{minutes:5}).toISOString(),
        reactions:{
          thumbsUp:0,
          wow:0,
          heart:0,
          rocket:0,
          coffee:0
        }
      }
    ]
  },
  reducers:{
addPost:{
  reducer:(state,action)=>{
  state.list.push(action.payload)
},
   prepare:(title,content,userId)=>{
    return{
      payload:{
        id:nanoid(),
        title,
        content,
        date:new Date().toISOString(),
        userId,
        reactions:{
          thumbsUp:0,
          wow:0,
          heart:0,
          rocket:0,
          coffee:0
        }
  
     }
    }
  
    
   }
},
addReactions:(state,action)=>{
  const {postId,reaction}=action.payload

  const existingUser=state.list.find((post)=>post.id===postId)
  if(existingUser){
    existingUser.reactions[reaction]++
  }


}
  }
})


export const {addPost,addReactions}=postSlice.actions

export const selectAllPost=(state)=>state.posts.list

export default postSlice.reducer