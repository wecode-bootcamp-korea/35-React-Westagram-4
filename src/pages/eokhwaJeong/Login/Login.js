import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function LoginEokHwa() {
  return (
    <div className="login-eokhwa">
      <div className="logo">
        <p>westagram</p>
      </div>
      <div className="input_box">
        <input
          type="text"
          id="id_input"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onkeyup="isCheckIdAndPass()"
        />
        <input
          type="password"
          id="pass_input"
          placeholder="비밀번호"
          onkeyup="isCheckIdAndPass()"
        />

        <div>
          <Link to="/main-eokhwa">
            <button className="on">로그인</button>
          </Link>
        </div>
      </div>
      <a href="#!" className="last_txt">
        <p className="">비밀번호를 잊으셨나요?</p>
      </a>
    </div>
  );
}
export default LoginEokHwa;
