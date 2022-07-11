/* eslint-disable react/destructuring-assignment */
import React from 'react';

function MainFeed(props) {
  return (
    <article className="mainFeed">
      <div className="mainFeedBar">
        <img src="/images/jeongeunNoh/img1.jpeg" alt="circleimg" />
        <span>
          <strong>jeongeuni___</strong>
        </span>
        <i className="fa-solid fa-ellipsis" />
      </div>
      <div className="mainFeedImg">
        <img src="/images/jeongeunNoh/img2.jpeg" alt="mainfeedimg" />
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
            <strong>jeongeuni___</strong>&nbsp;&nbsp;나의 사랑 다콩이 드디어
            접선...<span className="weight">&nbsp;더 보기</span>
          </div>
        </div>
        {props.comment.map((data, i) => {
          return (
            <YourComment
              key={i}
              data={data}
              deleteComment={() => {
                let copyComment = [...props.comment];
                copyComment.splice(i, 1);
                props.setComment(copyComment);
              }}
              // changeRedHeart={() => {
              //   let copyComment = [...props.comment];
              //   copyComment.classList.replace('fa-regular', 'fa-solid');
              //   props.setComment(copyComment);
              // }}
            />
          );
        })}
        <div className="clockFlow">
          <span className="weight">1시간 전</span>
        </div>
      </div>
    </article>
  );
}

function YourComment(props) {
  return (
    <div className="yourComment">
      <span className="comment">
        <strong>yourID</strong>
        <span className="realComment">{props.data}</span>
      </span>
      <span className="smallheart_delete">
        <i
          onClick={e => {
            e.target.classList.replace('fa-regular', 'fa-solid');
            console.log(e.target);
          }}
          className="smallheart fa-regular fa-heart"
        />
        <i
          onClick={props.deleteComment}
          className="delete fa-solid fa-eraser"
        />
      </span>
    </div>
  );
}

export default MainFeed;