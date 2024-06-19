import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './../css/busStationMap.css';

export default function BusStationMap() {
  const location = useLocation(); // 현재 위치에서 상태를 가져옴
  const { station } = location.state; // 전달된 상태에서 station 객체를 추출

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=67ce2f3bac83f69719c580a0370988bb&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(station.latitude, station.longitude),
          level: 3 // 이 수치를 조절하여 지도의 확대/축소 정도를 조절할 수 있습니다.
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커를 생성
        const markerPosition = new window.kakao.maps.LatLng(station.latitude, station.longitude);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커를 지도에 표시
        marker.setMap(map);
      });
    };

    document.head.appendChild(script);

    // 마커를 생성하기 위해 카카오맵 API 스크립트를 동적으로 로드하고 마커를 추가합니다.
  }, [station.latitude, station.longitude]);

  return (
    <div>
      <div className="title">
        <h2>버스 정류소 지도 정보</h2>
      </div>
      <hr/>
      <table>
        <tr>
          <td className='col'>정류소 ID</td> 
          <td>{station.stationId}</td>
        </tr>
        <tr>
          <td className='col'>정류소 타입</td> 
          <td>{station.stationType}</td>
        </tr>
        <tr>
          <td className='col'>정류소명</td> 
          <td>{station.stationName}</td>
        </tr>
        <tr>
          <td className='col'>정류소 주소</td> 
          <td>{station.stationAddress}</td>
        </tr>
        <tr>
          <td className='col'>방향</td> 
          <td>{station.direction}</td>
        </tr>
        <tr>
          <td className='col'>경도</td> 
          <td>{station.longitude}</td>
        </tr>
        <tr>
          <td className='col'>위도</td> 
          <td>{station.latitude}</td>
        </tr>
        <tr>
          <td className='col'>장소 정보</td> 
          <td>{station.localInfo}</td>
        </tr>
      </table>
      <div id="map" style={{ width: '1000px', height: '500px' }}></div>
    </div>
  );
}