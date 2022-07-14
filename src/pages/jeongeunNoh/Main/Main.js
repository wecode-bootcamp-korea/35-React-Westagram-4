/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import './Main.scss';
import Feeds from '../../../components/Feeds';

function MainJeongEun() {
  const [feedData, setFeedData] = useState([]);
  const [storyData, setStoryData] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedData(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/storyData.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setStoryData(data);
      });
  }, []);

  return (
    <main>
      <div className="feed">
        {feedData.map(feedData => {
          return <Feeds key={feedData.id} feedData={feedData} />;
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
            {storyData.map(storyData => {
              return <Story key={storyData.id} storyData={storyData} />;
            })}
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

function Story(props) {
  return (
    <div className="story">
      <img src={props.storyData.img} alt="myInsta" />
      <div className="storyId">
        <p>
          <strong>{props.storyData.userId}</strong>
        </p>
        <p className="weight">{props.storyData.userName}</p>
      </div>
    </div>
  );
}
export default MainJeongEun;
