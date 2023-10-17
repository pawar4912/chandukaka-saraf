import * as React from 'react';
import { Divider } from '@mui/material';

export default function ImageSliderCardHome({height, width, CardImage, padding}) {
  return (
    <div className="image-slide-card-container" 
      style={{ backgroundImage: `url(${CardImage})`, 
      minHeight: height,
      maxHeight: height, 
      maxWidth: width,
      minWidth: width, 
      marginRight: padding,
    }}>
      { padding ==0 && <Divider variant="middle" />}
      <p className={ padding ==0  ? "image-slider-card-text no-border": "image-slider-card-text"}>
        skjnddsjnc
      </p>
    </div>
  );
}
