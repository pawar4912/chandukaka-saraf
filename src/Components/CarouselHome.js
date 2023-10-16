import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const services = [
  "Data Scraping",
  "Web Development",
  "App Development",
  "Bot Development",
  "Cloud Setup & Optimisation",
  "Data Management & Analytics",
  "Process Automation",
  "Custom Software Development"
];
const imageUrls = [
  'https://blog.ipleaders.in/wp-content/uploads/2021/02/web-research-services-1024x649.jpg',
  "https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg",
  "https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg",
  "https://appinventiv.com/wp-content/uploads/sites/1/2021/08/chatbot-development-with-deep-nlp.png",
  "https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/robotic-process-automation.jpg",
  "https://netdepot.com/wp-content/uploads/2021/08/Cloud-Optimization.jpeg",
  "https://netdepot.com/wp-content/uploads/2021/08/Cloud-Optimization.jpeg",
  "https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg",
]

const logos = [
  "https://via.placeholder.com/150x50?text=Client+1",
  "https://via.placeholder.com/150x50?text=Client+2",
  "https://via.placeholder.com/150x50?text=Client+3",
  "https://via.placeholder.com/150x50?text=Client+4",
  "https://via.placeholder.com/150x50?text=Client+5",
];

const items = [
  {
      name: "Elegance Redefined:",
      description: "Discover exquisite jewellery that reflects your inner radiance",
      imagepath: 'https://blog.ipleaders.in/wp-content/uploads/2021/02/web-research-services-1024x649.jpg',
  },
  {
      name: "Elegance Redefined:",
      description: "Discover exquisite jewellery that reflects your inner radiance",
      imagepath: "https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg",
  },
  {
      name: "Elegance Redefined:",
      description: "Discover exquisite jewellery that reflects your inner radiance",
      imagepath: "https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg",
  },
  {
      name: "Elegance Redefined:",
      description: "Discover exquisite jewellery that reflects your inner radiance",
      imagepath: "https://appinventiv.com/wp-content/uploads/sites/1/2021/08/chatbot-development-with-deep-nlp.png",
  },
  {
      name: "Elegance Redefined:",
      description: "Discover exquisite jewellery that reflects your inner radiance",
      imagepath: "https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/robotic-process-automation.jpg",
  },
  {
      name: "Elegance Redefined:",
      description: "Discover exquisite jewellery that reflects your inner radiance",
      imagepath: "https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/robotic-process-automation.jpg",
  },
  {
      name: "Elegance Redefined:",
      description: "Discover exquisite jewellery that reflects your inner radianc",
      imagepath: "https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/robotic-process-automation.jpg",
  }
]

function CarouselHome() {
  const [currentService, setCurrentService] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(0);

  const navigate = useNavigate()

  function handleClick(service) {
    //const serviceSlug = service.replace(/\s+/g, '').replace(/&/g, '');
    //navigate(`/services/${serviceSlug}`);
  }

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentService((currentService) =>
        currentService === services.length - 1 ? 0 : currentService + 1
      );
    }, 2000);
    const logoInterval = setInterval(() => {
      setCurrentLogo((currentLogo) =>
        currentLogo === logos.length - 1 ? 0 : currentLogo + 1
      );
    }, 3000);
    return () => {
      clearInterval(serviceInterval);
      clearInterval(logoInterval);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="service-slider">
        <Carousel
        animation="slide"
        duration={2300}
        swipe= "true"
        className="service-slide active"
        indicatorIconButtonProps={{
          style: {
              padding: '5px', 
              marginTop: '-250px', 
              zIndex: "1",
              color: '#FFFFFF',
              opacity: "0.3"
          }
        }}
        activeIndicatorIconButtonProps={{
        style: {
                opacity: "1"
            }
        }}
         >
            {
                items.map( (item, i) => <Item key={i} item={item} handleClick={handleClick} /> )
            }
        </Carousel>
      </div>
      
    </div>
  );
}
function Item(props)
{
    return (
        <Paper className="carouselPaper" style={{backgroundImage : `URL(${props.item.imagepath})`}}>
            <div className="service-slide-text-wrapper" >
                <h2 className="service-slide-text">{props.item.name}</h2>
                <p className="service-slide-description">{props.item.description}</p>
                <button className={`see-more-button`} onClick={() => props.handleClick(props.item.name)}>See More</button>
                </div>
                
        </Paper>
    )
}

export default CarouselHome;