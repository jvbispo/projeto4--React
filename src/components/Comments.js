import React from "react";

function Comments({ key, img, name, content }) {
  return (
    <div class="postComments">
      <img src={img} alt="" />
      <p>
        <strong>{name}</strong> {content}
      </p>
    </div>
  );
}

export default Comments;
