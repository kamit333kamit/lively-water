import React from "react";
import { Link, useNavigate } from "react-router";

function ListItem({ post }) {
  let navigate = useNavigate();
  let handleClick = (id) => {
    navigate(`${id}`);
  };

  return (
    <div onClick={() => handleClick(post.id)} className={"single-item"}>
      <h3>{post.title}</h3>

      <p>{post.body}</p>
    </div>
  );
}

export default ListItem;
