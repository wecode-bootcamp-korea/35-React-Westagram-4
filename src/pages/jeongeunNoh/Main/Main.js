/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import './Main.scss';
// import Feeds from '../../../components/Feeds';

function MainJeongEun(props) {
  const [value, setValue] = useState('');
  const [comment, setComment] = useState([]);
  const [feedData, setFeedData] = useState([]);

  const getInputValue = e => {
    setValue(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    const copyComment = [...comment]; //[인풋값들이 담겨있음]
    if (value.length < 1) {
      alert('댓글을 입력해주세요');
    } else {
      copyComment.push(value); //value = e.target.value를 []에 넣어주는 중
      // console.log('copyComment : ', copyComment); //copyComment = [value, value, value]
      setComment(copyComment); //copyComment로 comment 계속 업데이트 해주기.
      // console.log('comment : ', comment); // comment = [value, value, value]
      setValue('');
    }
  };

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedData(data);
      });
  }, []);

  return (
    <main>
      <div className="feed">
        {feedData.map(feedData => {
          return (
            // <Feeds  key={feedData.id} feedData={feedData}/>
            <div key={feedData.id} className="feeds">
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
                      <span className="realComment">
                        {feedData.friendComment}
                      </span>
                    </span>
                    <span className="smallheart_delete">
                      <i
                        onClick={e => {
                          e.target.classList.replace('fa-regular', 'fa-solid');
                        }}
                        className="smallheart fa-regular fa-heart"
                      />
                      <i
                        onClick={props.deleteComment}
                        className="delete fa-solid fa-eraser"
                      />
                    </span>
                  </div>

                  {comment.map((data, i) => {
                    return (
                      <YourComment
                        key={i}
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
        })}
      </div>

      <div className="mainRight">
        <div className="myInsta">
          <img src="/images/jeongeunNoh/myInsta.jpeg" alt="myInsta" />
          <div className="myId">
            <p>
              <strong>jeongeuni__</strong>
            </p>
            <p className="weight">노정은</p>
          </div>
        </div>

        <div className="storyBox">
          <div className="storysVar">
            <span className="weight">스토리</span>
            <span>
              <strong>모두 보기</strong>
            </span>
          </div>

          <div className="storys">
            <div className="story">
              <img src="/images/jeongeunNoh/right1.jpeg" alt="myInsta" />
              <div className="storyId">
                <p>
                  <strong>jeongeuni__</strong>
                </p>
                <p className="weight">노정은</p>
              </div>
            </div>
            <div className="story">
              <img src="/images/jeongeunNoh/right2.jpeg" alt="myInsta" />
              <div className="storyId">
                <p>
                  <strong>jeongeuni__</strong>
                </p>
                <p className="weight">노정은</p>
              </div>
            </div>
            <div className="story">
              <img src="/images/jeongeunNoh/right3.jpeg" alt="myInsta" />
              <div className="storyId">
                <p>
                  <strong>jeongeuni__</strong>
                </p>
                <p className="weight">노정은</p>
              </div>
            </div>
            <div className="story">
              <img src="/images/jeongeunNoh/right4.jpeg" alt="myInsta" />
              <div className="storyId">
                <p>
                  <strong>jeongeuni__</strong>
                </p>
                <p className="weight">노정은</p>
              </div>
            </div>
          </div>
        </div>

        <div className="freindRecommendBox">
          <div className="recommendVar">
            <span className="weight">회원님을 위한 추천</span>
            <span>
              <strong>모두 보기</strong>
            </span>
          </div>
          <div className="recommendPeopel">
            <img src="/images/jeongeunNoh/right5.jpeg" alt="myInsta" />
            <div className="recommendId">
              <p>
                <strong>jeongeuni__</strong>
              </p>
              <p className="weight">_legend_a님 외 2명이...</p>
            </div>
            <span className="follow">팔로우</span>
          </div>

          <div className="recommendPeopel">
            <img src="/images/jeongeunNoh/right6.jpeg" alt="myInsta" />
            <div className="recommendId">
              <p>
                <strong>jeongeuni__</strong>
              </p>
              <p className="weight">ringo.in.seoul님 외 12...</p>
            </div>
            <span className="follow">팔로우</span>
          </div>

          <div className="recommendPeopel">
            <img src="/images/jeongeunNoh/right7.jpeg" alt="myInsta" />
            <div className="recommendId">
              <p>
                <strong>jeongeuni__</strong>
              </p>
              <p className="weight">jimmtlee1220님 외 1...</p>
            </div>
            <span className="follow">팔로우</span>
          </div>
        </div>

        <div className="footer">
          <p>instagram 정보 ・ 지원 ・ 홍보 센터 ・ API ・ </p>
          <p>채용 정보 ・ 개인정보처리방침 ・ 약관 ・ </p>
          <p>디렉터리 ・ 프로필 ・ 해시태그 ・ 언어 </p>
          <br />
          <p>© 2019 INSTAGRAM</p>
        </div>
      </div>
    </main>
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

export default MainJeongEun;
