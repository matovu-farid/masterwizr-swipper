import { createContext, useEffect, useState } from 'react';

export const ImageContext = createContext({
  selectedImageIndex: null,
  goToNextImage: null,
  goToPreviousImage: null,
  goToImageAtIndex: null,
});

const ImageProvider = ({ children }) => {
  const goToImageAtIndex = (index) => setImageIndex((state) => (
    {
      ...state,
      selectedImageIndex: index,
    }));
  const goToNextImage = () => setImageIndex((state) => (
    {
      ...state,
      selectedImageIndex: state.selectedImageIndex + 1,
    }));
  const goToPreviousImage = () => setImageIndex((state) => (
    {
      ...state,
      selectedImageIndex: state.selectedImageIndex - 1,
    }));
  const [imageIndex, setImageIndex] = useState({
    selectedImageIndex: 0,
    goToNextImage,
    goToPreviousImage,
    goToImageAtIndex,
  });
  useEffect(() => {
    console.log(imageIndex.selectedImageIndex);
  }, [imageIndex]);

  return (
    <ImageContext.Provider value={imageIndex}>{children}</ImageContext.Provider>
  );
};
export default ImageProvider;
