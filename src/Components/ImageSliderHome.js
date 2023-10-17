import * as React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import PropTypes from 'prop-types';
import ImageSliderCardHome from './ImageSliderCardHome';
import LeftIcon from '../images/icons/sliderLeftIcon.svg';
import RightIcon from '../images/icons/sliderRightIcon.svg';

function ImageSliderHome({ height, width, CardImage,padding }) {
  const {
    scrollRef, next, prev,
  } = useSnapCarousel();

  return (
    <>
      <div className={(padding ==0 ? ('image-slider-navigation-icon image-slider-navigation-icon-no-width'): 'image-slider-navigation-icon' )}>
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
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <ImageSliderCardHome height={height} width={width} key={item} CardImage={CardImage} padding={padding}/>
        ))}
      </ul>
    </>
  );
}
export default ImageSliderHome;
