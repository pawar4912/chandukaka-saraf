import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import rightArrowIcon from '../images/icons/right-arrow.svg';
import imageDesktopView from '../images/Group265.png';
import imageMobileView from '../images/mobile-view-corousel.png';
import useWindowWidthAndHeight from '../utilities/CustomHooks';

function CarouselHome({itemsCarouse}) {
	const [firstImgLoaded, setFirstImgLoaded] = useState(false);
  const windoDimensions = useWindowWidthAndHeight();
  return (
    <div className="slider-container">
      <div className="service-slider">
      <img
		    src={itemsCarouse[0].imagepath}
		    onLoad={() => setFirstImgLoaded(true)}
		    style={{ display: "none" }}
		  />
      {firstImgLoaded && (
        <Carousel
          animation="slide"
          duration={2300}
          interval={null}
          className="service-slide active"
          indicatorIconButtonProps={{
            style: {
              padding: '5px',
              marginTop: '-150px',
              zIndex: '1',
              color: '#FFFFFF',
              opacity: '0.3',
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              opacity: '1',
            },
          }}
        >
          {
            itemsCarouse.map((item) => (
              <Paper key={item.name} className="carouselPaper" >
                <img className="carousel-img" src={windoDimensions[0] <= 768 ? `${imageMobileView}`:  `${item.imagepath}` } />
                <div className="service-slide-text-wrapper">
                  <h2 className="service-slide-text">{item.name}</h2>
                  <p className="service-slide-description">{item.description}</p>
                  <button type="button" className="carousel-explore-now-btn">
                    EXPORE NOW
                    {' '}
                    <img src={rightArrowIcon} alt="rightArrowIcon" />
                  </button>
                </div>
              </Paper>
            ))
          }
        </Carousel>
		  )}
      </div>
    </div>
  );
}

export default CarouselHome;
