import { useState } from 'react';
import styles from './../css/main.module.css';
import { Link } from 'react-router-dom';

export default function Main() {

  const [where, setWhere] = useState([]);
  const [locationData, setLocationData] = useState(null); // API 응답 데이터를 저장할 상태

  const handleSelectChange = async (e) => {
    const selectedValue = e.target.value;
    setWhere(selectedValue);

    // API 호출을 위한 함수 정의
    if (selectedValue) {
      await fetchLocationData(selectedValue); // 선택된 값으로 API 호출
    } else {
      setLocationData(null); // 선택값이 없을 경우 데이터 초기화
    }
  };

  // API 호출 함수
  const fetchLocationData = async (location) => {
    try {
      const response = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(location)}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`, // 환경 변수 확인
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setLocationData(data.documents[0]); // API 응답 데이터를 상태에 저장
      
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
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
            state={{ where, locationData }} // state에 where, locationData 값 전달
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
