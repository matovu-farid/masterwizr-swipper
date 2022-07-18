import { createContext, useState } from 'react';

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
  const goToNextImage = () => setImageIndex((state) => {
    if (state.selectedImageIndex >= 5) {
      return ({
        ...state,
        selectedImageIndex: 0,
      }
      );
    }
    return (

      {
        ...state,
        selectedImageIndex: state.selectedImageIndex + 1,
      });
  });
  const goToPreviousImage = () => setImageIndex((state) => {
    if (state.selectedImageIndex <= 0) {
      return ({
        ...state,
        selectedImageIndex: 5,
      }
      );
    }
    return (
      {
        ...state,
        selectedImageIndex: state.selectedImageIndex - 1,
      });
  });
  const [imageIndex, setImageIndex] = useState({
    selectedImageIndex: 0,
    goToNextImage,
    goToPreviousImage,
    goToImageAtIndex,
  });

  return (
    <ImageContext.Provider value={imageIndex}>{children}</ImageContext.Provider>
  );
};
export default ImageProvider;
