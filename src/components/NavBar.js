import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './../css/navbar.module.css';
import jeju_logo from '../img/jeju_logo.png';

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_item}>
        <Link to="/">
          <img src={jeju_logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.nav_item}>
        <Link to="/content" className={styles.nav_link}>문화·역사</Link>
      </div>
      <div className={styles.nav_item}>
        <Link to="/weatherForecast" className={styles.nav_link}>날씨</Link>
      </div>
      <div className={styles.nav_item}>
        <Link to="/map" className={styles.nav_link}>지도 (맛집, 관광, 숙박)</Link>
      </div>
      <div className={styles.nav_item}>
        <Link to="/wifi" className={styles.nav_link}>공공 와이파이 찾기</Link>
      </div>
      <div className={styles.nav_item}>
        <Link to="/bus" className={styles.nav_link}>버스 정류소 찾기</Link>
      </div>
      <div className={styles.nav_item}>
        <Link to="/oreum" className={styles.nav_link}>오름 지도</Link>
      </div>
    </nav>
  );
};

export default NavBar;
