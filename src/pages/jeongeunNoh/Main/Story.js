/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Story({ storyData }) {
  return (
    <div className="story">
      <img src={storyData.img} alt="myInsta" />
      <div className="storyId">
        <p>
          <strong>{storyData.userId}</strong>
        </p>
        <p className="weight">{storyData.userName}</p>
      </div>
    </div>
  );
}

export default Story;
