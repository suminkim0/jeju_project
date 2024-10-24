import { useLocation } from "react-router-dom";

export default function MainNext() {
  const location = useLocation();
  const{where} = location.state || {where:''};

  return(
    <div>
      <p>{where}의 무엇이 궁금하신가요?</p>
      <button>맛집</button>
      <button>날씨</button>
      <button>관광</button>
      <button>숙박</button>
      <button>공공 와이파이</button>
      <button>버스 정류소</button>
    </div>
  );
}