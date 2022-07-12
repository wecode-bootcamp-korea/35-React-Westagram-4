import React, { useState } from 'react';
import './Main.scss';

function MainEokHwa() {
  let [commet, setComment] = useState('');
  let [feedCommnet, setFeedCommnet] = useState([]);
  let [count, setCount] = useState(0);
  const isValid = count < 1;

  const getComment = () => {
    const copy = [...feedCommnet];
    copy.push(commet);
    setComment('');
    setFeedCommnet(copy);
    setCount((count = count + 1));
  };

  const AddComment = () => {
    return (
      <>
        {feedCommnet.map((els, idx) => {
          return (
            <p class="comments" key={idx}>
              <strong>Wecode</strong>
              {els}
              <span
                class="del_button"
                style={{ cursor: 'pointer', padding: '20px' }}
              >
                삭제
              </span>
              <span
                class="material-symbols-outlined comment_like "
                style={{ float: 'right', fontSize: '20px' }}
              >
                favorite
              </span>
            </p>
          );
        })}
      </>
    );
  };

  return (
    <div className="main-eokhwa">
      <main>
        <div className="main_container">
          <div className="feeds">
            <article>
              <div className="feed_head">
                <div className="my_photo">
                  <img
                    src="/images/eokhwaJeong/img02.png"
                    alt="썸네일"
                    width="100%"
                  />
                </div>
                <div className="my_name">
                  <p>wecode_bootcamp</p>
                  <p>WeCode - 위코드</p>
                </div>
              </div>
              <div className="feed_img">
                <img
                  src="/images/eokhwaJeong/img01.png"
                  width="100%"
                  alt="피드이미지"
                />
              </div>
              <div className="feed_foot">
                <div className="icon_box">
                  <div className="icon_left">
                    <span className="material-symbols-outlined mr20 ml5">
                      favorite
                    </span>
                    <span className="material-symbols-outlined mr20">
                      maps_ugc
                    </span>
                    <span className="material-symbols-outlined">
                      file_upload
                    </span>
                  </div>

                  <span className="material-symbols-outlined mr15">
                    bookmark
                  </span>
                </div>
                <div className="foot_like">
                  <img
                    src="/images/eokhwaJeong/img02.png"
                    alt="썸네일"
                    width="100%"
                  />
                  <p className="count">WeCode님 외 44명이 좋아합니다.</p>
                </div>
                <div className="foot_text">
                  <p>
                    <strong>wecode_bootcamp</strong> 위코드는 단순한 교육업체가
                    아닌 개발자 커뮤니티 입니다. 위코드는 단순한 교육업체가 아닌
                    개발자 커뮤니티 입니다. 위코드는 단순한 교육업체가 아닌
                    개발자 커뮤니티 입니다.
                  </p>
                </div>
                <div className="reple_box">
                  <div
                    className="count_comment"
                    style={{ display: isValid ? 'none' : 'block' }}
                  >
                    댓 글수 {count}
                  </div>
                  <AddComment />
                </div>

                <div className="comment_box">
                  <input
                    id="reple_input"
                    type="text"
                    placeholder="댓글 달기.."
                    onChange={e => {
                      setComment(e.target.value);
                    }}
                    value={commet.length === 0 ? '' : commet}
                  />
                  <span className="write_reple" onClick={getComment}>
                    게시
                  </span>
                </div>
              </div>
            </article>
          </div>

          <div className="main_right">
            <div className="right_article">
              <div className="my_photo">
                <img
                  src="/images/eokhwaJeong/img02.png"
                  alt="내사진"
                  width="100%"
                />
              </div>
              <div className="my_name">
                <p>wecode_bootcamp</p>
                <p>WeCode - 위코드</p>
              </div>
            </div>

            <div className="right_article">
              <div className="article_more">
                <span>스토리</span>
                <a href="#!" onclick="moreList()">
                  모두 보기
                </a>
              </div>

              <div className="article_wrap">
                <div className="article_container">
                  <div className="small_article">
                    <div className="my_photo">
                      <img
                        src="/images/eokhwaJeong/some01.png"
                        alt="썸네일"
                        width="100%"
                      />
                    </div>
                    <div className="my_name">
                      <p>wecode_bootcamp</p>
                      <p>방금전</p>
                    </div>
                  </div>
                  <div className="small_article">
                    <div className="my_photo">
                      <img
                        src="/images/eokhwaJeong/some04.png"
                        alt="썸네일"
                        width="100%"
                      />
                    </div>
                    <div className="my_name">
                      <p>wecode_bootcamp</p>
                      <p>45분전</p>
                    </div>
                  </div>
                  <div className="small_article">
                    <div className="my_photo">
                      <img
                        src="/images/eokhwaJeong/some03.png"
                        alt="썸네일"
                        width="100%"
                      />
                    </div>
                    <div className="my_name">
                      <p>wecode_bootcamp</p>
                      <p>1시간전</p>
                    </div>
                  </div>
                  <div className="small_article">
                    <div className="my_photo">
                      <img
                        src="/images/eokhwaJeong/some05.png"
                        alt="썸네일"
                        width="100%"
                      />
                    </div>
                    <div className="my_name">
                      <p>wecode_bootcamp</p>
                      <p>2시간전</p>
                    </div>
                  </div>
                  <div className="small_article">
                    <div className="my_photo">
                      <img
                        src="/images/eokhwaJeong/some02.png"
                        alt="썸네일"
                        width="100%"
                      />
                    </div>
                    <div className="my_name">
                      <p>wecode_bootcamp</p>
                      <p>2시간전</p>
                    </div>
                  </div>
                  <div className="small_article">
                    <div className="my_photo">
                      <img
                        src="/images/eokhwaJeong/some04.png"
                        alt="썸네일"
                        width="100%"
                      />
                    </div>
                    <div className="my_name">
                      <p>wecode_bootcamp</p>
                      <p>4시간전</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_article">
              <div className="article_more">
                <span>회원님을 위한 추천</span>
                <a href="#!">모두 보기</a>
              </div>
              <div className="small_article">
                <div className="my_photo">
                  <img
                    src="/images/eokhwaJeong/some05.png"
                    alt="썸네일"
                    width="100%"
                  />
                </div>
                <div className="my_name">
                  <p>wecode_bootcamp</p>
                  <p>회원님을 팔로우 합니다.</p>
                </div>
              </div>
              <div className="small_article">
                <div className="my_photo">
                  <img
                    src="/images/eokhwaJeong/some01.png"
                    alt="썸네일"
                    width="100%"
                  />
                </div>
                <div className="my_name">
                  <p>wecode_bootcamp</p>
                  <p>회원님을 팔로우 합니다.</p>
                </div>
              </div>
              <div className="small_article">
                <div className="my_photo">
                  <img
                    src="/images/eokhwaJeong/some04.png"
                    alt="썸네일"
                    width="100%"
                  />
                </div>
                <div className="my_name">
                  <p>wecode_bootcamp</p>
                  <p>회원님을 팔로우 합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainEokHwa;
