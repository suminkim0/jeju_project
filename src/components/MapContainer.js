import React, { useEffect } from 'react';
import styles from './../css/mapContainer.module.css';
import locationIcon from '../img/location.png';

function MapContainer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=5a2233f852a28fedf7e6cdf86b5ecc0f&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.4899, 126.4983),
          level: 8
        };

        const map = new window.kakao.maps.Map(container, options);

        const placeOverlay = new window.kakao.maps.CustomOverlay({ zIndex: 1 });
        const contentNode = document.createElement('div');
        const markers = [];
        let currCategory = '';

        contentNode.className = styles.placeinfo_wrap;
        placeOverlay.setContent(contentNode);

        function addEventHandle(target, type, callback) {
          if (target.addEventListener) {
            target.addEventListener(type, callback);
          } else {
            target.attachEvent('on' + type, callback);
          }
        }

        addEventHandle(contentNode, 'mousedown', window.kakao.maps.event.preventMap);
        addEventHandle(contentNode, 'touchstart', window.kakao.maps.event.preventMap);

        function searchPlaces() {
          if (!currCategory) return;

          placeOverlay.setMap(null);
          removeMarker();

          const ps = new window.kakao.maps.services.Places(map);
          ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
        }

        function placesSearchCB(data, status, pagination) {
          if (status === window.kakao.maps.services.Status.OK) {
            displayPlaces(data);
          }
        }

        function displayPlaces(places) {
          const order = document.getElementById(currCategory).getAttribute('data-order');

          for (let i = 0; i < places.length; i++) {
            const marker = addMarker(new window.kakao.maps.LatLng(places[i].y, places[i].x), order);

            (function(marker, place) {
              window.kakao.maps.event.addListener(marker, 'click', function() {
                displayPlaceInfo(place);
              });
            })(marker, places[i]);
          }
        }

        function addMarker(position, order) {
          const imageSrc = locationIcon;
          const imageSize = new window.kakao.maps.Size(27, 28);
          const imgOptions = {
            offset: new window.kakao.maps.Point(13, 28)
          };

          const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
          const marker = new window.kakao.maps.Marker({
            position: position,
            image: markerImage
          });

          marker.setMap(map);
          markers.push(marker);

          return marker;
        }

        function removeMarker() {
          for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers.length = 0;
        }

        function displayPlaceInfo(place) {
          const content = `
            <div class="${styles.placeinfo}">
              <a class="${styles.title}" href="${place.place_url}" target="_blank" title="${place.place_name}">${place.place_name}</a>
              ${place.road_address_name ? `<span title="${place.road_address_name}">${place.road_address_name}</span><span class="${styles.jibun}" title="${place.address_name}">(지번 : ${place.address_name})</span>` : `<span title="${place.address_name}">${place.address_name}</span>`}
              <span class="${styles.tel}">${place.phone}</span>
            </div>
            <div class="${styles.after}"></div>
          `;

          contentNode.innerHTML = content;
          placeOverlay.setPosition(new window.kakao.maps.LatLng(place.y, place.x));
          placeOverlay.setMap(map);
        }

        function addCategoryClickEvent() {
          const category = document.getElementById('category');
          const children = category.children;

          for (let i = 0; i < children.length; i++) {
            children[i].onclick = onClickCategory;
          }
        }

        function onClickCategory() {
          const id = this.id;
          const className = this.className;

          placeOverlay.setMap(null);

          if (className === styles.on) {
            currCategory = '';
            changeCategoryClass();
            removeMarker();
          } else {
            currCategory = id;
            changeCategoryClass(this);
            searchPlaces();
          }
        }

        function changeCategoryClass(el) {
          const category = document.getElementById('category');
          const children = category.children;

          for (let i = 0; i < children.length; i++) {
            children[i].className = '';
          }

          if (el) {
            el.className = styles.on;
          }
        }

        addCategoryClickEvent();
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.mapContainerAll}>
      <div className={styles.mapContainer}>
        <div id="map" style={{ width: '95%', height: '100%' }}></div>
        <div id="category" className={styles.category}>
          <span id="FD6" data-order="0">맛집</span>
          <span id="AT4" data-order="1">관광지</span>
          <span id="AD5" data-order="2">숙박시설</span>
        </div>
      </div>
      <div className={styles.MapContainerAll}>
        <p className={styles.mainDescription}>제주 지도를 보며 맛집, 관광지, 숙박시설의 위치를 확인하실 수 있습니다.</p>
        <p className={styles.mainDescription}>위치 클릭시 해당 상세 정보로 이동합니다.</p>
      </div>
    </div>
  );
}

export default MapContainer;