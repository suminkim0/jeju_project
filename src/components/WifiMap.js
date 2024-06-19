import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './../css/wifiMap.css';
import logo from './../img/logo.png';

export default function WifiMap() {
  const location = useLocation(); // 현재 위치에서 상태를 가져옴
  const { wifi } = location.state; // 전달된 상태에서 wifi 객체를 추출
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=5a2233f852a28fedf7e6cdf86b5ecc0f&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(wifi.latitude, wifi.longitude),
          level: 1
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커를 생성
        const markerPosition = new window.kakao.maps.LatLng(wifi.latitude, wifi.longitude);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커를 지도에 표시
        marker.setMap(map);
      });
    };

    document.head.appendChild(script);
  }, [wifi.latitude, wifi.longitude]);

  return (
    <div>
      <div className="title">
      <h2>와이파이 상세 정보</h2>
      </div>
      <hr></hr>
      <table>
        <tr>
          <td className='col'>위치</td> 
          <td>{wifi.apGroupName}</td>
        </tr>
        <tr>
          <td className='col'>위치 상세</td> 
          <td>{wifi.installLocationDetail}</td>
        </tr>
        <tr>
          <td className='col'>MAC 주소</td> 
          <td>{wifi.macAddress}</td>
        </tr>
      </table>
      <div id="map" style={{ width: '1000px', height: '500px' }}></div>
    </div>
  );
}
