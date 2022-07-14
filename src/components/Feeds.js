/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import YourComment from './YourComment';

function Feeds({ feedData }) {
  const [value, setValue] = useState('');
  const [comment, setComment] = useState([]);

  const getInputValue = e => {
    setValue(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    const copyComment = [...comment];
    if (value.length < 1) {
      alert('댓글을 입력해주세요');
    } else {
      copyComment.push(value);
      setComment(copyComment); //copyComment로 comment 계속 업데이트 해주기.
      setValue('');
    }
  };

  return (
    <div className="feeds">
      <article className="mainFeed">
        <div className="mainFeedBar">
          <img src={feedData.avatarImg} alt="circleimg" />
          <span>
            <strong>{feedData.avatarName}</strong>
          </span>
          <i className="fa-solid fa-ellipsis" />
        </div>
        <div className="mainFeedImg">
          <img src={feedData.feedImg} alt="mainfeedimg" />
        </div>
        <div className="mainFeedContents">
          <div className="contentsIcons">
            <span className="contentsIconsLeft">
              <i className="fa-solid fa-heart" />
              <i className="fa-regular fa-comment" />
              <i className="fa-solid fa-arrow-up-from-bracket" />
            </span>
            <span className="contentsIconsRight">
              <i className="fa-regular fa-bookmark" />
            </span>
          </div>
          <div className="contentsComments">
            <div className="like">
              <img src="/images/jeongeunNoh/img3.jpeg" alt="" />
              <span className="likeComment">
                <strong className="likers">duck</strong>님 외
                <strong>&nbsp;1000명</strong>이 좋아합니다
              </span>
            </div>
            <div className="myComment">
              <strong>{feedData.avatarName}</strong>&nbsp;&nbsp;
              {feedData.content}
              <span className="weight">&nbsp;더 보기</span>
            </div>
          </div>

          <div className="yourComment">
            <span className="comment">
              <strong>{feedData.friendName}</strong>
              <span className="realComment">{feedData.friendComment}</span>
            </span>
            <span className="smallheart_delete">
              <i
                onClick={e => {
                  e.target.classList.replace('fa-regular', 'fa-solid');
                }}
                className="smallheart fa-regular fa-heart"
              />
              <i className="delete fa-solid fa-eraser" />
            </span>
          </div>

          {comment.map((data, i) => {
            return (
              <YourComment
                key={data + i}
                data={data}
                deleteComment={() => {
                  let copyComment = [...comment];
                  copyComment.splice(i, 1);
                  setComment(copyComment);
                }}
              />
            );
          })}

          <div className="clockFlow">
            <span className="weight">1시간 전</span>
          </div>
        </div>
      </article>

      <form className="mainFeedComment" onSubmit={addComment}>
        <input
          className="inputComment"
          type="text"
          placeholder="댓글 달기..."
          value={value}
          onChange={getInputValue}
        />
        <input type="submit" className="inputSubmit" value="게시" />
      </form>
    </div>
  );
}

export default Feeds;
