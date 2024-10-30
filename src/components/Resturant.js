import { useLocation } from "react-router-dom";
import ImgOut from "./ImgOut";

//사용자가 선택한 장소의 위도, 경도를 반환해주는 컴포넌트
export default function Restaurant(){
  const location = useLocation();
  const {where, locationData} = location.state || {where : ''};
  console.log(where);
  console.log(locationData);

  return(
    <div>
      <ImgOut where={where} />
    </div>
  );
}