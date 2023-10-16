import * as React from 'react';
import { Divider } from '@mui/material';
import CardImage from '../images/MaskGroup8.png';

export default function ImageSliderCardHome() {
  return (
    <div className="image-slide-card-container" style={{ backgroundImage: `url(${CardImage})` }}>
      <Divider variant="middle" />
      <p className="image-slider-card-text">
        skjnddsjnc
      </p>
    </div>
  );
}
