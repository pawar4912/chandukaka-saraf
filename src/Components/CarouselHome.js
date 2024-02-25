import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import rightArrowIcon from '../images/icons/right-arrow.svg';
import imageMobileView from '../images/mobile-view-corousel.png';
import useWindowWidthAndHeight from '../utilities/CustomHooks';
import img1 from '../images/banners/desktop/1.jpg';
import img2 from '../images/banners/desktop/2.jpg';
import img3 from '../images/banners/desktop/3.jpg';
import imgMob1 from '../images/banners/mobile/1.jpg';
import imgMob2 from '../images/banners/mobile/2.jpg';
import imgMob3 from '../images/banners/mobile/3.jpg';

const items = [
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: img1,
    mobileImagePath: imgMob1,
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: img2,
    mobileImagePath: imgMob2,
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: img3,
    mobileImagePath: imgMob3,
  },
];

function CarouselHome() {
	const [firstDesktopLoaded, setDesktopImgLoaded] = useState(false);
  const [firstMobileLoaded, setMobileImgLoaded] = useState(false);
  const windoDimensions = useWindowWidthAndHeight();
  return (
    <div className="slider-container">
      <div className="service-slider">
      <img
		    src={img1}
		    onLoad={() => setDesktopImgLoaded(true)}
		    style={{ display: "none" }}
		  />
      <img
		    src={imageMobileView}
		    onLoad={() => setMobileImgLoaded(true)}
		    style={{ display: "none" }}
		  />
      {firstDesktopLoaded && firstMobileLoaded && (
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
              height: '100%'
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              opacity: '1',
            },
          }}
        >
          {
            items.map((item) => (
              <Paper key={item.name} className="carouselPaper" >
                <img className="carousel-img" src={windoDimensions[0] <= 768 ? `${item.mobileImagePath}`:  `${item.imagepath}` } />
                <div className="service-slide-text-wrapper">
                  <h2 className="service-slide-text">{item.name}</h2>
                  <p className="service-slide-description">{item.description}</p>
                  {/* <button type="button" className="carousel-explore-now-btn">
                    EXPORE NOW
                    {' '}
                    <img src={rightArrowIcon} alt="rightArrowIcon" />
                  </button> */}
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
