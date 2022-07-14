import React, { useState, useEffect } from 'react';
import Comment from '../comment/Comment';
import './feeds.scss';

function Feeds() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('data/data.json')
      .then(response => response.json())
      .then(result => setUserData(result));
  }, []);
  return (
    <>
      {userData.map((a, i) => {
        return (
          <article className="article" key={i}>
            <div className="article-top">
              <div className="logo-and-name">
                <div className="article-logobox">
                  <img src={a.img} alt="" />
                </div>
                <p>{a.id}</p>
                <p>{a.nickname}</p>
              </div>
              <i id="article-more" className="fa-solid fa-ellipsis" />
            </div>
            <div className="article-main-imgbox">
              <img src={a.img} alt="" />
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
        );
      })}
    </>
  );
}
export default Feeds;
