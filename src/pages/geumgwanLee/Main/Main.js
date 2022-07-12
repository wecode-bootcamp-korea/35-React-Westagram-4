import React, { useState } from 'react';
import CommentList from './CommentList.js';
import Story from './Story';
import { RECO_LIST } from './recoData';
import './Main.scss';

function MainGeumGwan() {
  // 첫번째 게시물 댓글달기
  const [commentInput, setComment] = useState('');
  const onChange = event => {
    const { value } = event.target;
    setComment(value);
  };
  const [userName] = useState('IamGroot');
  const [feedComments, setFeedComments] = useState([]);
  const post = e => {
    e.preventDefault();
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(commentInput);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  function Reco() {
    return RECO_LIST.map(info => {
      return (
        <div key={info.id} className="reco-boxline">
          <img src="/images/geumgwanLee/bts.png" alt="profile" />
          <div className="reco-boxIdMutual">
            <div className="textbold">BTS_Official</div>
            <div className="textlight">gold_en님 외 2명이 팔로우합니다</div>
          </div>
          <div className="followbutton">팔로우</div>
        </div>
      );
    });
  }

  return (
    <div classNameName="body">
      <div className="main">
        <section>
          <div className="feeds">
            <article className="article1">
              <div className="article-nav">
                <img
                  className="article-profileImg"
                  src="/images/geumgwanLee/pro.png"
                  alt="profile"
                />
                <span className="article-profileText">gc__eric</span>
                <i className="fa-solid fa-ellipsis" />
              </div>
              <div className="article-feedover">
                <img
                  className="article-feedImg"
                  src="/images/geumgwanLee/ggo.png"
                  alt="profile"
                />
              </div>
              <div className="article-iconsFlex">
                <i className="fa-solid fa-heart" />
                <i className="fa-regular fa-comment" />
                <i className="fa-regular fa-paper-plane" />
                <i className="fa-regular fa-bookmark" />
              </div>
              <div className="article-undercontainer">
                <div className="article-like">
                  <img src="/images/geumgwanLee/pro.png" alt="profile" />
                  <span>
                    <span className="textbold">WeCode</span>님 외
                    <span className="textbold">705명</span>이 좋아합니다
                  </span>
                </div>
                <div className="article-discription">
                  <span className="textbold">gc__eric</span>
                  위코드 35기 화이팅~~~...
                  <span className="textlight">더보기</span>
                  <div className="comment">
                    <span className="textbold">Wecode_bootcamp</span>
                    화이팅~~
                    <span className="rightheart">♡</span>
                  </div>
                </div>
                <div id="comments">
                  {feedComments.map((commentArr, i) => {
                    return (
                      <CommentList
                        userName={userName}
                        userComment={commentArr}
                        key={i}
                      />
                    );
                  })}
                </div>
                <div className="article-time">55분 전</div>
              </div>
              <form className="comment-write">
                <input
                  name="commentInput"
                  type="text"
                  value={commentInput}
                  placeholder="댓글 달기..."
                  onChange={onChange}
                />
                <button disabled={!commentInput} onClick={post}>
                  게시
                </button>
              </form>
            </article>
          </div>
        </section>
        <section>
          <div className="main-right">
            <div className="right-nav">
              <img src="/images/geumgwanLee/me.png" alt="profile" />
              <div className="right-navtext">
                <div className="textbold">gc__eric</div>
                <div className="textlight">WeCodeㅣ위코드</div>
              </div>
            </div>
            <div className="right-storybox">
              <div className="right-storyboxnav">
                <div className="textlight">스토리</div>
                <div className="textbold">모두 보기</div>
              </div>
              <div className="storiesall">
                <Story />
              </div>
            </div>

            <div className="recommendation-box">
              <div className="right-storyboxnav">
                <div className="textlight">회원님을 위한 추천</div>
                <div className="textbold">모두 보기</div>
              </div>
              <Reco />
              <div className="footer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainGeumGwan;
