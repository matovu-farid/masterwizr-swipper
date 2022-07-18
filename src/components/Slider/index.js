import React, { useContext } from 'react';
import { ImageContext } from '../../contexts/imageContext';
import SliderImage from '../SliderImage';
import SwipeDetector from '../SwipeDetector';
// import { ImageContext } from '../../contexts/imageContext';
import style from './style.module.scss';

const Slider = ({ images }) => {
  const { goToNextImage, goToPreviousImage } = useContext(ImageContext);

  return (
    <SwipeDetector onLeftSwipe={() => goToNextImage()} onRightSwipe={() => goToPreviousImage()}>

      <div className={style.slider}>
        {images.map((image, index) => (
          <SliderImage key={image.id} image={image} index={index} />
        ))}

      </div>
    </SwipeDetector>
  );
};
export default Slider;
