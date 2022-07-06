import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function LoginIkHyun() {
  const navigation = useNavigate();
  return (
    <div className="login-box">
      <div className="login">
        <h1>Westagram</h1>
        <input
          className="login-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          className="login-password"
          type="password"
          placeholder="비밀번호"
        />
        {/* <Link to="/main"> */}
        <button
          onClick={() => navigation('/main-ikhyun')}
          className="login-button"
        >
          로그인
        </button>
        {/* </Link> */}
        <p className="login-forget_password">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}
export default LoginIkHyun;
