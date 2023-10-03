import { useSelector } from "react-redux";
import PostForm from "./features/postForm/PostForm";

function App() {
  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <>
    <PostForm/>
    <section>
      {posts.map((post) => (
        <article key={post.id}>
        <h3>{post.title}</h3>
      </article>
      ))}
    </section>
      </>
  );
}

export default App;
