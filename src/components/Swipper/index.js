import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../contants'

const Swipper = () => {
  const [images, setImages] = useState([])
  
  useEffect(()=>{
    const fetchImages=async ()=>{
      const response = await fetch(BASEURL)
      const fetchedImages = await response.json()
      const limitedImages = fetchedImages.slice(0,6)
      setImages(limitedImages)
    }
    fetchImages()
  },[])
  return (
    <div>{images.map(image=>(<img src={image.url} alt={image.title} key={image.id}/>))}</div>
  )
}

export default Swipper