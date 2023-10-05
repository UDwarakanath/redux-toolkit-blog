
import React, { useState } from 'react'
import { addPosts } from '../postsSlice/postsSlice'
import { useDispatch,useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userSlice'

const PostForm = () => {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [userId,setUserId] = useState("")
  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  const renderUsers = users.map(user=><option key={user.id} value={user.id}>{user.user}</option>)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(title && content){
        dispatch(addPosts(title,content,userId))
        setTitle("")
        setContent("")
        setUserId("")
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  return (
    <form onSubmit={handleOnSubmit}>
      <input type='text' value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
      <textarea type='text' value={content} placeholder='Content' onChange={(e)=>setContent(e.target.value)}/>
      <select id="postAuthor" value={userId} onChange={(e)=>setUserId(e.target.value)}>
        <option value=""></option>
        {renderUsers}</select>
      <button onClick={handleOnSubmit} disabled={!canSave}>Save Post</button>
    </form>
  )
}

export default PostForm