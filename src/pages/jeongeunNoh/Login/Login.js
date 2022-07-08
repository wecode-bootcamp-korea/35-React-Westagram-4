import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginJeongEun() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jeongeun');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const isTrue = id.includes('@') && pw.length >= 5;

  const handleIdInput = e => {
    // console.log(e.target.value)
    setId(e.target.value); // 이 값이 계속 id로 들어가고 있음
  };

  const handlePwInput = e => {
    setPw(e.target.value); // 이 값이 계속 pw로 들어가고 있음
  };

  return (
    <div className="Login">
      <Link to="/main" style={{ textDecoration: 'none' }}>
        <h1 className="logo">westagram</h1>
      </Link>
      <input
        onChange={handleIdInput}
        className="id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={handlePwInput}
        className="password"
        type="password"
        placeholder="비밀번호"
      />
      <button
        type="button"
        onClick={goToMain}
        style={
          isTrue ? { backgroundColor: 'blue' } : { backgroundColor: '#BEE2FD' }
        }
        disabled={!isTrue}
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
