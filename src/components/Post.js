import React from "react";
import Comments from "./Comments";

function Post({ key, img, name, date, content, comments }) {
  return (
    <div class="Post">
      <div class="postHeader">
        <img src={img} alt="" />
        <div class="postHeaderContent">
          <strong>{name}</strong>
          <p>{date}</p>
        </div>
      </div>

      <p class="postContent">{content}</p>

      {comments.map(comment => (
        <Comments
          key={comment.id}
          img={comment.author.avatar}
          name={comment.author.name}
          content={comment.content}
        />
      ))}
    </div>
  );
}

export default Post;
