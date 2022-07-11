import React from 'react';
import './Main.scss';
import { useState } from 'react';

function MainJaeHong() {
  return (
    <div className="mainJaeHong">
      <header>
        <nav>
          <div class="navLogo">
            <i class="fa-brands fa-instagram" />
            <h1 class="vertical">|</h1>
            <h1 class="logoHead">Instagram</h1>
          </div>
          <div class="search">
            <i class="fa-solid fa-magnifying-glass" />
            <input type="text" class="searchBlank" placeholder="검색" />
          </div>
          <div class="navIcon">
            <img
              alt=""
              class="navExplore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt=""
              class="navHeart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt=""
              class="navPerson"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
      </header>
      <main>
        <div class="feeds">
          <article>
            <div class="articleTop">
              <div class="articleTopLeft">
                <img
                  alt=""
                  class="thumbnailUploader"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                />
                <div class="idLocation">
                  <strong>wecode_bootcamp</strong>
                  <span>wecode-위코드</span>
                </div>
              </div>
              <img alt="" src="/images/jaehongChoi/dots.png" class="dots" />
            </div>
            <div class="articleMid">
              <img
                alt=""
                src="/images/jaehongChoi/westagramview.jpg"
                class="mainPicture"
              />
            </div>
            <div class="articleBottom1">
              <div class="articleBottomIconLeft">
                <img alt="" src="/images/jaehongChoi/heart.png" class="like" />
                <img
                  alt=""
                  src="/images/jaehongChoi/speech-bubble.png"
                  class="speechBubble"
                />
                <i class="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <i class="fa-regular fa-bookmark" />
            </div>
            <div class="articleBottom2">
              <div class="likePeople">
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="flower"
                />
                <strong>wecodewecode</strong>
                <span>님</span>
                <strong>&nbsp; 외 10명</strong>
                <span>이 좋아합니다</span>
              </div>
              <div class="idContent">
                <div class="uploader">
                  <strong>wewecoco</strong>
                  <span>바다가 멋있었쪙</span>
                </div>
                <div id="alreadyWritten">
                  <strong class="commentUser">weCoder</strong>
                  <span class="commentMsg">진짜 멋있었쪙?</span>
                </div>
                <ReplyFunction />
              </div>
            </div>
          </article>
        </div>
        <div class="main-right">
          <div class="id-right">
            <img
              alt=""
              class="thumbnailUploaderRight"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            />
            <div class="idLocationRight">
              <strong>wecode_bootcamp</strong>
              <span>wecode-위코드</span>
            </div>
          </div>
          <div class="story">
            <div class="storyword">
              <span>스토리</span>
              <strong>모두보기</strong>
            </div>
            <div class="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="storyflower"
                />
              </div>
              <div class="story-1word">
                <strong>35thwewe</strong>
                <span class="jobspan">2시간 전</span>
              </div>
            </div>
            <div class="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="storyflower"
                />
              </div>
              <div class="story-1word">
                <strong>35thwewe</strong>
                <span class="jobspan">1시간 전</span>
              </div>
            </div>
            <div class="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="storyflower"
                />
              </div>
              <div class="story-1word">
                <strong>35thwewe</strong>
                <span class="jobspan">4시간 전</span>
              </div>
            </div>
            <div class="story-1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="storyflower"
                />
              </div>
              <div class="story-1word">
                <strong>35thwewe</strong>
                <span class="jobspan">3시간 전</span>
              </div>
            </div>
          </div>
          <div class="recommend">
            <div class="recomword">
              <span>회원님을 위한 추천</span>
              <strong>모두보기</strong>
            </div>
            <div class="recom1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="recomflower"
                />
              </div>
              <div class="recom1word">
                <strong>35thwewe</strong>
                <span class="jobspan">회원님을 팔로우합니다</span>
              </div>
              <span class="followbtn">팔로우</span>
            </div>
            <div class="recom1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="recomflower"
                />
              </div>
              <div class="recom1word">
                <strong>35thwewe</strong>
                <span class="jobspan">회원님을 팔로우합니다</span>
              </div>
              <span class="followbtn">팔로우</span>
            </div>
            <div class="recom1">
              <div>
                <img
                  alt=""
                  src="/images/jaehongChoi/flower.jpg"
                  class="recomflower"
                />
              </div>
              <div class="recom1word">
                <strong>35thwewe</strong>
                <span class="jobspan">회원님을 팔로우합니다</span>
              </div>
              <span class="followbtn">팔로우</span>
            </div>
          </div>
          <div class="customerSupport">
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

  const NewComment = ({ comment }) => {
    return (
      <div className="replyUserDiv">
        <div className="userComment">
          <strong>allong_sio</strong>
          <p>{comment}</p>
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
    setCommentArray([...commentArray, comment]);
    setComment('');
  };

  return (
    <>
      <div class="commentPlus">
        {commentArray.map((commentItem, index) => (
          <NewComment comment={commentItem} key={index} />
        ))}
      </div>
      <div class="typeComment">
        <input
          class="replyContent"
          type="text"
          placeholder="댓글 달기..."
          onChange={handleCommentInput}
          value={comment}
        />
        <span>
          <button
            class={isActive ? 'activatedBtn' : 'unactivatedBtn'}
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
