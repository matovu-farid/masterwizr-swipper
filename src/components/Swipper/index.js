import React, { useContext, useEffect, useState } from 'react';
import BASEURL from '../../contants';

import { ImageContext } from '../../contexts/imageContext';
import IconList from '../IconList';

const Swipper = () => {
  const [images, setImages] = useState([]);
  const { selectedImageIndex } = useContext(ImageContext);
  const selectedImage = () => images[selectedImageIndex];

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
      <img src={selectedImage().url} alt={selectedImage().title} key={selectedImage().id} />
    </>
  );
};

export default Swipper;
