import React, { Suspense } from "react";
import PostList from "../components/PostList";

const PostsPage = async () => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default PostsPage;
