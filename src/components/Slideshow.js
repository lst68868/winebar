import React, { useState, useEffect } from "react";
import southfrance from "../assets/slideshow_img/rose-south-of-france-.jpg";
import winegrapes from "../assets/slideshow_img/two-glasses-of-wine-grapes-and-blue-cheese-royalty-free-image-1686255475.jpg";
import whitewine from "../assets/slideshow_img/White-Wine-Banner.jpg";
import sparkling from "../assets/slideshow_img/Celebrate With Sparkling.jpg";

function Slideshow() {
  const images = [southfrance, winegrapes, whitewine, sparkling];

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
        className="w-[393px] h-[289px] left-0 top-0 absolute"
        src={images[currentImageIndex]}
      />
      <div className="w-[61px] h-[19px] left-[166px] top-[225px] absolute bg-black opacity-50 rounded-[20px] flex justify-between justify-center align-items-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[7px] h-[7px] ${
              currentImageIndex === index ? "bg-white" : "bg-zinc-300"
            } rounded-full opacity-${currentImageIndex === index ? "100" : "50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

//INITIAL CODE TESTING IMAGES BUT NO CIRCLES

//import React, { useState, useEffect } from "react";
// import southfrance from "../assets/slideshow_img/rose-south-of-france-.jpg";
// import winegrapes from "../assets/slideshow_img/two-glasses-of-wine-grapes-and-blue-cheese-royalty-free-image-1686255475.jpg";
// import whitewine from "../assets/slideshow_img/White-Wine-Banner.jpg";
// import sparkling from "../assets/slideshow_img/Celebrate With Sparkling.jpg";

// function Slideshow() {

//   const images = [southfrance, winegrapes, whitewine, sparkling];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((currentImageIndex + 1) % images.length);
//     }, 3000); // change image every 3 seconds

//     return () => clearInterval(timer);
//   }, [currentImageIndex]);

//   return (
//     <div className="w-[393px] h-[250px] relative">
//       <img className="w-[393px] h-[289px] left-0 top-0 absolute" src={images[currentImageIndex]} />
//       <div className="w-[61px] h-[19px] left-[167px] top-[221px] absolute opacity-50 bg-black rounded-[20px] relative">
//         {images.map((image, index) => (
//           <div key={index} className={`w-[7px] h-[7px] absolute left-[${10 + 14*index}px] top-[6px] ${currentImageIndex === index ? "bg-white" : "opacity-30 bg-zinc-300"} rounded-full`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slideshow;

