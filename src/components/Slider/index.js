import React from 'react';
// import { ImageContext } from '../../contexts/imageContext';
import style from './style.module.scss';

const Slider = ({ images }) =>
// const { selectedImageIndex } = useContext(ImageContext);
// const selectedImage = images[selectedImageIndex];
  (
    <div className={style.slider}>
      {
        images.map((image) => (
          <img
            className={style['slider-img']}
            src={image.url}
            alt={image.title}
            key={image.id}
          />
        ))
      }

    </div>
  );
export default Slider;
