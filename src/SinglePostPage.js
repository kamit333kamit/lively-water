import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

import { useParams } from "react-router";

function SinglePostPage() {
  const [post, setpost] = useState({});

  let params = useParams();
  let navigate = useNavigate();
  let handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    // console.log(params.id);
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((post) => setpost(post))
      .catch((err) => console.log(err));

    return () => {
      // return;
    };
  }, [params]);

  return (
    <div className={"post-container"}>
      <div className={"buttons-container"}>
        <button onClick={handleClick}>Go Back</button>
      </div>
      <div className={"single-post"}>
        <h3>{post.title}</h3>

        <p className={"single-post-title"}>{post.body}</p>
      </div>
    </div>
  );
}

export default SinglePostPage;
