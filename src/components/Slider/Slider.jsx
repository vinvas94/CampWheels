import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from '../../assets/images/slide_1.jpg';
import image2 from '../../assets/images/slide_2.jpg';
import image3 from '../../assets/images/slide_3.jpg';

const fadeImages = [image1, image2, image3];

const Slideshow = () => {
  return (
    <div className="slider-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} alt="campers" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} alt="campers" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} alt="campers" />
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
