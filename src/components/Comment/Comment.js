import React, { useState } from 'react';

export default function Comment() {
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const updateComment = ({ target }) => {
    setCommentValue(target.value);
  };
  const commentValueCheck = commentValue.length > 0;
  const pushComment = e => {
    if (commentValueCheck && (e.key === 'Enter' || e.type === 'click')) {
      setCommentList([...commentList, commentValue]);
      setCommentValue('');
    }
  };

  return (
    <>
      <div className="article-comment">
        <div className="article-comment-like">
          <div className="article-imgbox">
            <img src="/images/ikhyunKim/commet1.jpg" alt="" />
          </div>
          <p>
            <strong>aineworld</strong>님 <strong>외 10명</strong>이 좋아합니다
          </p>
        </div>
        <div className="comment-id-comment">
          <p style={{ fontWeight: 'bold' }} className="user-id1">
            canon_mj
          </p>
          <p className="user-commnet">위워크에서 진행한 베이킹 클래스...</p>
          <p className="more-info" style={{ color: 'gray' }}>
            더 보기
          </p>
        </div>
        <div className="comment-id-comment">
          <p style={{ fontWeight: 'bold' }} className="user-id2">
            neceosecius
          </p>
          <p className="user-commnet">거봐 좋았잖아~~~~~🙆🏻‍♀️</p>
        </div>
        <div className="create-comment-div">
          {commentList.map(function (a, i) {
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
          })}
        </div>
      </div>
      <div className="comment-submit">
        <input
          className="comment"
          type="text"
          placeholder="댓글 달기..."
          onChange={updateComment}
          onKeyUp={pushComment}
          value={commentValue}
        />
        <input
          className="submit"
          type="submit"
          value="게시"
          style={commentValueCheck ? { opacity: 1 } : { opacity: '' }}
          onClick={pushComment}
        />
      </div>
    </>
  );
}
