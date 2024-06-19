import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './../css/login.css';
import logo from './../img/logo.png';

// 액션 생성자 정의
const saveToken = (id, token) => ({
  type: 'SAVE_TOKEN',
  payload: { id, token },
});

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://nam3324.synology.me:32845/member/login', { id, pwd: password });
      if (response.status === 200) {
        console.log('로그인 요청 성공', response.data); // 로그 추가
        if (response.data.flag) {
          dispatch(saveToken(id, response.data.token));
          setWelcomeMessage(`${id}님 안녕하세요`);
          alert(`로그인 성공!\n ${id}님 안녕하세요`);
          navigate('/'); // 로그인 성공 후 이동할 페이지로 네비게이션
        } else {
          alert('로그인 실패');
        }
        console.log('token 정보 : ', response.data.token);
      }
    } catch (error) {
      alert('로그인 실패');
      console.error(error);
    }
  };

  return (
    <div className='login-container'>
      {welcomeMessage ? (
        <div className="welcome-message">{welcomeMessage}</div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <img src={logo} alt='Jeju Logo' className='register-logo'/>
          <h2 className='register-title'>로그인 페이지</h2>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="암호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <div className="btns">
            <button type="submit" className="login-btn">로그인</button>
            <button type="button" onClick={() => navigate('/register')} className="register-btn">회원가입</button>
          </div>
        </form>
      )}
    </div>
  );
}
