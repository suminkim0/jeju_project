import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './../css/userGreeting.css';

// 로그아웃 액션 생성자
const logout = () => ({
  type: 'LOGOUT',
});

function UserGreeting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user); // state에서 user 객체를 가져옴

  if (!user || !user.token) {
    return null; // 로그인이 되어 있지 않으면 아무것도 렌더링하지 않음
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/mypage/login');
  };

  return (
    <div className="user-greeting">
      <span>{user.id}님 안녕하세요! </span>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default UserGreeting;
