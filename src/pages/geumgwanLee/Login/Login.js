import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function LoginGeumGwan() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-geumgwan');
  };
  function Header() {
    return (
      <header>
        <h2>Westagram</h2>
      </header>
    );
  }

  function Main() {
    const [person, setPerson] = useState({
      text: '',
      pw: '',
    });

    const handleIdInput = event => {
      const { value } = event.target;
      setPerson({ ...person, [event.target.name]: value });
    };

    return (
      <main>
        <form onChange={handleIdInput}>
          <div>
            <input
              className="inputlogin"
              type="text"
              name="text"
              value={person.text}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div>
            <input
              type="password"
              name="pw"
              value={person.pw}
              placeholder="비밀번호"
              className="inputlogin"
            />
          </div>
          <div className="buttonarea">
            <button
              disabled={!(person.text.includes('@') && person.pw.length >= 5)}
              onClick={goToMain}
            >
              로그인
            </button>
          </div>
        </form>
      </main>
    );
  }

  function Footer() {
    return <footer>비밀번호를 잊으셨나요?</footer>;
  }

  return (
    <div class="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default LoginGeumGwan;
