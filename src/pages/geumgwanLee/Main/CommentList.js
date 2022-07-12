import React, { useState } from 'react';

const CommentList = props => {
  const [like, likeRed] = useState('♡');
  const { user, userName } = props;
  const { comment, userComment } = props;
  return (
    <div className="useCommentBox">
      <p value={user} className="userName">
        {userName}
      </p>
      <div value={comment} className="userComment">
        {userComment}
      </div>
      <p
        className="userHeart"
        onClick={() => {
          likeRed('❤️');
        }}
      >
        {like}
      </p>
    </div>
  );
};

export default CommentList;
