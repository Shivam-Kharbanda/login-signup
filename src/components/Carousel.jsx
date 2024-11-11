import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const Carousel = ({ isSignUpMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];
  const texts = ["Create your own courses", "Customize as you like", "Invite students to your class"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`absolute top-0 h-full w-1/2 bg-orange-100 rounded-3xl flex flex-col justify-center items-center transition-all duration-700 ${isSignUpMode ? "translate-x-full" : ""}`}>
      <img src={images[currentIndex]} alt="carousel" className="w-full object-cover rounded-2xl transition-opacity duration-500" />
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold">{texts[currentIndex]}</h2>
        <div className="flex mt-2 space-x-1">
          {images.map((_, index) => (
            <span key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-400"} cursor-pointer transition-all`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;