import * as React from 'react';
import { Divider } from '@mui/material';

export default function ImageSliderCardHome({CardImage, padding, CardImageType}) {
  return (
    <div className={ "" +CardImageType + "-item-section image-slide-card-container"}>
      <img src={`${CardImage}`} />
      { padding ==0 && <Divider variant="middle" />}
      <p className={ padding ==0  ? "image-slider-card-text no-border": "image-slider-card-text"}>
        skjnddsjnc
      </p>
    </div>
  );
}
