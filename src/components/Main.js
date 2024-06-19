import React, { useState, useEffect } from "react";
import './../css/main.css';

export default function Main() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    `${process.env.PUBLIC_URL}/img/new_jeju_1.jpg`,
    `${process.env.PUBLIC_URL}/img/new_jeju_2.jpg`,
    `${process.env.PUBLIC_URL}/img/new_jeju_3.jpg`,
    `${process.env.PUBLIC_URL}/img/new_jeju_6.png`,
    `${process.env.PUBLIC_URL}/img/new_jeju_7.png`,
    `${process.env.PUBLIC_URL}/img/new_jeju_8.jpg`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="img-container no-margin">
      {slides.map((slide, index) => (
        <img
          key={index}
          className={`mySlides ${index === slideIndex ? "active" : "inactive"}`}
          src={slide}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
