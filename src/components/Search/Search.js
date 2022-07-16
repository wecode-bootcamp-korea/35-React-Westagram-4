import React, { useState } from 'react';
import './Search.scss';

function Search({ userSearchData }) {
  const [makeSearchWindow, setMakeSearchWindow] = useState('none');

  const updateSearchWindow = () => {
    makeSearchWindow === 'none'
      ? setMakeSearchWindow('flex')
      : setMakeSearchWindow('none');
  };

  const [userInput, setUserInput] = useState('');
  const updateUserInput = ({ target }) => {
    const inputValue = target.value;
    setUserInput(inputValue);
  };

  const filterUserData = userSearchData.filter(user => {
    return user.id.includes(userInput);
  });

  return (
    <div className="nav-search">
      <input
        className="search-bar"
        onClick={updateSearchWindow}
        type="text"
        placeholder="🔍 검색"
        onChange={updateUserInput}
      />
      <div className="search-info" style={{ display: makeSearchWindow }}>
        {filterUserData.length > 0 ? (
          filterUserData.map(userData => {
            return (
              <div className="info-box" key={userData.key}>
                <div className="search-info-imgbox">
                  <img className="search-icon" src={`${userData.img}`} alt="" />
                </div>
                <div className="search-info-idandnick">
                  <div className="search-info-id">{userData.id}</div>
                  <div className="search-info-nickname">
                    {userData.nickname}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="info-box" style={{ justifyContent: 'center' }}>
            <div className="search-info-imgbox">
              <img
                className="search-icon"
                src="/images/ikhyunKim/search-img.png"
                alt=""
              />
            </div>
            <div className="search-info-idandnick">
              <p className="search-info-first">
                검색결과 일치하는 <br /> 결과가 없습니다.
              </p>
            </div>
          </div>
        )}
        {/* <div className="info-box">
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
        </div> */}
      </div>
    </div>
  );
}

export default Search;
