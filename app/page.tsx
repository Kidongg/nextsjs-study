import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

const BlogPosts = async () => {
  unstable_noStore();

  const res = await fetch("https://api.vercel.app/blog");
  // console.log("res: ", res);
  const posts = await res.json();
  // console.log("posts: ", posts);

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

const Home = () => {
  return (
    <section>
      <h1>My blog</h1>
      <Suspense fallback={"Loading..."}>
        <BlogPosts />
      </Suspense>
    </section>
  );
};

export default Home;
