import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function LoginJaeHong() {
  return (
    <div className="login-jaeHong">
      <div className="wholePage">
        <div className="loginBox">
          <div className="logoBox">
            <Link to="/main-jaehong">
              <h1>Westagram</h1>
            </Link>
          </div>
          <LoginElement />
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
}

const LoginElement = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPassword(event.target.value);
  };
  return (
    <div className="inputBlank">
      {/* ID */}
      <input
        onChange={handleIdInput}
        className="id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      {/* PASSWORD */}
      <input
        onChange={handlePwInput}
        className="password"
        type="password"
        placeholder="비밀번호"
      />
      {/* LOGIN BUTTON */}
      <button type="button" className="unactivatedBtn" disabled>
        로그인
      </button>
    </div>
  );
};

export default LoginJaeHong;
