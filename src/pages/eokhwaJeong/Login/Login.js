import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  return (
    <button className="" disabled>
      로그인
    </button>
  );
};

const ButtonActive = () => {
  return (
    <button className="on" disabled="false">
      로그인
    </button>
  );
};

function LoginEokHwa() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [display, setDisplay] = useState('flex');
  const isValid = id.includes('@') && pw.length > 5;
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-eokhwa');
  };
  // const nowUrl = window.location.href;
  // const checkUrl = nowUrl.includes('login');

  // const switchNav = e => {
  //   if (e) {
  //     setDisplay('none');
  //   } else {
  //     setDisplay('flex');
  //   }
  // };

  // console.log(display);
  // console.log(checkUrl);
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
          onChange={e => setId(e.target.value)}
        />
        <input
          type="password"
          id="pass_input"
          placeholder="비밀번호"
          onChange={e => setPw(e.target.value)}
        />

        <div className="button_area">
          <button
            className={isValid ? 'on' : ' '}
            disabled={isValid ? false : true}
            onClick={goToMain}
          >
            로그인
          </button>
        </div>
      </div>
      <a href="#!" className="last_txt">
        <p className="">비밀번호를 잊으셨나요?</p>
      </a>
    </div>
  );
}
export default LoginEokHwa;
