import React, { useContext } from 'react';
import { ImageContext } from '../../contexts/imageContext';
import style from './style.module.scss';

const Icon = ({ thumbnailUrl, title, index }) => {
  const { goToImageAtIndex } = useContext(ImageContext);
  const shortenedTitle = title.split(' ')[0];
  return (
    <button type="button" onClick={() => goToImageAtIndex(index)} className={style['labelled-icon']}>
      <div className={style.icon}>
        <img className={style['icon-img']} src={thumbnailUrl} alt={shortenedTitle} />
      </div>
      <p>{shortenedTitle}</p>
    </button>
  );
};

export default Icon;
