import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginIkHyun() {
  const [loginData, setLoginData] = useState({
    id: '',
    password: '',
  });

  const loginDataValue = ({ target }) => {
    const { name, value } = target;
    setLoginData({ ...loginData, [name]: value });
  };

  const { id, password } = loginData;

  // console.log(localStorage.getItem('token'));
  const goToMain = id.includes('@') && password.length >= 5;

  const navigation = useNavigate();
  const login = () => {
    navigation('/main-ikhyun');
  };

  const checkEnter = e => {
    if (e.key === 'Enter') {
      if (goToMain) {
        getToken();
      }
    }
  };

  const getToken = () => {
    fetch('http://10.58.3.198:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('login-token', result.token);
          login();
        } else {
          alert('이메일 및 비밀번호 값을 확인해주세요!');
        }
      });
  };
  return (
    <div className="login-box">
      <div className="login">
        <h1>Westagram</h1>
        <input
          name="id"
          className="login-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={loginDataValue}
          onKeyUp={checkEnter}
        />
        <input
          name="password"
          className="login-password"
          type="password"
          placeholder="비밀번호"
          onChange={loginDataValue}
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
