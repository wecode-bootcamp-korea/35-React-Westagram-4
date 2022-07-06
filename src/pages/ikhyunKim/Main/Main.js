import React from 'react';
import './Main.scss';

function MainIkHyun() {
  return (
    <div className="main">
      <nav className="navigation-bar">
        <div className="nav-fix">
          <div className="logo-title">
            <img
              className="insta-icon"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt=""
            />
            <p className="nav-title">
              <span>|</span>Westagram
            </p>
          </div>
          <div className="nav-search">
            <input className="search-bar" type="text" placeholder="🔍 검색" />
            <div className="search-info">
              <div className="info-box">
                <div className="search-info-imgbox">
                  <img
                    className="search-icon"
                    src="./images/search-img.png"
                    alt=""
                  />
                </div>
                <div className="search-info-idandnick">
                  <p className="search-info-first">검색어를 입력해주세요</p>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-icons">
            <div className="nav-icon_underdot">
              <img
                className="compass-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt=""
              />
            </div>
            <div className="nav-icon_underdot">
              <img
                className="heart-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=""
              />
            </div>
            <div className="nav-icon_underdot">
              <img
                className="user-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt=""
              />
              <div className="user-info">
                <p className="info-profile">
                  <i className="fa-regular fa-circle-user" />
                  <span>프로필</span>
                </p>
                <p className="info-saved">
                  <i className="fa-regular fa-bookmark" />
                  <span>저장됨</span>
                </p>
                <p className="info-settings">
                  <i className="fa-solid fa-gear" />
                  <span>설정</span>
                </p>
                <p className="info-logout">
                  <span className="logout">로그아웃</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article className="article">
            <div className="article-top">
              <div className="logo-and-name">
                <div className="article-logobox">
                  <img src="./images/1.JPG" alt="" />
                </div>
                <p>ik_hyun2</p>
              </div>
              <i id="article-more" className="fa-solid fa-ellipsis" />
            </div>
            <div className="article-main-imgbox">
              <img src="./images/IMG_3572.JPG" alt="" />
            </div>
            <div className="article-icon-bar">
              <div className="article-icon">
                <i className="fa-solid fa-heart" style={{ color: 'red' }} />
                <i className="fa-regular fa-comment" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <i className="fa-regular fa-bookmark" />
            </div>
            <div className="article-comment">
              <div className="article-comment-like">
                <div className="article-imgbox">
                  <img src="./images/commet1.jpg" alt="" />
                </div>
                <p>
                  <strong>aineworld</strong>님 <strong>외 10명</strong>이
                  좋아합니다
                </p>
              </div>
              <div className="comment-id-comment">
                <p style={{ fontWeight: 'bold' }} className="user-id1">
                  canon_mj
                </p>
                <p className="user-commnet">
                  위워크에서 진행한 베이킹 클래스...
                </p>
                <p className="more-info" style={{ color: 'gray' }}>
                  더 보기
                </p>
              </div>
              <div className="include-heart">
                <div className="comment-id-comment">
                  <p style={{ fontWeight: 'bold' }} className="user-id2">
                    neceosecius
                  </p>
                  <p className="user-commnet">거봐 좋았잖아~~~~~🙆🏻‍♀️</p>
                </div>
              </div>
              <div className="create-comment-div" />
              <span className="comment-time" style={{ color: 'gray' }}>
                42분 전
              </span>
            </div>
            <div className="comment-submit">
              <input
                className="comment"
                type="text"
                placeholder="댓글 달기..."
              />
              <input className="submit" type="submit" value="게시" />
            </div>
          </article>
          <article className="article">
            <div className="article-top">
              <div className="logo-and-name">
                <div className="article-logobox">
                  <img src="./images/1.JPG" alt="" />
                </div>
                <p>ik_hyun2</p>
              </div>
              <i id="article-more" className="fa-solid fa-ellipsis" />
            </div>
            <div className="article-main-imgbox">
              <img src="./images/IMG_2923.JPG" alt="" />
            </div>
            <div className="article-icon-bar">
              <div className="article-icon">
                <i className="fa-solid fa-heart" style={{ color: 'red' }} />
                <i className="fa-regular fa-comment" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <i className="fa-regular fa-bookmark" />
            </div>
            <div className="article-comment">
              <div className="article-comment-like">
                <div className="article-imgbox">
                  <img src="./images/commet1.jpg" alt="" />
                </div>
                <p>
                  <strong>aineworld</strong>님 <strong>외 10명</strong>이
                  좋아합니다
                </p>
              </div>
              <div className="comment-id-comment">
                <p style={{ fontWeight: 'bold' }} className="user-id1">
                  canon_mj
                </p>
                <p className="user-commnet">
                  위워크에서 진행한 베이킹 클래스...
                </p>
                <p className="more-info" style={{ color: 'gray' }}>
                  더 보기
                </p>
              </div>
              <div className="include-heart">
                <div className="comment-id-comment">
                  <p style={{ fontWeight: 'bold' }} className="user-id2">
                    neceosecius
                  </p>
                  <p className="user-commnet">거봐 좋았잖아~~~~~🙆🏻‍♀️</p>
                </div>
              </div>
              <div className="create-comment-div">
                <div className="new-comment" />
                <div className="delete-heart" />
              </div>
              <span className="comment-time" style={{ color: 'gray' }}>
                42분 전
              </span>
            </div>
            <div className="comment-submit">
              <input
                className="comment"
                type="text"
                placeholder="댓글 달기..."
              />
              <input className="submit" type="submit" value="게시" />
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="wecode-top">
            <div className="wecode-logo">
              <img src="./images/3.png" alt="" />
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
                  <img src="./images/storty1.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p style={{ fontWeight: 'bold' }}>_yum_s</p>
                  <p style={{ color: 'gray' }}>16분전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="./images/story2.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p style={{ fontWeight: 'bold' }}>drink_eat_drink</p>
                  <p style={{ color: 'gray' }}>3시간전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="./images/story3.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p style={{ fontWeight: 'bold' }}>hyukyc</p>
                  <p style={{ color: 'gray' }}>20시간전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="./images/story4.jpg" alt="" />
                </div>
                <div className="story-name">
                  <p style={{ fontWeight: 'bold' }}>jminkeek</p>
                  <p style={{ color: 'gray' }}>1일전</p>
                </div>
              </div>
              <div className="storyimg-and-name">
                <div className="storyimg-box">
                  <img src="./images/story5.jpg" alt="" />
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
                <img src="./images/recommend1.jpg" alt="" />
              </div>
              <div className="recommend-name">
                <p style={{ fontWeight: 'bold' }}>joaaaaaahye</p>
                <p style={{ color: 'gray' }}>_legend_a님 외 2명이 ...</p>
              </div>
              <div style={{ color: 'rgba(34, 112, 214, 0.871)' }}>팔로우</div>
            </div>
            <div className="recommendimg-and-name">
              <div className="recommend-imgbox">
                <img src="./images/recommend2.jpg" alt="" />
              </div>
              <div className="recommend-name">
                <p style={{ fontWeight: 'bold' }}>rampart81</p>
                <p style={{ color: 'gray' }}>ringo.in.seoul님 외 12...</p>
              </div>
              <div style={{ color: 'rgba(34, 112, 214, 0.871)' }}>팔로우</div>
            </div>
            <div className="recommendimg-and-name">
              <div className="recommend-imgbox">
                <img src="./images/recommend3.jpg" alt="" />
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
