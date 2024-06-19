import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './../css/openWifiAxios.css';
import logo from './../img/logo.png';

// 매월 1일을 YYYYMMDD 형식으로 변환하는 함수
function getFirstDayOfMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');  // 월은 0부터 시작하므로 1을 더해줌
  const day = '01';  // 항상 1일로 설정
  return `${year}${month}${day}`;
}

export default function OpenWifiAxios() {
  const [inputValue, setInputValue] = useState(''); // 사용자가 입력한 검색어
  const [wifiData, setWifiData] = useState([]); // API로부터 받은 데이터를 저장하는 상태
  const navigate = useNavigate(); // useNavigate 훅 사용

  const onWifiHandler = () => {
    let url = 'https://open.jejudatahub.net/api/proxy/Dtb18ta1btbD1Da1a81aaDttab6tDabb/tt74tbtrj94r9_t90270c0020oetjrj9';

    axios.get(url, {
      params: {
        baseDate: getFirstDayOfMonth(),  // 매월 1일로 설정
        apGroupName: inputValue // 사용자 입력값 사용
      }
    })
    .then(response => {
      console.log(response.data);  // response.data의 구조를 콘솔에 출력하여 확인
      setWifiData(response.data.data || []); // 응답 데이터를 wifiData 상태에 저장
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  const handleDetailClick = (index) => {
    navigate('/wifiMap', { state: { wifi: wifiData[index] } }); // 상세 페이지로 이동하면서 상태 전달
  }

  return (
    <div className="container">
      <div className="title">
        <h2>공공 와이파이 찾기</h2>
      </div>
        <hr/>
      <div className="search">
        <input value={inputValue} placeholder="찾을 장소 입력" onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={onWifiHandler} className="search_btn">검색</button>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>위치</th>
            <th>위치 상세</th>
            <th>MAC 주소</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          {wifiData.map((item, index) => (
            <tr key={index}>
              <td>{item.apGroupName}</td>
              <td>{item.installLocationDetail}</td>
              <td>{item.macAddress}</td>
              <td><button onClick={() => handleDetailClick(index)} className="detail_btn">상세</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
