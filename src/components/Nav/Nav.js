import React, { useState } from 'react';
import './Nav.scss';
function Nav() {
  const [makeUserWindow, setMakeUserWindow] = useState('none');
  const [makeSearchWindow, setMakeSearchWindow] = useState('none');

  const updateUserWindow = () => {
    makeUserWindow === 'none'
      ? setMakeUserWindow('flex')
      : setMakeUserWindow('none');
  };

  const updateSearchWindow = () => {
    makeSearchWindow === 'none'
      ? setMakeSearchWindow('flex')
      : setMakeSearchWindow('none');
  };

  return (
    <div className="nav">
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
        <div className="nav-search" onClick={updateSearchWindow}>
          <input className="search-bar" type="text" placeholder="🔍 검색" />
          <div className="search-info" style={{ display: makeSearchWindow }}>
            <div className="info-box">
              <div className="search-info-imgbox">
                <img
                  className="search-icon"
                  src="/images/ikhyunKim/search-img.png"
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
              onClick={updateUserWindow}
              className="user-icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
            />
            <div className="user-info" style={{ display: makeUserWindow }}>
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
    </div>
  );
}

export default Nav;
