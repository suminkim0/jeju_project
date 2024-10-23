import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './../css/register.css';

const Register = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [userNick, setUserNick] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://nam3324.synology.me:32845/member/register', {
        userID: id,
        userName: userName,
        userPassword: password,
        userEmail: email,
        userPhone: phone,
        userNickName: userNick,
        userGender: gender
      });
      alert('회원가입 성공');
      navigate('/mypage/login');
    } catch (error) {
      alert('회원 가입 실패');
      console.error(error);
    }
  };

  return (
    <div className='register-container'>
      <h2 className='register-title'>회원 가입 페이지</h2>
      <form onSubmit={handleSubmit} className='register-form'>
        <div className='input_container'>
          <input 
            type='text' 
            placeholder='아이디 입력' 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            required
            className='register-input'
          />
          <input 
            type='password' 
            placeholder='비밀번호 입력' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className='register-input'
          />
          <input 
            type='text' 
            placeholder='이름 입력' 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            required
            className='register-input'
          />
          <input 
            type='text' 
            placeholder='닉네임 입력' 
            value={userNick}
            onChange={(e) => setUserNick(e.target.value)} 
            required
            className='register-input'
          />
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="text"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="register-input"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="register-select"
          >
            <option value="" disabled>성별 선택</option>
            <option value="M">남자</option>
            <option value="F">여자</option>
          </select>
        </div>
        <div className='agree-box'>
          <input
            type='checkbox'
            required
            id='agree'
            className='agree-chk'
          />
          <label htmlFor='agree'>개인 정보 제공에 동의합니다.</label>
        </div>
        <button type='submit' className='register-button'>계정 만들기</button>
        <button type='button' className='cancel-button' onClick={() => navigate('/')}>취소</button>
      </form>
    </div>
  );
};

export default Register;
