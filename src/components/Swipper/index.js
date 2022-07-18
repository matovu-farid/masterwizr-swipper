import React, { useEffect, useState } from 'react';
import BASEURL from '../../contants';

import IconList from '../IconList';
import Slider from '../Slider';

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
    <>
      <h1>Materwizr modules</h1>
      <div>
        <IconList images={images} />
      </div>
      <Slider images={images} />
    </>
  );
};

export default Swipper;
