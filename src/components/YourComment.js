import React from 'react';

function YourComment({ data, deleteComment }) {
  return (
    <div className="yourComment">
      <span className="comment">
        <strong>yourID</strong>
        <span className="realComment">{data}</span>
      </span>
      <span className="smallheart_delete">
        <i
          onClick={e => {
            e.target.classList.replace('fa-regular', 'fa-solid');
          }}
          className="smallheart fa-regular fa-heart"
        />
        <i onClick={deleteComment} className="delete fa-solid fa-eraser" />
      </span>
    </div>
  );
}

export default YourComment;
