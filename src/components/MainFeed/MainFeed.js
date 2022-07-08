/* eslint-disable react/destructuring-assignment */
import React from 'react';

function MainFeed(props) {
  // console.log(props.comment)
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
              <strong className="likers">duck</strong>님 외{' '}
              <strong>1000명</strong>이 좋아합니다
            </span>
          </div>
          <div className="myComment">
            <strong>jeongeuni___</strong>&nbsp;&nbsp;나의 사랑 다콩이 드디어
            접선...<span className="weight">&nbsp;더 보기</span>
          </div>
        </div>

        {props.comment.map((data, i) => {
          return <YourComment key={i} data={data} index={i} />;
        })}

        <div className="clockFlow">
          <span className="weight">1시간 전</span>
        </div>
      </div>
    </article>
  );
}

function YourComment() {
  return (
    <div className="yourComment">
      <span className="comment">
        <strong>yourID</strong>
        <span className="realComment">댓글을 달고 있습니다.</span>
      </span>
      <span className="smallheart_delete">
        <i className="smallheart fa-regular fa-heart" />
        <i className="delete fa-solid fa-eraser" />
      </span>
    </div>
  );
}

export default MainFeed;
