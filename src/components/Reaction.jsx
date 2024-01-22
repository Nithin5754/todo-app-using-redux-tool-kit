
import { addReactions } from "../utlis/redux/slice/postsSlice";
import { FaRegThumbsUp, FaRegSmileWink, FaHeart, FaRocket, FaCoffee } from 'react-icons/fa';

import {useDispatch } from "react-redux";

let reactionEmoji={
  thumbsUp:<FaRegThumbsUp />,
  wow:<FaRegSmileWink />,
  heart:<FaHeart />,
  rocket:<FaRocket />,
  coffee:<FaCoffee />
}




const Reaction = ({post}) => {
const dispatch=useDispatch()

const reactionsButtons=Object.entries(reactionEmoji).map(([name,emoji])=>{
  return(
    <button
    key={name}
    type="button"
    onClick={()=>dispatch(addReactions({postId:post.id,reaction:name}))}

    >
      {emoji}{post.reactions[name]}
    </button>
  )
})

return <div>{reactionsButtons}</div>

}
export default Reaction