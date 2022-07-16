import React from 'react';
import './Main.scss';

import Feeds from './feeds/feeds';
function MainIkHyun() {
  return (
    <div className="main">
      <main>
        <div className="feeds">
          <Feeds />
        </div>
        <div className="main-right">
          <div className="wecode-top">
            <div className="wecode-logo">
              <img src="/images/ikhyunKim/3.png" alt="" />
            </div>
            <div className="wecode-name">
              <p className="wecode-bootcamp">wecode bootcamp</p>
              <p className="wecode-tag">WeCode | 위코드</p>
            </div>
          </div>
          <div className="main-right-story">
            <div className="story-main">
              <div className="story-top">
                <p className="story-top-gray">스토리</p>
                <p className="story-top-black">모두 보기</p>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images//ikhyunKim/storty1.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p className="story-name-id">_yum_s</p>
                  <p className="story-name-time">16분전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story2.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p className="story-name-id">drink_eat_drink</p>
                  <p className="story-name-time">3시간전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story3.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p className="story-name-id">hyukyc</p>
                  <p className="story-name-time">20시간전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story4.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p className="story-name-id">jminkeek</p>
                  <p className="story-name-time">1일전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story5.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p className="story-name-id">_yum_s</p>
                  <p className="story-name-time">2일전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="recommend-top">
              <p className="recommend-top-gray">회원님을 위한 추천</p>
              <p className="recommend-top-black">모두 보기</p>
            </div>
            <div className="recommendimg-and-name">
              <div className="recommend-imgbox">
                <img src="/images/ikhyunKim/recommend1.jpg" alt="" />
              </div>
              <div className="recommend-name">
                <p className="recommend-name-id">joaaaaaahye</p>
                <p className="recommend-name-plus">_legend_a님 외 2명이 ...</p>
              </div>
              <div className="recommend-follow">팔로우</div>
            </div>
            <div className="recommendimg-and-name">
              <div className="recommend-imgbox">
                <img src="/images/ikhyunKim/recommend2.jpg" alt="" />
              </div>
              <div className="recommend-name">
                <p className="recommend-name-id">rampart81</p>
                <p className="recommend-name-plus">ringo.in.seoul님 외 12...</p>
              </div>
              <div className="recommend-follow">팔로우</div>
            </div>
            <div className="recommendimg-and-name">
              <div className="recommend-imgbox">
                <img src="/images/ikhyunKim/recommend3.jpg" alt="" />
              </div>
              <div className="recommend-name">
                <p className="recommend-name-id">shawnjjoo</p>
                <p className="recommend-name-plus">jimmylee1220님 외 1...</p>
              </div>
              <div className="recommend-follow">팔로우</div>
            </div>
          </div>
          <p className="westagram-info">
            Westagram 정보 . 지원 . 홍보 센터 . API . <br />
            채용정보 . 개인정보처리방침 . 약관 . <br />
            디렉터리 . 프로필 . 해시태그 . 언어 <br />
            <br />@ 2022 WESTAGRAM
          </p>
        </div>
      </main>
      <footer className="nav-footer">
        <i className="fa-solid fa-house" />
        <i className="fa-solid fa-magnifying-glass" />
        <i className="fa-solid fa-clapperboard" />
        <i className="fa-solid fa-bag-shopping" />
        <i className="fa-solid fa-circle-user" />
      </footer>
    </div>
  );
}
export default MainIkHyun;
