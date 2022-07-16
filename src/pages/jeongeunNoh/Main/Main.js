/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Feeds from '../../../components/Feeds';
import Story from './Story';
import Recommendation from './Recommendation';
import './Main.scss';

function MainJeongEun() {
  // mock data를 생활화하자, 반복되는 구조는 최대한 줄이자.
  const [feedData, setFeedData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [recommendationData, setRecommendationData] = useState([]);

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
        setStoryData(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/recommendationData.json')
      .then(res => res.json())
      .then(data => {
        setRecommendationData(data);
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
          {recommendationData.map(recommendationData => {
            return (
              <Recommendation
                key={recommendationData.id}
                recommendationData={recommendationData}
              />
            );
          })}
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
