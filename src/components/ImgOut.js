import { useEffect, useState } from "react";

export default function ImgOut({where}){
    const [imageData, setImageData] = useState([]);

  // API 호출 함수
  const fetchImageData = async (query) => {
    try {
      const response = await fetch(`https://dapi.kakao.com/v2/search/image?query=${encodeURIComponent(query)}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  };

  // 컴포넌트가 마운트 될 때 API 호출
  useEffect(()=>{
    if(where){
      fetchImageData(where);
    }
  },[where]); //where가 변경될 때마다 호출


  return(
    <div>
      {imageData.length}
    </div>
  );
}