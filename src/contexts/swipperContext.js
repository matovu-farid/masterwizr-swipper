import { createContext } from "react";

const imageContext = createContext({
  selectedImage: null,
  goToNextImage : null,
  goToPreviousImage: null
})

const ImageProvider = ({children})=>{
  const [imageIndex,setImageIndex] = useState({
    selectedImage: 0,
    goToNextImage,
    goToPreviousImage
  })
  const goToNextImage = ()=> setImageIndex(currentImageIndex=> currentImageIndex + 1)
  const goToPreviousImage = ()=> setImageIndex(currentImageIndex=> currentImageIndex - 1)

  return (<imageContext.Provider value={imageIndex}>
     {children}
  </imageContext.Provider>)
}
export default ImageProvider