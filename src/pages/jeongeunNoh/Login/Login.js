import React from 'react';
import './Login.scss';

import { Link, useNavigate } from 'react-router-dom';

function LoginJeongEun() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="Login">
      <Link to="/main" style={{ textDecoration: 'none' }}>
        <h1 className="logo">westagram</h1>
      </Link>
      <input
        className="id"
        type="text"
        placeholder="&nbsp;&nbsp;전화번호, 사용자 이름 또는 이메일"
      />
      <input
        className="password"
        type="password"
        placeholder="&nbsp;&nbsp;비밀번호"
      />
      <button type="button" onClick={goToMain}>
        로그인
      </button>
      <a href="/" className="notice">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}
export default LoginJeongEun;
