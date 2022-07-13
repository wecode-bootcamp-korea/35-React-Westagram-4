/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Main.scss';

function MainJaeHong() {
  return (
    <div className="mainJaeHong">
      <header>
        <nav>
          <div className="navLogo">
            <i className="fa-brands fa-instagram" />
            <h1 className="vertical">|</h1>
            <h1 className="logoHead">Instagram</h1>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass" />
            <input type="text" className="searchBlank" placeholder="검색" />
          </div>
          <div className="navIcon">
            <img
              alt=""
              className="navExplore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt=""
              className="navHeart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt=""
              className="navPerson"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
      </header>
      <main>
        <div className="feeds">
          <article>
            <div className="articleTop">
              <div className="articleTopLeft">
                <img
                  alt=""
                  className="thumbnailUploader"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                />
                <div className="idLocation">
                  <strong>wecode_bootcamp</strong>
                  <span>wecode-위코드</span>
                </div>
              </div>
              <img alt="" src="/images/jaehongChoi/dots.png" className="dots" />
            </div>
            <div className="articleMid">
              <img
                alt=""
                src="/images/jaehongChoi/westagramview.jpg"
                className="mainPicture"
              />
            </div>
            <div className="articleBottom1">
              <div className="articleBottomIconLeft">
                <img
                  alt=""
                  src="/images/jaehongChoi/heart.png"
                  className="like"
                />
                <img
                  alt=""
                  src="/images/jaehongChoi/speech-bubble.png"
                  className="speechBubble"
                />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <i className="fa-regular fa-bookmark" />
            </div>
            <div className="articleBottom2">
              <div className="likePeople">
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="flower"
                />
                <strong>wecodewecode</strong>
                <span>님</span>
                <strong>&nbsp; 외 10명</strong>
                <span>이 좋아합니다</span>
              </div>
              <div className="idContent">
                <div className="uploader">
                  <strong>wewecoco</strong>
                  <span>바다가 멋있었쪙</span>
                </div>
                <div id="alreadyWritten">
                  <strong className="commentUser">weCoder</strong>
                  <span className="commentMsg">진짜 멋있었쪙?</span>
                </div>
                <ReplyFunction />
              </div>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="id-right">
            <img
              alt=""
              className="thumbnailUploaderRight"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            />
            <div className="idLocationRight">
              <strong>wecode_bootcamp</strong>
              <span>wecode-위코드</span>
            </div>
          </div>
          <div className="story">
            <div className="storyword">
              <span>스토리</span>
              <strong>모두보기</strong>
            </div>
            <div className="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="storyflower"
                />
              </div>
              <div className="story-1word">
                <strong>35thwewe</strong>
                <span className="jobspan">2시간 전</span>
              </div>
            </div>
            <div className="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="storyflower"
                />
              </div>
              <div className="story-1word">
                <strong>35thwewe</strong>
                <span className="jobspan">1시간 전</span>
              </div>
            </div>
            <div className="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="storyflower"
                />
              </div>
              <div className="story-1word">
                <strong>35thwewe</strong>
                <span className="jobspan">4시간 전</span>
              </div>
            </div>
            <div className="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="storyflower"
                />
              </div>
              <div className="story-1word">
                <strong>35thwewe</strong>
                <span className="jobspan">3시간 전</span>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="recomword">
              <span>회원님을 위한 추천</span>
              <strong>모두보기</strong>
            </div>
            <div className="recom1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="recomflower"
                />
              </div>
              <div className="recom1word">
                <strong>35thwewe</strong>
                <span className="jobspan">회원님을 팔로우합니다</span>
              </div>
              <span className="followbtn">팔로우</span>
            </div>
            <div className="recom1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="recomflower"
                />
              </div>
              <div className="recom1word">
                <strong>35thwewe</strong>
                <span className="jobspan">회원님을 팔로우합니다</span>
              </div>
              <span className="followbtn">팔로우</span>
            </div>
            <div className="recom1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  className="recomflower"
                />
              </div>
              <div className="recom1word">
                <strong>35thwewe</strong>
                <span className="jobspan">회원님을 팔로우합니다</span>
              </div>
              <span className="followbtn">팔로우</span>
            </div>
          </div>
          <div className="customerSupport">
            <p>
              Instagram 정보·지원·홍보 센터·API·채용
              정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
            </p>
            <p>ⓒ 2019 INSTAGRAM</p>
          </div>
        </div>
      </main>
    </div>
  );
}

const ReplyFunction = () => {
  const [comment, setComment] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleCommentInput = event => {
    setComment(event.target.value);
    if (!!event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    fetch('data/inputData.json')
      .then(res => res.json())
      .then(data => {
        setCommentArray(data);
      });
  }, []);

  const NewComment = ({ comment, userid }) => {
    return (
      <div className="replyUserDiv">
        <div className="userComment">
          <strong>{userid}</strong>
          <p className="onSubmitComment">{comment}</p>
        </div>
        <div className="likeDelete">
          <img className="likeBtn" src="images/jaehongChoi/heart.png" alt="" />
        </div>
      </div>
    );
  };

  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    // setCommentArray.push(newComment());
    setCommentArray([
      ...commentArray,
      { id: commentArray.length + 1, userid: 'rrr', text: comment },
    ]);
    setComment('');
  };

  return (
    <>
      <div className="commentPlus">
        {commentArray.map(commentItem => (
          <NewComment
            userid={commentItem.userid}
            comment={commentItem.text}
            key={commentItem.id}
          />
        ))}
      </div>
      <div className="typeComment">
        <input
          className="replyContent"
          type="text"
          placeholder="댓글 달기..."
          onChange={handleCommentInput}
          value={comment}
        />
        <span>
          <button
            className={isActive ? 'activatedBtn' : 'unactivatedBtn'}
            type="submit"
            onClick={onSubmit}
            disabled={!isActive}
          >
            게시
          </button>
        </span>
      </div>
    </>
  );
};

export default MainJaeHong;
