import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function LoginGeumGwan() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-geumgwan');
  };
  return (
    <div class="container">
      <header>
        <h2>Westagram</h2>
      </header>
      <main>
        <div>
          <input
            type="text"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            class="inputlogin"
          />
        </div>
        <div>
          <input
            type="password"
            id="pw"
            placeholder="비밀번호"
            class="inputlogin"
          />
        </div>
        <div className="buttonarea">
          <button className="loginBtn" onClick={goToMain}>
            로그인
          </button>
        </div>
      </main>
      <footer>비밀번호를 잊으셨나요?</footer>
    </div>
  );
}

export default LoginGeumGwan;
