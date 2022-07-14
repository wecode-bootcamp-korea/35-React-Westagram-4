/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

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

  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');

  const [userData, setUserData] = useState({
    id: '',
    pw: '',
  });
  // [{ id : '', pw: ''}, f]

  const { id, pw } = userData;
  const isButtonActive = id.includes('@') && pw.length >= 5;

  const writeUserData = e => {
    // console.log(e);
    const { name, value } = e.target; //e.target의 name과 value key를 이용하겠다.
    setUserData({ ...userData, [name]: value }); //스프레드 연산자. 이전 값 복제한 뒤에 추가되는 부분을 넣어주겠다.
  };
  // console.log(userData)

  // const handleIdInput = e => {
  //   const { value } = e.target;
  //   setId(value);
  // };

  // const handlePwInput = e => {
  //   const { value } = e.target;
  //   setPw(value);
  // };

  return (
    <div className="Login">
      <Link to="/main" style={{ textDecoration: 'none' }}>
        <h1 className="logo">westagram</h1>
      </Link>
      <input
        onChange={writeUserData}
        className="id"
        name="id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={writeUserData}
        className="password"
        name="pw"
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
