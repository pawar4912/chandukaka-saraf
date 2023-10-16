import * as React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import ImageSliderCardHome from './ImageSliderCardHome';
import LeftIcon from '../images/icons/sliderLeftIcon.svg';
import RightIcon from '../images/icons/sliderRightIcon.svg';

export default function ImageSliderHome() {
  const {
    scrollRef, next, prev,
  } = useSnapCarousel();
  return (
    <>
      <div>
        <button className="arrow-icon-generic" type="button" onClick={() => prev()}>
          <img src={LeftIcon} alt="React Logo" />
        </button>
        <button className="arrow-icon-generic" type="button" onClick={() => next()}>
          <img src={RightIcon} alt="React Logo" />
        </button>
      </div>
      <ul
        className="image-slider-component"
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory',
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <ImageSliderCardHome key={item} />
        ))}
      </ul>
    </>
  );
}
