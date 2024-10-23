
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../css/weatherForecast.css';
import logo_sunny from '../img/sunny.png';
import logo_cloudy from '../img/cloudy.png';

// 날짜를 'YYYYMMDD' 형식으로 반환하는 함수
function getFormattedDate(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}${month}${day}`;
}
const WeatherForecast = () => {
    const [currentTemp, setCurrentTemp] = useState('');
    const [todayForecast, setTodayForecast] = useState({ minTemp: null, maxTemp: null, sky:null});
    const [forecastData_23, setForecastData_23] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [airQuality, setAirQuality] = useState('');
    const [rainProp, setRainProb] = useState('');
    const [airQualityColor, setAirQualityColor] = useState('black');
    const [skyColor,setSkyColor] = useState('');
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // 오늘과 어제 날짜를 'YYYYMMDD' 형식으로 설정
    const todayFormattedDay = getFormattedDate(0);
    const todayFormatted = `${todayFormattedDay}0600`;
    const yesterdayFormatted = getFormattedDate(-1);

    // 요일 배열 정의
    const weekdaysArray = ['일', '월', '화', '수', '목', '금', '토'];

    useEffect(() => {
        // 현재 온도 가져오기
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Jeju City&appid=26a241f783f886fc87ae3391bcb81933&units=metric')
            .then(response => {
                setCurrentTemp(Math.round(response.data.main.temp * 10) / 10);
            });

        // 오늘의 최저/최고 온도 & 하늘상태 가져오기
        axios.get(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=kkvqQmL9BYLpgte0SqI4wrsIesgLq5r4%2F%2B6iiiyDb6BDymUkRgSEl6Phi4qySCcCAxBrV6MlZpSp9oGsUYmKEg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${yesterdayFormatted}&base_time=0500&nx=52&ny=38`)
        .then(function (response) {
            const items = response.data.response.body.items.item;
            const todayData = items.filter(item => item.fcstDate === getFormattedDate(0));
            let mintemp = 0;
            let maxtemp = 0;
            let skyValue = '';
            todayData.forEach(item => {
                if (item.category === "TMN") {
                    mintemp = item.fcstValue;
                }
                if (item.category === "TMX") {
                    maxtemp = item.fcstValue;
                }
                if (item.category === "SKY"){
                    skyValue = item.fcstValue;
                    const skyMap = { '1': '맑음', '3': '구름많음', '4': '흐림' };
                    skyValue = skyMap[item.fcstValue] || '알 수 없음'; 
                }
            });
             // 하늘 상태에 따른 글씨 색상 설정
             let skyTextColor = '';
             if (skyValue === '맑음') {
                 skyTextColor = 'skyblue';
             } else if (skyValue === '구름많음') {
                 skyTextColor = 'blue';
             } else if (skyValue === '흐림') {
                 skyTextColor = 'gray';
             }

            setSkyColor(skyTextColor); 
            setTodayForecast({
                minTemp: mintemp,
                maxTemp: maxtemp,
                sky: skyValue
            });
        });

        // 1~2일 후의 날씨 예보 가져오기
        axios.get(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=kkvqQmL9BYLpgte0SqI4wrsIesgLq5r4%2F%2B6iiiyDb6BDymUkRgSEl6Phi4qySCcCAxBrV6MlZpSp9oGsUYmKEg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${todayFormattedDay}&base_time=0500&nx=52&ny=38`)
        .then(function (response) {
            let mintemp = 0;
            let maxtemp = 0;

            const newForecastData_23 = [];
            const items = response.data.response.body.items.item;

            // 1일 후의 데이터
            const data_1 = items.filter(item => item.fcstDate === getFormattedDate(1));
            data_1.forEach(item => {
                if (item.category === "TMN") {
                    mintemp = item.fcstValue;
                }
                if (item.category === "TMX") {
                    maxtemp = item.fcstValue;
                }
            });
            newForecastData_23.push({
                date: `${getFormattedDate(1).slice(6)} ${weekdaysArray[(new Date().getDay() + 1) % 7]}`, // 날짜 형식 변경
                min_temp: mintemp,
                max_temp: maxtemp
            });

            // 2일 데이터
            const data_2 = items.filter(item => item.fcstDate === getFormattedDate(2));
            data_2.forEach(item => {
                if (item.category === "TMN") {
                    mintemp = item.fcstValue;
                }
                if (item.category === "TMX") {
                    maxtemp = item.fcstValue;
                }
            });
            newForecastData_23.push({
                date: `${getFormattedDate(2).slice(6)} ${weekdaysArray[(new Date().getDay() + 2) % 7]}`, // 날짜 형식 변경
                min_temp: mintemp,
                max_temp: maxtemp
            });

            setForecastData_23(newForecastData_23);
        });

        // 3~7일 후의 날씨 예보 가져오기
        axios.get(`https://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=kkvqQmL9BYLpgte0SqI4wrsIesgLq5r4%2F%2B6iiiyDb6BDymUkRgSEl6Phi4qySCcCAxBrV6MlZpSp9oGsUYmKEg%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&regId=11G00201&tmFc=${todayFormatted}`)
            .then(response => {
                const items = response.data.response.body.items.item[0];
                const newForecastData = [];
                for (let i = 3; i <= 7; i++) {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const formattedDate = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
                    newForecastData.push({
                        date: `${formattedDate.slice(6)} ${weekdaysArray[date.getDay()]}`, // 날짜 형식 변경
                        min_temp: items[`taMin${i}`] !== undefined ? items[`taMin${i}`] : '데이터 없음',
                        max_temp: items[`taMax${i}`] !== undefined ? items[`taMax${i}`] : '데이터 없음'
                    });
                }
                setForecastData(newForecastData);
            });

        // 미세먼지 등급을 반환하는 함수
    function getAverageGrade(pm10Average) {
        if (pm10Average <= 30) {
        return "좋음";
        } else if (pm10Average <= 80) {
        return "보통";
        } else if (pm10Average <= 150) {
        return "나쁨";
        } else {
        return "매우 나쁨";
        }
}
       //  미세먼지 데이터 가져오기
        axios.get('https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=kkvqQmL9BYLpgte0SqI4wrsIesgLq5r4%2F%2B6iiiyDb6BDymUkRgSEl6Phi4qySCcCAxBrV6MlZpSp9oGsUYmKEg%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%A0%9C%EC%A3%BC&ver=1.3')
            .then(response => {
                const jejuAirQuality = response.data.response.body.items.filter(item => item.stationName !== "제주항");
                let pm10Sum = 0;
                let pm10Count = 0;

                jejuAirQuality.forEach(item => {
                    if (item.pm10Value !== null) {
                        pm10Sum += parseInt(item.pm10Value, 10);
                        pm10Count++;
                    }
                });

                const pm10Average = (pm10Sum / pm10Count).toFixed(2);
                const pm10AverageGrade = getAverageGrade(pm10Average);

                setAirQuality(pm10AverageGrade);
                updateAirQuality(pm10AverageGrade); 
            });      

            function getAirQualityColor(grade) {
                switch (grade) {
                    case "좋음":
                        return "blue";
                    case "보통":
                        return "green";
                    case "나쁨":
                        return "orange";
                    case "매우 나쁨":
                        return "red";
                    default:
                        return "black";
                }
            }
    
            function updateAirQuality(grade) {
                const color = getAirQualityColor(grade);
                setAirQualityColor(color);
            }
    
    }, []); // 빈 배열을 두어 컴포넌트가 처음 마운트될 때만 실행
      
     
    // 강수확률 불러오는 부분
    useEffect(() => {
        axios.get('https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?' +
                  'serviceKey=kkvqQmL9BYLpgte0SqI4wrsIesgLq5r4%2F%2B6iiiyDb6BDymUkRgSEl6Phi4qySCcCAxBrV6MlZpSp9oGsUYmKEg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=' + yesterdayFormatted + '&base_time=0500&nx=52&ny=38')
            .then(response => {
                const items = response.data.response.body.items.item;
                const popItem = items.find(item => item.category === 'POP');
                
                if (popItem) {
                    setRainProb(popItem.fcstValue + '%');
                } else {
                    setRainProb('No POP data available');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setRainProb('Error fetching data');
            });
    }, []);

    // 날씨 예보 날짜 설정
    useEffect(() => {
        updateWeeklyForecast();
    }, []);

    const updateWeeklyForecast = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1); // 첫째 날을 내일로 설정
        const weekdaysArray = ['일', '월', '화', '수', '목', '금', '토'];
        const newForecastData_23 = [];
        const newForecastData = [];

        for (let i = 0; i < 7; i++) {
            const futureDate = new Date(tomorrow);
            futureDate.setDate(tomorrow.getDate() + i);
            const day = futureDate.getDate();
            const weekday = weekdaysArray[futureDate.getDay()];
            const dateStr = `${day} ${weekday}`;
            const forecastEntry = {
                date: dateStr
            };
            
            if (i < 2) {
                newForecastData_23.push(forecastEntry);
            } else {
                newForecastData.push(forecastEntry);
            }
        }

        setForecastData_23(newForecastData_23);
        setForecastData(newForecastData);
    };

    return (
        <div className="weather-container">
            <div className="header">
                <span className="label">날씨</span>
                <span className="location">제주도</span>
            </div>
            <hr />
            <div className="current-weather">
            <div className ="middle-section">
                <div className="left-section">
                    <div className="icon-temp-desc">
                    
                        <div className="icon"><img src={logo_sunny} width="70%" alt="day icon" /></div>
                        <div className="right-section">
                        <div className="temp-desc">
                            <div className="temp">{currentTemp}º</div>
                            <div className="desc"><span style={{ color: skyColor }}>{todayForecast.sky}</span></div>
                        </div>
                    
                    <div className="details">
                        <div className="today-temp">{todayForecast.minTemp}º / {todayForecast.maxTemp}º</div>
                        <div className="rain-mise">
                            <div className="rain-prob">강수<span className='rain-prop'>{rainProp}</span></div>
                            <div className="air">미세 <span className="grade" style={{ color: airQualityColor }}>{airQuality}</span></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="weekly-forecast">
                {forecastData_23.map((day, index) => (
                    <div className="day" key={index}>
                        <span className="day-label">{day.date}</span>
                        <span className="day-icon"><img src={logo_cloudy} width="100%" alt="day icon" /></span>
                        <span className="day-temp">{day.min_temp}º/{day.max_temp}º</span>
                    </div>
                ))}
                {forecastData.map((day, index) => (
                    <div className="day" key={index}>
                        <span className="day-label">{day.date}</span>
                        <span className="day-icon"><img src={logo_sunny} width="100%" alt="day icon" /></span>
                        <span className="day-temp">{day.min_temp}º/{day.max_temp}º</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
