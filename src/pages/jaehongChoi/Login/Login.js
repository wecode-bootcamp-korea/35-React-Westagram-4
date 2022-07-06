import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function LoginJaeHong() {
  return (
    <div className="login-jaeHong">
      <div class="wholePage">
        <div class="loginBox">
          <div class="logoBox">
            <Link to="/main-jaehong">
              <h1>Westagram</h1>
            </Link>
          </div>
          <div class="loginElement">
            <div class="inputBlank">
              <div class="idDiv">
                <input
                  class="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                ></input>
              </div>
              <div class="passworddiv">
                <input
                  class="password"
                  type="password"
                  placeholder="비밀번호"
                ></input>
              </div>
              <button type="button" class="button">
                로그인
              </button>
            </div>
          </div>
        </div>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}
export default LoginJaeHong;
