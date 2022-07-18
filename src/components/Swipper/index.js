import React, { useEffect, useState } from 'react';
import BASEURL from '../../contants';

import IconList from '../IconList';
import Slider from '../Slider';
import style from './style.module.scss';

const Swipper = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(BASEURL);
      const fetchedImages = await response.json();
      const limitedImages = fetchedImages.slice(0, 6);
      setImages(limitedImages);
    };
    fetchImages();
  }, []);
  if (images.length <= 0) return null;

  return (
    <div className={style.swipper}>
      <h1 className={style.heading}>Materwizr modules</h1>

      <IconList images={images} />

      <Slider images={images} />
    </div>
  );
};

export default Swipper;
