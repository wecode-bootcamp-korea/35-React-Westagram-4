import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
  const [isActive, setIsActive] = useState(false);

  const handleIdInput = event => {
    setId(event.target.value);
    console.log('id :', id);
    if (event.target.value.includes('@') && password.length > 4) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const handlePwInput = event => {
    console.log('pw :', password);
    setPassword(event.target.value);
    if (id.includes('@') && event.target.value.length > 4) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const navigate = useNavigate();
  const goToMain = () => navigate('/main-jaehong');

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
