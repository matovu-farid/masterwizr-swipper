import React from 'react';
import Icon from '../Icon';
import style from './style.module.scss';

const IconList = ({ images }) => (
  <div className={style['icon-list']}>
    {
        images.map((image, index) => (
          <Icon
            index={index}
            key={image.id}
            thumbnailUrl={image.thumbnailUrl}
            title={image.title}
          />
        ))
      }
  </div>
);

export default IconList;
