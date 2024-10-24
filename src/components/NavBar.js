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
    </nav>
  );
};

export default NavBar;
