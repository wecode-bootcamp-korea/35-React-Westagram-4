import React from 'react';
import './Login.scss';

function LoginGeumGwan() {
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
          <button type="submit" id="submit">
            로그인
          </button>
        </div>
      </main>
      <footer>
        {' '}
        <a href="">비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
}

export default LoginGeumGwan;
