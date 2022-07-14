/* eslint-disable no-console */
import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginJeongEun() {
  const navigate = useNavigate();

  const goToMain = e => {
    navigate('/main-jeongeun');
    // fetch('https://westagram-signup.herokuapp.com/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     // name: 'wjddms4107',
    //     email: id,
    //     password: pw,
    //     // phone_number: '0107704444',
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.ACCESS_TOKEN) {
    //       localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
    //       console.log(localStorage.getItem('ACCESS_TOKEN'));
    //     }
    //   });
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // const [inputValues, setInputValues] = useState({
  //   email: '',
  //   password: '',
  // });
  // 조건은 어떻게 적용시키는지?

  const isButtonActive = id.includes('@') && pw.length >= 5;

  // inputValues[email].includes('@') && inputValues[password].length >= 5;

  // const handleInput = e => {
  //   const { name, value } = e.target;
  //   setInputValues({
  //     ...inputValues,
  //     [name]: value,
  //   });
  // };

  const handleIdInput = e => {
    const { value } = e.target;
    setId(value);
  };

  const handlePwInput = e => {
    const { value } = e.target;
    setPw(value);
  };

  return (
    <div className="Login">
      <Link to="/main" style={{ textDecoration: 'none' }}>
        <h1 className="logo">westagram</h1>
      </Link>
      <input
        onChange={handleIdInput}
        className="id"
        name="email"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={handlePwInput}
        className="password"
        name="password"
        type="password"
        placeholder="비밀번호"
      />
      <button
        onClick={goToMain}
        className={isButtonActive ? 'activated' : 'deactivated'}
        type="button"
        // style={
        //   isTrue ? { backgroundColor: 'blue' } : { backgroundColor: '#BEE2FD' }
        // }
        disabled={!isButtonActive} //true일 때 재역할을 함, isTrue가 true면 disabled는 false가 되어 main에 들어갈 수 있음.
      >
        로그인
      </button>
      <a href="/" className="notice">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}
export default LoginJeongEun;
