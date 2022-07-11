import React, { useState } from 'react';
import './Main.scss';
import MainFeed from '../../../components/MainFeed/MainFeed';

function MainJeongEun() {
  let [value, setValue] = useState('');
  let [comment, setComment] = useState([]);

  const getInputValue = e => {
    setValue(e.target.value);
  };

  // onKeyPress로 했을 때
  // const addComment = e => {
  //   if (e.key === 'Enter') {
  //     const copyComment = [...comment];
  //     copyComment.push(value);
  //     setComment(copyComment);
  //     setValue('');
  //     e.preventDefault();
  //   }
  // };

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

  return (
    <main>
      <div className="feeds">
        {/* 이렇게하면 MainFeed가 댓글 수 만큼 생성됨 */}
        {/* {comment.map((data, i) => {
          return <MainFeed key={i} data={data} />
        })} */}

        {/* comment = [value, value, value] */}
        <MainFeed comment={comment} setComment={setComment} />

        <form className="mainFeedComment" onSubmit={addComment}>
          <input
            className="inputComment"
            type="text"
            placeholder="댓글 달기..."
            value={value}
            onChange={getInputValue}
            // onKeyPress={addComment}
          />
          <input type="submit" className="inputSubmit" value="게시" />
        </form>
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

export default MainJeongEun;
