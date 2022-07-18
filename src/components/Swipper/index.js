import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../contants'
import IconList from '../IconList'

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
    <>
    <h1>Materwizr modules</h1>
    <div>
      <IconList images={images}/>
    </div>
    <div>{images.map(image=>(<img src={image.url} alt={image.title} key={image.id}/>))}</div>
    </>
  )
}

export default Swipper