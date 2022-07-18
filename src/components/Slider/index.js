import React, { useContext } from 'react';
import { ImageContext } from '../../contexts/imageContext';
import SliderImage from '../SliderImage';
import SwipeDetector from '../SwipeDetector';
import style from './style.module.scss';
import { ImCircleLeft, ImCircleRight } from 'react-icons/im';

const Slider = ({ images }) => {
  const { goToNextImage, goToPreviousImage } = useContext(ImageContext);

  return (
    <SwipeDetector onLeftSwipe={() => goToNextImage()} onRightSwipe={() => goToPreviousImage()}>
      <section className={style['slider-section']}>
        <ImCircleLeft className={style.button} onClick={goToPreviousImage} />
        <div className={style.slider}>
          {images.map((image, index) => (
            <SliderImage key={image.id} image={image} index={index} />
          ))}

        </div>
        
          <ImCircleRight className={style.button} onClick={goToNextImage} />
      </section>

    </SwipeDetector>
  );
};
export default Slider;
