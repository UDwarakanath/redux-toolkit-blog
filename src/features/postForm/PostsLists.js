import { useSelector } from "react-redux";
import { selectAllPosts } from "../postsSlice/postsSlice";
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";


const PostsLists = () => {

  const posts = useSelector(selectAllPosts)


  console.table(posts)

  console.log(posts)
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content.substring(0,100)}</p>
    <div className="post_auther">
      <TimeAgo timestamp={post.date} />
      <PostUser userId = {post.userId}/>
      </div>
  </article>
  ))
  return (
    <section>
      {renderPosts}
    </section>
  )
}

export default PostsLists