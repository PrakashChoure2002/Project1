import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>
          <img src={image3} alt="Item1"/>
          <p className="legend">Frontend Developer</p>
        </div>
        <div>
          <img src={image4} alt="Item2"/>
          <p className="legend">Peer-to-peer Support...</p>
        </div>

      </Carousel>

      
    </div>
  )
}

export default Services
