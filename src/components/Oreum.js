import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/oreum.css';

const Oreum = () => {
    const [places, setPlaces] = useState([]); // 오름 데이터를 저장하는 상태 변수
    const [map, setMap] = useState(null); // 카카오 지도를 저장하는 상태 변수
    const [markers, setMarkers] = useState([]); // 지도에 표시된 마커들을 저장하는 상태 변수
  
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=5a2233f852a28fedf7e6cdf86b5ecc0f&libraries=services&autoload=false`;
        script.async = true;
  
        // 스크립트가 로드되면 카카오 지도 API를 사용하여 지도를 초기화
        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(33.4899, 126.4983),
                    level: 6,
                };
  
                const kakaoMap = new window.kakao.maps.Map(container, options);
                setMap(kakaoMap); // 지도를 상태 변수에 저장
            });
        };
  
        document.body.appendChild(script); // 스크립트를 body에 추가
  
        return () => {                     //실행이 안될때 
            document.body.removeChild(script); 
        };
    }, []);
  
    // 오름 데이터를 API를 통해 가져옴
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                'https://open.jejudatahub.net/api/proxy/1Dttb1tab8tD88Dtat11111at1t1atD8/b2cjt9_506ber0t005to7b250t5tp66t?}'
            );
            setPlaces(response.data.data); 
        };
  
        fetchData(); // 
    }, []);
  
    // 지도에 마커를 추가하고 중심을 이동시키는 함수
    const addMarker = (latitude, longitude, scrollToTop = false) => {
        if (map) {
            // 현재 지도에 있는 모든 마커를 제거
            markers.forEach(marker => marker.setMap(null));
            setMarkers([]); // 마커 상태 초기화
  
            const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
  
            marker.setMap(map); // 마커를 지도에 추가
            setMarkers([marker]); // 새로운 마커를 상태에 저장

            // 마커 위치로 지도 중심 이동
            map.setCenter(markerPosition);

            // 페이지 하단 버튼 클릭 시 상단으로 스크롤 이동
            if (scrollToTop) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };
  
    return (
        <div className='single-item'>
            <header>
                <h2>오름 위치</h2>
            </header>
            
            <div className='mapContainer' style={{ width: '90%', height: '350px' }}>
                <div id="map" style={{ width: '100%', height: '100%' }}></div>
            </div>

            <hr />
            <h3>제주도 오름의 위치를 <br/>버튼을 눌러 확인해 보세요</h3>
            <ul className='places-grid'>
                {places.length > 0 && (
                    <>
                        <div className='place-item'>
                            <a href={places[0].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/201812/19/84e7db69-9725-4429-aa5a-86bab0d8b353.JPG" alt="카카오오름" />
                            </a>
                            <p>{places[0].placeName}</p>
                            <p>{places[0].addressJibun}</p>
                            <button className='A0' onClick={() => addMarker(places[0].latitude, places[0].longitude)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[1].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/3439836c-37b6-4c8a-876f-bb112422e243.jpg" alt="돌오름" />
                            </a>
                            <p>{places[1].placeName}</p>
                            <p>{places[1].addressJibun}</p>
                            <button className='A1' onClick={() => addMarker(places[1].latitude, places[1].longitude)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[2].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/202111/10/3b72914a-8a8f-4a2a-9139-82cabebbb1b9.jpg" alt="사라오름" />
                            </a>
                            <p>{places[2].placeName}</p>
                            <p>{places[2].addressJibun}</p>
                            <button className='A2' onClick={() => addMarker(places[2].latitude, places[2].longitude)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[3].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/202112/07/d4714d62-9fe0-4083-a07e-dcc78e59ac06.jpg" alt="봉아오름" />
                            </a>
                            <p>{places[3].placeName}</p>
                            <p>{places[3].addressJibun}</p>
                            <button className='A3' onClick={() => addMarker(places[3].latitude, places[3].longitude)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[4].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/202112/22/5a51dbb8-2b40-413c-a96c-27b8b6d7e294.jpg" alt="당오름" />
                            </a>
                            <p>{places[4].placeName}</p>
                            <p>{places[4].addressJibun}</p>
                            <button className='A4' onClick={() => addMarker(places[4].latitude, places[4].longitude)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[5].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/75e5bd68-97f9-471d-be28-88ecda738b30.jpg" alt="한라산 볼칸디오름" />
                            </a>
                            <p>{places[5].placeName}</p>
                            <p>{places[5].addressJibun}</p>
                            <button className='A5' onClick={() => addMarker(places[5].latitude, places[5].longitude, true)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[6].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/202112/07/d4714d62-9fe0-4083-a07e-dcc78e59ac06.jpg" alt="볼칸딩오름" />
                            </a>
                            <p>{places[6].placeName}</p>
                            <p>{places[6].addressJibun}</p>
                            <button className='A6' onClick={() => addMarker(places[6].latitude, places[6].longitude, true)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[7].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/21/0d54e8b8-0c7e-44b0-9a62-fb77a847f132.jpg" alt="논오름" />
                            </a>
                            <p>{places[7].placeName}</p>
                            <p>{places[7].addressJibun}</p>
                            <button className='A7' onClick={() => addMarker(places[7].latitude, places[7].longitude, true)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[8].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/2b316191-a887-436b-ba48-e7ce3a011e27.jpg" alt="열안지 오름" />
                            </a>
                            <p>{places[8].placeName}</p>
                            <p>{places[8].addressJibun}</p>
                            <button className='A8' onClick={() => addMarker(places[8].latitude, places[8].longitude, true)}>지도로 위치 보기</button>
                        </div>
                        <div className='place-item'>
                            <a href={places[9].placeUrl}>
                                <img src="https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/1a5eb597-ecc4-433f-b6d5-3c9f1d0a399e.jpg" alt="밧세미 오름" />
                            </a>
                            <p>{places[9].placeName}</p>
                            <p>{places[9].addressJibun}</p>
                            <button className='A9' onClick={() => addMarker(places[9].latitude, places[9].longitude, true)}>지도로 위치 보기</button>
                        </div>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Oreum;
