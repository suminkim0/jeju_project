import React, { useState } from "react";
import { Link } from "react-router-dom";
import './../css/navbar.css';

const NavBar = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  let timeout;

  const handleMouseOver = () => {
    clearTimeout(timeout);
    setSubmenuVisible(true);
  };

  const handleMouseOut = () => {
    timeout = setTimeout(() => {
      setSubmenuVisible(false);
    }, 300); // 0.3초 후 서브메뉴 숨기기
  };

  return (
    <nav className="navbar">
      <div className="nav-item">
        <Link to="/" className="nav-link">메인페이지</Link>
      </div>
      <div className="nav-item">
        <Link to="/content" className="nav-link">문화·역사</Link>
      </div>
      <div className="nav-item">
        <Link to="/weatherForecast" className="nav-link">날씨</Link>
      </div>
      <div className="nav-item">
        <Link to="/map" className="nav-link">지도 (맛집, 관광, 숙박)</Link>
      </div>
      <div className="nav-item">
        <Link to="/wifi" className="nav-link">공공 와이파이 찾기</Link>
      </div>
      <div className="nav-item">
        <Link to="/bus" className="nav-link">버스 정류소 찾기</Link>
      </div>
      <div className="nav-item">
        <Link to="/oreum" className="nav-link">오름 지도</Link>
      </div>
      <div className="nav-item"
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>
        <Link className="nav-link">마이페이지</Link>
        <ul className={`submenu ${submenuVisible ? 'visible' : ''}`}>
          <li><Link to="/mypage/login" className="nav-sublink">로그인</Link></li>
          <li><Link to="/register" className="nav-sublink">회원가입</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
