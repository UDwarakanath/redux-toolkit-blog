
import React, { useState } from 'react'
import { addPosts } from '../postsSlice/postsSlice'
import { useDispatch } from 'react-redux'

const PostForm = () => {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(title !== "" && content !== ""){
  
      dispatch(addPosts(title,content))
    }
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type='text' value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
      <input type='text' value={content} placeholder='Content' onChange={(e)=>setContent(e.target.value)}/>
      <button onClick={handleOnSubmit}>Submit</button>
    </form>
  )
}

export default PostForm