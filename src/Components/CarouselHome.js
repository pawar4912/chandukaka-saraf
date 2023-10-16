import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import rightArrowIcon from '../images/icons/right-arrow.svg';
import image from '../images/Group265.png';

const items = [
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: image,
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: '../images/Group 265.png',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: '../images/Group 265.png',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: '../images/Group 265.png',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: '../images/Group 265.png',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: '../images/Group 265.png',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radianc',
    imagepath: '../images/Group 265.png',
  },
];

function CarouselHome() {
  return (
    <div className="slider-container">
      <div className="service-slider">
        <Carousel
          animation="slide"
          duration={2300}
          swipe="true"
          className="service-slide active"
          indicatorIconButtonProps={{
            style: {
              padding: '5px',
              marginTop: '-250px',
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
            items.map((item) => (
              <Paper key={item.name} className="carouselPaper" style={{ backgroundImage: `url(${image})` }}>
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
      </div>
    </div>
  );
}

export default CarouselHome;
