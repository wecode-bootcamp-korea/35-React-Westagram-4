import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginIkHyun() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const idValue = ({ target }) => {
    const updateId = target.value;
    setEmail(updateId);
  };

  const pwdValue = ({ target }) => {
    const updatePwd = target.value;
    setPassword(updatePwd);
  };

  const goToMain = email.includes('@') && password.length >= 5;

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

  const getToken = () => {
    fetch('http://10.58.3.198:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('login-token', result.token);
          login();
        }
      });
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
          onClick={getToken}
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
