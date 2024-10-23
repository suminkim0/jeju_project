import React from 'react';
import styles from './../css/footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.column1}>
        <p>(디지털컨버전스)공공데이터 융합 자바개발자 양성과정3</p>
        <p>1조 프로젝트 제주 관광사이트</p>
        <p>2024-05-27 ~ 2024-06-10 진행</p>
      </div>
      <div className={styles.column2}>
        <p>제주 관광 사이트 리모델링</p>
        <p>사용자 UI 개선 (개인 진행)</p>
        <p>2024-10-23 ~ 진행중</p>
      </div>
    </div>
  );
}

export default Footer;
