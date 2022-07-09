import React from 'react';
import './Main.scss';
import Comment from '../../../components/Comment/Comment';

function MainIkHyun() {
  return (
    <div className="main">
      <main>
        <div className="feeds">
          <article className="article">
            <div className="article-top">
              <div className="logo-and-name">
                <div className="article-logobox">
                  <img src="/images/ikhyunKim/1.JPG" alt="" />
                </div>
                <p>ik_hyun2</p>
              </div>
              <i id="article-more" className="fa-solid fa-ellipsis" />
            </div>
            <div className="article-main-imgbox">
              <img src="/images/ikhyunKim/IMG_3572.JPG" alt="" />
            </div>
            <div className="article-icon-bar">
              <div className="article-icon">
                <i className="fa-solid fa-heart" style={{ color: 'red' }} />
                <i className="fa-regular fa-comment" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <i className="fa-regular fa-bookmark" />
            </div>
            <Comment />
          </article>
          <article className="article">
            <div className="article-top">
              <div className="logo-and-name">
                <div className="article-logobox">
                  <img src="/images/ikhyunKim/1.JPG" alt="" />
                </div>
                <p>ik_hyun2</p>
              </div>
              <i id="article-more" className="fa-solid fa-ellipsis" />
            </div>
            <div className="article-main-imgbox">
              <img src="/images/ikhyunKim/IMG_2923.JPG" alt="" />
            </div>
            <div className="article-icon-bar">
              <div className="article-icon">
                <i className="fa-solid fa-heart" style={{ color: 'red' }} />
                <i className="fa-regular fa-comment" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <i className="fa-regular fa-bookmark" />
            </div>
            <Comment />
          </article>
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
                  <p style={{ fontWeight: 'bold' }}>_yum_s</p>
                  <p style={{ color: 'gray' }}>16분전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story2.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p style={{ fontWeight: 'bold' }}>drink_eat_drink</p>
                  <p style={{ color: 'gray' }}>3시간전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story3.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p style={{ fontWeight: 'bold' }}>hyukyc</p>
                  <p style={{ color: 'gray' }}>20시간전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story4.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p style={{ fontWeight: 'bold' }}>jminkeek</p>
                  <p style={{ color: 'gray' }}>1일전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="/images/ikhyunKim/story5.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p className="story-blackname" style={{ fontWeight: 'bold' }}>
                    _yum_s
                  </p>
                  <p style={{ color: 'gray' }}>2일전</p>
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
                <p style={{ fontWeight: 'bold' }}>joaaaaaahye</p>
                <p style={{ color: 'gray' }}>_legend_a님 외 2명이 ...</p>
              </div>
              <div style={{ color: 'rgba(34, 112, 214, 0.871)' }}>팔로우</div>
            </div>
            <div className="recommendimg-and-name">
              <div className="recommend-imgbox">
                <img src="/images/ikhyunKim/recommend2.jpg" alt="" />
              </div>
              <div className="recommend-name">
                <p style={{ fontWeight: 'bold' }}>rampart81</p>
                <p style={{ color: 'gray' }}>ringo.in.seoul님 외 12...</p>
              </div>
              <div style={{ color: 'rgba(34, 112, 214, 0.871)' }}>팔로우</div>
            </div>
            <div className="recommendimg-and-name">
              <div className="recommend-imgbox">
                <img src="/images/ikhyunKim/recommend3.jpg" alt="" />
              </div>
              <div className="recommend-name">
                <p style={{ fontWeight: 'bold' }}>shawnjjoo</p>
                <p style={{ color: 'gray' }}>jimmylee1220님 외 1...</p>
              </div>
              <div style={{ color: 'rgba(34, 112, 214, 0.871)' }}>팔로우</div>
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
