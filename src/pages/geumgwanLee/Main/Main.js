import React, { useState } from 'react';
import './Main.scss';

function MainGeumGwan() {
  let [like, like1] = useState(<i class="fa-regular fa-heart" />);
  return (
    <div className="body">
      <nav>
        <div class="nav-space">
          <span class="leftSide">
            <img src="/images/geumgwanLee/instagram.png" alt="로고" />
            <span class="logoStyle">Westagram</span>
          </span>
          <input class="Search" type="text" id="search" placeholder="검색" />
          <span class="rightSide">
            <img src="/images/geumgwanLee/explore.png" />
            <img src="/images/geumgwanLee/heart.png" />
            <img src="/images/geumgwanLee/profile.png" />
          </span>
        </div>
      </nav>
      <div class="main">
        <section>
          <div class="feeds">
            <article class="article1">
              <div class="article-nav">
                <img
                  class="article-profileImg"
                  src="/images/geumgwanLee/pro.png"
                />
                <span class="article-profileText">gc__eric</span>
                <i class="fa-solid fa-ellipsis" />
              </div>
              <div class="article-feedover">
                <img
                  class="article-feedImg"
                  src="/images/geumgwanLee/ggo.png"
                />
              </div>
              <div class="article-iconsFlex">
                <i class="fa-solid fa-heart" />
                <i class="fa-regular fa-comment" />
                <i class="fa-regular fa-paper-plane" />
                <i class="fa-regular fa-bookmark" />
              </div>
              <div class="article-undercontainer">
                <div class="article-like">
                  <img src="/images/geumgwanLee/pro.png" />
                  <span>
                    <span class="textbold">WeCode</span>님 외
                    <span class="textbold">705명</span>이 좋아합니다
                  </span>
                </div>
                <div class="article-discription">
                  <span class="textbold">gc__eric</span>
                  위코드 35기 화이팅~~~...
                  <span class="textlight">더보기</span>
                  <div class="comment">
                    <span class="textbold">Wecode_bootcamp</span>
                    화이팅~~
                    <span
                      class="rightheart"
                      onClick={() => {
                        like1('❤️');
                      }}
                    >
                      {like}
                    </span>
                  </div>
                </div>
                <div id="comments" />
                <div class="article-time">55분 전</div>
              </div>
              <form class="comment-write">
                <input id="comment" type="text" placeholder="댓글 달기..." />
                <button type="submit" id="submit">
                  게시
                </button>
              </form>
            </article>
            <article class="article1">
              <div class="article-nav">
                <img
                  class="article-profileImg"
                  src="/images/geumgwanLee/pro.png"
                />
                <span class="article-profileText">gc__eric</span>
                <i class="fa-solid fa-ellipsis" />
              </div>
              <div>
                <img
                  class="article-feedImg"
                  src="/images/geumgwanLee/sam.png"
                />
              </div>
              <div class="article-iconsFlex">
                <i class="fa-solid fa-heart" />
                <i class="fa-regular fa-comment" />
                <i class="fa-regular fa-paper-plane" />
                <i class="fa-regular fa-bookmark" />
              </div>
              <div class="article-undercontainer">
                <div class="article-like">
                  <img src="/images/geumgwanLee/pro.png" />
                  <span>
                    <span class="textbold">WeCode</span>님 외
                    <span class="textbold">705명</span>이 좋아합니다
                  </span>
                </div>
                <div class="article-discription">
                  <span class="textbold">gc__eric</span>
                  위코드 35기 화이팅~~~...
                  <span class="textlight">더보기</span>
                  <div class="comment">
                    <span class="textbold">Wecode_bootcamp</span>
                    화이팅~~
                    <span
                      class="rightheart"
                      onClick={() => {
                        like1('❤️');
                      }}
                    >
                      {like}
                    </span>
                  </div>
                </div>
                <div class="article-time">55분 전</div>
              </div>
              <form class="comment-write">
                <input id="comment" type="text" placeholder="댓글 달기..." />
                <button
                  type="submit"
                  id="submit"
                  onclick="location.href='' "
                  disabled="disabled"
                >
                  게시
                </button>
              </form>
            </article>
          </div>
        </section>
        <section>
          <div class="main-right">
            <div class="right-nav">
              <img src="/images/geumgwanLee/me.png" alt="profile" />
              <div class="right-navtext">
                <div class="textbold">gc__eric</div>
                <div class="textlight">WeCodeㅣ위코드</div>
              </div>
            </div>
            <div class="right-storybox">
              <div class="right-storyboxnav">
                <div class="textlight">스토리</div>
                <div class="textbold">모두 보기</div>
              </div>
              <div class="storiesall">
                <div class="story">
                  <img src="/images/geumgwanLee/wecode.png" alt="" />
                  <div class="storyInside">
                    <div class="textbold">wecode_bootcamp</div>
                    <div class="textlight">3분전</div>
                  </div>
                </div>
                <div class="story">
                  <img src="/images/geumgwanLee/wecode.png" alt="" />
                  <div class="storyInside">
                    <div class="textbold">wecode_bootcamp</div>
                    <div class="textlight">10분전</div>
                  </div>
                </div>
                <div class="story">
                  <img src="/images/geumgwanLee/wecode.png" alt="" />
                  <div class="storyInside">
                    <div class="textbold">wecode_bootcamp</div>
                    <div class="textlight">20분전</div>
                  </div>
                </div>
                <div class="story">
                  <img src="/images/geumgwanLee/wecode.png" alt="" />
                  <div class="storyInside">
                    <div class="textbold">wecode_bootcamp</div>
                    <div class="textlight">30분전</div>
                  </div>
                </div>
                <div class="story">
                  <img src="/images/geumgwanLee/wecode.png" alt="" />
                  <div class="storyInside">
                    <div class="textbold">wecode_bootcamp</div>
                    <div class="textlight">50분전</div>
                  </div>
                </div>
                <div class="story">
                  <img src="/images/geumgwanLee/wecode.png" alt="" />
                  <div class="storyInside">
                    <div class="textbold">wecode_bootcamp</div>
                    <div class="textlight">1시간전</div>
                  </div>
                </div>
                <div class="story">
                  <img src="/images/geumgwanLee/wecode.png" alt="" />
                  <div class="storyInside">
                    <div class="textbold">wecode_bootcamp</div>
                    <div class="textlight">2시간전</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="recommendation-box">
              <div class="right-storyboxnav">
                <div class="textlight">회원님을 위한 추천</div>
                <div class="textbold">모두 보기</div>
              </div>
              <div class="reco-boxline">
                <img src="/images/geumgwanLee/bts.png" alt="bts" />
                <div class="reco-boxIdMutual">
                  <div class="textbold">BTS_Official</div>
                  <div class="textlight">gold_en님 외 2명이 팔로우합니다</div>
                </div>
                <div class="followbutton">팔로우</div>
              </div>
              <div class="reco-boxline">
                <img src="/images/geumgwanLee/bts.png" alt="bts" />
                <div class="reco-boxIdMutual">
                  <div class="textbold">BTS_Official</div>
                  <div class="textlight">gold_en님 외 2명이 팔로우합니다</div>
                </div>
                <div class="followbutton">팔로우</div>
              </div>
              <div class="reco-boxline">
                <img src="/images/geumgwanLee/bts.png" alt="bts" />
                <div class="reco-boxIdMutual">
                  <div class="textbold">BTS_Official</div>
                  <div class="textlight">gold_en님 외 2명이 팔로우합니다</div>
                </div>
                <div class="followbutton">팔로우</div>
              </div>
              <div class="footer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default MainGeumGwan;
