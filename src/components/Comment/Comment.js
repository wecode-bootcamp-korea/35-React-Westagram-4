import React from 'react';

export default function Comment(props) {
  return props.commentList.map(function (a, i) {
    return (
      <div className="create-comment" key={i}>
        <div className="new-comment">
          <span className="user-id">ID</span>
          <span className="user-comment">{a}</span>
        </div>
        <div className="delete-heart">
          <i className="fa-regular fa-heart" />
          <i className="fa-solid fa-trash" />
        </div>
      </div>
    );
  });
}
