import React, { useState, useEffect } from "react";
import southfrance from "../assets/slideshow_img/rose-south-of-france-.jpg";
import winegrapes from "../assets/slideshow_img/two-glasses-of-wine-grapes-and-blue-cheese-royalty-free-image-1686255475.jpg";
import whitewine from "../assets/slideshow_img/White-Wine-Banner.jpg";

function Slideshow() {
  const images = [whitewine, southfrance, winegrapes];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="w-[393px] h-[250px] relative">
      <img
        className="w-[393px] h-[250px] left-0 top-0 absolute"
        src={images[currentImageIndex]}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[61px] h-[19px] bg-black opacity-50 rounded-[20px] flex justify-between items-center px-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[7px] h-[7px] ${
              currentImageIndex === index ? "bg-white" : "bg-white opacity-50"
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
