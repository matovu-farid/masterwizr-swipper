import React from 'react';
import style from './style.module.scss';

const Icon = ({ thumbnailUrl, title }) => {
  const shortenedTitle = title.split(' ')[0];
  return (
    <div className={style['labelled-icon']}>
      <div className={style.icon}>
        <img className={style['icon-img']} src={thumbnailUrl} alt={shortenedTitle} />
      </div>
      <p>{shortenedTitle}</p>
    </div>
  );
};

export default Icon;
