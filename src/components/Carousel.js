import React from 'react'
import redImage from '../assets/carousel_imgs/vino-red-wine-glass.jpeg'
import whiteImage from '../assets/carousel_imgs/kira-white-wine-glass.jpeg'
import roseImage from '../assets/carousel_imgs/Rose Glass For Horizontal Scroll.png'
import orangeImage from '../assets/carousel_imgs/GettyImages-1171685839-e1682535087146.jpeg'
import dessertImage from '../assets/carousel_imgs/riedel-sommeliers-sauternes_10.jpeg'
import sparklingImage from '../assets/carousel_imgs/PorshaSmokeChmpgnFluteROF21.jpeg'

import '../styles/carousel.css'

function Carousel() {
  return (
    <>
      <h2>Varieties</h2>
      <div className="carousel-container">
        <div className="carousel-entry" id="carousel-red">
          <img className="carousel-img" src={redImage} alt="Red Wine" />
          <h3 className="carousel-title">Red</h3>
        </div>
        <div className="carousel-entry" id="carousel-white">
          <img className="carousel-img" src={whiteImage} alt="White Wine" />
          <h3 className="carousel-title">White</h3>
        </div>
        <div className="carousel-entry" id="carousel-rose">
          <img className="carousel-img" src={roseImage} alt="Rosé" />
          <h3 className="carousel-title">Rosé</h3>
        </div>
        <div className="carousel-entry" id="carousel-orange">
          <img className="carousel-img" src={orangeImage} alt="Orange Wine" />
          <h3 className="carousel-title">Orange</h3>
        </div>
        <div className="carousel-entry" id="carousel-sparkling">
          <img className="carousel-img" src={sparklingImage} alt="Sparkling" />
          <h3 className="carousel-title">Sparkling</h3>
        </div>
        <div className="carousel-entry" id="carousel-dessert">
          <img className="carousel-img" src={dessertImage} alt="Dessert Wine" />
          <h3 className="carousel-title">Dessert</h3>
        </div>
      </div>
    </>
  )
}

export default Carousel
