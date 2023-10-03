import { useSelector } from "react-redux";
import PostsForm from "./features/postsForm/PostsForm";


function App() {
  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <>
    <PostsForm/>
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
