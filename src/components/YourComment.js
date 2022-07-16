import React, { useState } from 'react';

function YourComment({ data, deleteComment }) {
  const [isRedHearted, setIsRedHearted] = useState(false);

  const changeHeart = () => {
    setIsRedHearted(!isRedHearted);
  };

  return (
    <div className="yourComment">
      <span className="comment">
        <strong>yourID</strong>
        <span className="realComment">{data}</span>
      </span>
      <span className="smallheart_delete">
        <i
          onClick={changeHeart}
          className={
            isRedHearted
              ? 'smallheart fa-solid fa-heart'
              : 'smallheart fa-regular fa-heart'
          }
        />
        <i onClick={deleteComment} className="delete fa-solid fa-eraser" />
      </span>
    </div>
  );
}

export default YourComment;
