import React from 'react'
import style from './style.module.scss'

const Icon = ({thumbUrl,title}) => {
  const shortenedTitle = title.split(' ')[0]
  return (
    <>
    <div className={style.icon}>
      <img className={style['icon-img']} src={thumbUrl} alt={shortenedTitle} />
    </div>
    <p>{shortenedTitle}</p>
    </>
  )
}

export default Icon