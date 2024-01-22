import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../utlis/redux/slice/postsSlice"
import { selectAllUsers } from "../utlis/redux/slice/userSlice"
import { selectAllPost } from "../utlis/redux/slice/postsSlice";
import PostList from "./PostList"

const AddSection = () => {
  const [isTitle,setTitle]=useState('')
  const [isContent,setContent]=useState('')
  const [isName,setName]=useState(null)





//   const data=useSelector((store)=>store.posts.list)
  const dispatch=useDispatch()
  const dataPost=useSelector(selectAllPost)
  const data=useSelector(selectAllUsers)


  const handleSubmit=(e)=>{
   e.preventDefault()

     



     if(isTitle&&isContent){

      dispatch(addPost(isTitle,isContent,isName))
      setTitle('')

      setContent('')
   }
     }
     const orderPost=dataPost.slice().sort((a,b)=>b.date.localeCompare(a.data))
    const canSave=Boolean(isTitle)&&Boolean(isContent)&&Boolean(isName)
  return (
    <div>
<form className="space-y-4 w-8/12 m-auto my-12" onSubmit={handleSubmit} >
 <div>
    <input type="text" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="title"  value={isTitle} onChange={(e)=>setTitle(e.target.value)||''} />
 </div>
 <div>

 <select value={isName} onChange={(e)=>setName(e.target.value)}>
      {data.map((item) => (
        <option key={item.id} value={item.id} >
          {item.name}
        </option>
      ))}
    </select>

    <input type="text" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="description" value={isContent} onChange={(e)=>setContent(e.target.value)||''} />
 </div>
 <button type="submit" className={`w-full px-4 py-2 text-white font-semibold bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${!canSave&&'bg-slate-600'}`} disabled={!canSave} >
    Add
 </button>
</form>
<ul className="space-y-4 w-6/12 m-auto my-20">
    {
       orderPost.map((list) => {
      
         return (
           <PostList key={list.id} list={list} isName={list.userId}/>
         )
       })
    }
   </ul>

    </div>
  )
}
export default AddSection