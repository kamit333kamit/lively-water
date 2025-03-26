import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

function AllPosts() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((posts) => setposts(posts.posts))
      .catch((err) => console.log(err));

    return () => {
      return;
    };
  }, []);

  //   console.log(posts);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => {
        return <ListItem key={post.id} post={post}></ListItem>;
      })}
    </div>
  );
}

export default AllPosts;
