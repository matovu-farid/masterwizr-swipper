import React from 'react'
import Icon from '../Icon'
import style from './style.module.scss'

const IconList = ({images}) => {
  return (
    <div className={style['icon-list']}>
      {
        images.map(image=>(<Icon key={image.id} thumbnailUrl={image.thumbnailUrl} title={image.title} />))
      }
    </div>
  )
}

export default IconList