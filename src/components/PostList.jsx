// import { useDispatch, useSelector } from "react-redux"
// import { selectAllPost } from "../utlis/redux/slice/postsSlice";
// import { selectAllUsers } from "../utlis/redux/slice/userSlice";

import Authur from "./Authur"
import Reaction from "./Reaction"
import TimeAgo from "./TimeAgo"

const PostList = ({list,isName}) => {


  return (
    <li key={list.id} className="bg-white shadow-md rounded p-4">
    <h1 className="text-xl font-bold mb-2">{list.title}</h1>
    <Authur isName={isName}/>
    <p className="text-gray-600">{list.content}</p>
    <TimeAgo timeStamp={list.date}/>
    <Reaction post={list}/>
  </li>
   
  )
}
export default PostList