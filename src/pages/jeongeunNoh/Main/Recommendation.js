/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Recommendation({ recommendationData }) {
  return (
    <div className="recommendPeopel">
      <img src={recommendationData.img} alt="myInsta" />
      <div className="recommendId">
        <p>
          <strong>{recommendationData.userName}</strong>
        </p>
        <p className="weight">{recommendationData.text}</p>
      </div>
      <span className="follow">팔로우</span>
    </div>
  );
}
export default Recommendation;
