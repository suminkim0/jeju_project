import { useLocation, useNavigate } from "react-router-dom";
import styles from './../css/mainNext.module.css';

export default function MainNext() {
  const location = useLocation();
  const { where } = location.state || { where: '' };
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 버튼 데이터 배열
  const buttons = [
    { label: '맛집', path: '/restaurant' },
    { label: '날씨', path: '/weather' },
    { label: '관광', path: '/tourism' },
    { label: '숙박', path: '/accommodation' },
    { label: '공공 와이파이', path: '/wifi' },
    { label: '버스 정류소', path: '/bus-stop' },
  ];

  // 버튼 클릭 핸들러
  const handleButtonClick = (path) => {
    navigate(path, { state: { where } }); // 해당 경로로 이동
  };

  return (
    <div className={styles.container}>
      <p>{where}의 무엇이 궁금하신가요?</p>
      {buttons.map((button) => (
        <button
          key={button.label}
          className={styles.btn} // CSS 클래스 유지
          onClick={() => handleButtonClick(button.path)} // 버튼 클릭 시 해당 경로로 이동
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}