import React from 'react'
import image1 from './img1.jpg'
import image2 from './img2.webp'
import image3 from './img3.webp'
import image4 from './img4.jpg'
import image5 from './img5.jpg'
import image6 from './img6.jpg'
export default function ImageGallery() {
  return (
    <div className="slider">
        <div className="slide-track">
        <div className="slide">
            <img src={image1} alt="image1" />
        </div>
        <div className="slide">
            <img src={image2} alt="image2" />
        </div>
        <div className="slide">
        <   img src={image3} alt="image3" />   
        </div>
        <div className="slide">
            <img src={image4} alt="image4" />
        </div>
        <div className="slide">
            <img src={image5} alt="image5" />
        </div>
        <div className="slide">
            <img src={image6} alt="image6" />
        </div>
        {/* same 6 slides */}
        <div className="slide">
            <img src={image1} alt="image1" />
        </div>
        <div className="slide">
            <img src={image2} alt="image2" />
        </div>
        <div className="slide">
        <   img src={image3} alt="image3" />   
        </div>
        <div className="slide">
            <img src={image4} alt="image4" />
        </div>
        <div className="slide">
            <img src={image5} alt="image5" />
        </div>
        <div className="slide">
            <img src={image6} alt="image6" />
        </div>
        </div>
    </div>
  )
}
