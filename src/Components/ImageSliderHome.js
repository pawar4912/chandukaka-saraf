import * as React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import PropTypes, { element } from 'prop-types';
import ImageSliderCardHome from './ImageSliderCardHome';
import LeftIcon from '../images/icons/sliderLeftIcon.svg';
import RightIcon from '../images/icons/sliderRightIcon.svg';
import useWindowWidthAndHeight from '../utilities/CustomHooks';
import { Grid } from '@mui/material';
import _ from 'lodash';

function ImageSliderHome({ height, width, CardImage,padding, CardImageType, className, imagesArray }) {
  const {
    scrollRef, pages,activePageIndex, next, prev, goTo
  } = useSnapCarousel();
  const windoDimensions = useWindowWidthAndHeight();
  return (
    <>
      { windoDimensions[0]  >= 768 && <div className={(padding ==0 ? ('image-slider-navigation-icon image-slider-navigation-icon-no-width'): 'image-slider-navigation-icon' )}>
        <button className="arrow-icon-generic" type="button" onClick={() => prev()}>
          <img src={LeftIcon} alt="React Logo" />
        </button>
        <button className="arrow-icon-generic" type="button" onClick={() => next()}>
          <img src={RightIcon} alt="React Logo" />
        </button>
      </div>}
      <ul
        className={`image-slider-component ${className}`}
        ref={scrollRef}
      >
        { CardImageType== "Favourites" && windoDimensions[0] <=768 ?_.chunk(imagesArray, 4).map((item)=> (
              <div className="item-section">
                {item.map((inneritem, index) => (
                <ImageSliderCardHome CardImageType={CardImageType} key={index} CardImage={inneritem} />
              ))}
              </div>
        )) : imagesArray.map((item, index) => (
              <ImageSliderCardHome CardImageType={CardImageType} height={height} width={width} key={index} CardImage={item} padding={padding}/>
          ))}
      </ul>
      { CardImageType== "Favourites" && windoDimensions[0] <768  && <ol style={{ display: 'flex', justifyContent: "center", paddingLeft: "0", marginTop: 24, marginBottom: 0 }}>
        {pages.map((_, i) => (
            <button key={i} className='image-scroll-navigation'
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
            </button>
        ))}
      </ol>}
    </>
  );
}
export default ImageSliderHome;



{/* <Grid container spacing={1}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Grid item xs={6} md={3}>
              <ImageSliderCardHome height={height} width={width} key={item} CardImage={CardImage} padding={padding}/>
             </Grid>
          ))}
        </Grid> */}
