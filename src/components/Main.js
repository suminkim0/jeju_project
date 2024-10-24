import { useState } from 'react';
import styles from './../css/main.module.css';
import { Link } from 'react-router-dom';

export default function Main() {

  const [where, setWhere] = useState('');

  const handleSelectChange = (e)=>{
    setWhere(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <select 
          className={styles.where}
          onChange={handleSelectChange} //select 변경 이벤트 처리
        >
          <option value="">어디로 가고 싶으세요?</option>
          <option value="구좌읍">구좌읍</option>
          <option value="조천읍">조천읍</option>
          <option value="제주시">제주시</option>
          <option value="애월읍">애월읍</option>
          <option value="한림읍">한림읍</option>
          <option value="한경면">한경면</option>
          <option value="대정읍">대정읍</option>
          <option value="안덕면">안덕면</option>
          <option value="서귀포시">서귀포시</option>
          <option value="남원읍">남원읍</option>
          <option value="표선면">표선면</option>
          <option value="성산읍">성산읍</option>
          <option value="우도">우도</option>
        </select>
        
        {where ? (
          <Link 
            to="/next" 
            state={{ where }} // state에 where 값 전달
          >
            <button className={styles.searchBtn}>GO</button>
          </Link>
        ) : (
          <button className={styles.searchBtn} disabled>GO</button>
        )}
      </div>
    </div>
  );
}
