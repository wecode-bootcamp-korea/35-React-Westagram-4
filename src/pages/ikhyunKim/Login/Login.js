import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function LoginIkHyun() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const idValue = ({ target }) => {
    const updateId = target.value;
    setId(updateId);
  };

  const pwdValue = ({ target }) => {
    const updatePwd = target.value;
    setPassword(updatePwd);
  };

  const goToMain = id.includes('@') && password.length >= 5;
  const navigation = useNavigate();
  const login = () => {
    navigation('/main-ikhyun');
  };

  const checkEnter = e => {
    if (e.key === 'Enter') {
      if (goToMain) {
        login();
      }
    }
  };
  return (
    <div className="login-box">
      <div className="login">
        <h1>Westagram</h1>
        <input
          className="login-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={idValue}
          onKeyUp={checkEnter}
        />
        <input
          className="login-password"
          type="password"
          placeholder="비밀번호"
          onChange={pwdValue}
          onKeyUp={checkEnter}
        />
        {/* <Link to="/main"> */}
        <button
          onClick={login}
          className="login-button"
          disabled={!goToMain}
          style={goToMain ? { opacity: '1' } : { opacity: '' }}
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
