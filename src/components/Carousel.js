import React from 'react'

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-entry" id='carousel-red'>
        <img
          src="replace"
          alt="Red Wine"
        />
        <h3 className="carousel-title">Red</h3>
      </div>
      <div className="carousel-entry" id='carousel-white'>
        <img
          src="winebar/src/assets/carousel_imgs/kira-white-wine-glass.jpeg"
        />
        <h3 className="carousel-title">White</h3>
      </div>
      <div className="carousel-entry" id='carousel-rose'>
        <img
          src="winebar/src/assets/carousel_imgs/Rose Glass For Horizontal Scroll.png"
          alt="Rosé"
        />
        <h3 className="carousel-title">Rosé</h3>
      </div>
      <div className="carousel-entry" id='carousel-orange'>
        <img
          src="winebar/src/assets/carousel_imgs/GettyImages-1171685839-e1682535087146.jpeg"
          alt="Orange Wine"
        />
        <h3 className="carousel-title">Orange</h3>
      </div>
      <div className="carousel-entry" id='carousel-sparkling'>
        <img
          src="winebar/src/assets/carousel_imgs/PorshaSmokeChmpgnFluteROF21.jpeg"
          alt="Sparkling"
        />
        <h3 className="carousel-title">Sparkling</h3>
      </div>
      <div className="carousel-entry" id='carousel-desert'>
        <img
          src="winebar/src/assets/carousel_imgs/riedel-sommeliers-sauternes_10.jpeg"
          alt="Desert Wine"
        />
        <h3 className="carousel-title">Desert</h3>
      </div>
    </div>
  )
}

export default Carousel
