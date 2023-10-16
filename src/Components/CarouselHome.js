import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const items = [
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: 'https://blog.ipleaders.in/wp-content/uploads/2021/02/web-research-services-1024x649.jpg',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: 'https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: 'https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: 'https://appinventiv.com/wp-content/uploads/sites/1/2021/08/chatbot-development-with-deep-nlp.png',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: 'https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/robotic-process-automation.jpg',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radiance',
    imagepath: 'https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/robotic-process-automation.jpg',
  },
  {
    name: 'Elegance Redefined:',
    description: 'Discover exquisite jewellery that reflects your inner radianc',
    imagepath: 'https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/robotic-process-automation.jpg',
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
              <Paper key={item.name} className="carouselPaper" style={{ backgroundImage: `URL(${item.imagepath})` }}>
                <div className="service-slide-text-wrapper">
                  <h2 className="service-slide-text">{item.name}</h2>
                  <p className="service-slide-description">{item.description}</p>
                  <button type="button" className="see-more-button">See More</button>
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
