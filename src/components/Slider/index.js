import React, { useContext } from 'react';
import { ImageContext } from '../../contexts/imageContext';
import SwipeDetector from '../SwipeDetector';
import style from './style.module.scss';

const Slider = ({ images }) => {
  const { selectedImageIndex } = useContext(ImageContext);
  const selectedImage = images[selectedImageIndex];
  return (
    <div className={style.slider}>
      <SwipeDetector>
        <img
          className={style['slider-img']}
          src={selectedImage.url}
          alt={selectedImage.title}
          key={selectedImage.id}
        />
      </SwipeDetector>

    </div>
  );
};

export default Slider;
