import { createContext, useState } from 'react';

export const ImageContext = createContext({
  selectedImageIndex: null,
  goToNextImage: null,
  goToPreviousImage: null,
});

const ImageProvider = ({ children }) => {
  const goToNextImage = () => setImageIndex((currentImageIndex) => currentImageIndex + 1);
  const goToPreviousImage = () => setImageIndex((currentImageIndex) => currentImageIndex - 1);
  const [imageIndex, setImageIndex] = useState({
    selectedImageIndex: 0,
    goToNextImage,
    goToPreviousImage,
  });

  return (
    <ImageContext.Provider value={imageIndex}>{children}</ImageContext.Provider>
  );
};
export default ImageProvider;
