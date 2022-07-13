import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainJaeHong from '../Main/Main';
import './Login.scss';

function LoginJaeHong() {
  return (
    <div className="login-jaeHong">
      <div className="loginBox">
        <Link to="/main-jaehong">
          <h1>Westagram</h1>
        </Link>
        <LoginElement />
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

const LoginElement = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  // // /* ID 유효성 검사*/
  const handleIdInput = event => {
    setId(event.target.value);
    if (event.target.value.includes('@') && password.length > 4) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // // /*PASSWORD 유효성 검사*/
  const handlePwInput = event => {
    setPassword(event.target.value);
    if (id.includes('@') && event.target.value.length > 4) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  /*useNavigate hook사용 페이지이동 함수*/
  const navigate = useNavigate();
  const goToMain = () => navigate('/main-jaehong');
  // const goToMain = e => {
  //   console.log('sdfsdf');
  //   e.preventDefault();
  //   fetch('http://10.58.6.45:8000/user/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: id,
  //       password: password,
  //       name: '최재홍',
  //       mobile_number: '010239012930',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => localStorage.setItem('key', result.token));
  // };
  //

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
      <button
        type="button"
        className={isActive ? 'activatedBtn' : 'unactivatedBtn'}
        disabled={!isActive}
        onClick={goToMain}
      >
        로그인
      </button>
    </div>
  );
};

export default LoginJaeHong;
