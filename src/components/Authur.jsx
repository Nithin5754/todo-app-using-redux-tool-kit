import { selectAllUsers } from "../utlis/redux/slice/userSlice"

import { useSelector } from "react-redux"


const Authur = ({isName}) => {

  const data=useSelector(selectAllUsers)


  const authurName=data.find((user)=>user.id===parseInt(isName))
  

  return (
    <span> By {authurName?authurName.name:'unknown author'}</span>
  )
}
export default Authur