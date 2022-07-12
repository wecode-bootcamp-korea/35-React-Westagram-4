import { STORY_LIST } from './storyData';

function Story() {
  return STORY_LIST.map(info => {
    return (
      <div key={info.id} class="story">
        <img src="/images/geumgwanLee/wecode.png" alt="profile" />
        <div class="storyInside">
          <div class="textbold">{info.Name}</div>
          <div class="textlight">{info.content}</div>
        </div>
      </div>
    );
  });
}

export default Story;
