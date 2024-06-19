import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './../css/busStationInfo.css';

export default function BusStationInfo() {
  const [stationName, setStationName] = useState('');
  const [stationData, setStationData] = useState([]);
  const navigate = useNavigate();

  const fetchStationInfo = async () => {
    let url = 'https://open.jejudatahub.net/api/proxy/DD11ab6a6t11D16baaa1a2tD26ata161/ottrc_71t2ej482o29bbtcc4rcbr8tcc';

    try {
      const response = await axios.get(url, {
        params: {
          stationName: stationName
        }
      });
      console.log(response.data); // 데이터 출력 확인
      setStationData(response.data.data); // data 배열을 상태에 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMapClick = (index) => {
    navigate('/busMap', { state: { station: stationData[index] } }); // 상세 페이지로 이동하면서 상태 전달
  };

  return (
    <div className="container">
      <div className="title">
        <h2>버스 정류소 찾기</h2>
      </div>
      <hr/>
      <input
        type="text"
        value={stationName}
        onChange={(e) => setStationName(e.target.value)}
        placeholder="정류소명 입력"
      />
      <button onClick={fetchStationInfo} className="search_btn">검색</button>

      {stationData.length > 0 && (
        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th>정류소명</th>
                <th>정류소 주소</th>
                <th>방향</th>
                <th>장소 정보</th>
                <th>지도</th>
              </tr>
            </thead>
            <tbody>
              {stationData.map((station, index) => (
                <tr key={index}>
                  <td>{station.stationName}</td>
                  <td>{station.stationAddress}</td>
                  <td>{station.direction}</td>
                  <td>{station.localInfo}</td>
                  <td><button onClick={() => handleMapClick(index)} className="detail_btn">보기</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}