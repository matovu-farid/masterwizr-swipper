import React, { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../../contexts/imageContext';
import style from './style.module.scss';

const SliderImage = ({ index, image }) => {
  const { selectedImageIndex } = useContext(ImageContext);
  const ref = useRef(null);
  useEffect(() => {
    if (selectedImageIndex === index) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedImageIndex]);

  return (
    <img
      ref={ref}
      className={style['slider-img']}
      src={image.url}
      alt={image.title}
      key={image.id}
    />
  );
};

export default SliderImage;
