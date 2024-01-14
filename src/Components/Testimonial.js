import React, { useState, useEffect } from "react";
import imageSliderHeaderIconRight from '../images/icons/Group40.svg';
import imageSliderHeaderIconLeft from '../images/icons/Group45.svg';
import LeftIcon from '../images/icons/sliderLeftIcon.svg';
import RightIcon from '../images/icons/sliderRightIcon.svg';
import Grid from '@mui/material/Grid';
import useWindowWidthAndHeight from '../utilities/CustomHooks';
import img from '../images/young-indian-woman-wearing-sari.jpg';
import StarFilled from '../images/icons/star-filled.svg'
import { getTestimonial } from '../services/FrontApp/index.service';
import { useSnapCarousel } from 'react-snap-carousel';

const TestimonialComponent = ({ data }) => {
  return (
    <div className="testimonial-wrapper">
      <img src={data.image_path} alt="img" className="client-img" />
      <div className="feedback-wrapper">
        <p> {data.description} </p>
        <div className="d-flex">
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
        </div>
        <div className="name-wrapper">
          <hr />
          <small className="client-name"> {data.author} </small>
        </div>
      </div>
    </div>
  )
}

export default function Testimonial() {
  const {
    scrollRef, next, prev, pages, activePageIndex, goTo
  } = useSnapCarousel();
  const windoDimensions = useWindowWidthAndHeight();
  
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const result = await getTestimonial();
      setData(result.data.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="testimonial-section">
      <Grid className="large-image-slider-test-area text-area-explore" item xs={9} md={6}>
        {windoDimensions[0] > 768 ?
          <div className="image-slider-header text-only-grid-header">
            <img src={imageSliderHeaderIconLeft} alt="React Logo" />
            Treasured Stories
            <img src={imageSliderHeaderIconRight} alt="React Logo" />
          </div>
          : <div className="image-slider-header text-only-grid-header image-slider-header-explore">
            <div>
              Explore Our Store
            </div>
            <div>
              <img src={imageSliderHeaderIconLeft} alt="React Logo" />
              {'  '}
              Locations
              {' '}
              <img src={imageSliderHeaderIconRight} alt="React Logo" />
            </div>
          </div>
        }
        <div className="image-slider-description text-only-grid text-only-grid-explore-description">
          In their own words, our customers share their personal experiences
        </div>
      </Grid>
      {windoDimensions[0] >= 768 && <div className='navigation-icon'>
        <button className="arrow-icon-generic" type="button" onClick={() => prev()}>
          <img src={LeftIcon} alt="React Logo" />
        </button>
        <button className="arrow-icon-generic" type="button" onClick={() => next()}>
          <img src={RightIcon} alt="React Logo" />
        </button>
      </div>}
      <ul
        className={`testimonial-slider-component`}
        ref={scrollRef}
      >
        {data.map((item) => (
          <TestimonialComponent key={item.id.toString()} data={item} />
        ))}
      </ul>
      {windoDimensions[0] <768  && <ol style={{ display: 'flex', justifyContent: "center", paddingLeft: "0", marginTop: 24, marginBottom: 0 }}>
        {pages.map((_, i) => (
            <button key={i} className='image-scroll-navigation'
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
            </button>
        ))}
      </ol>}
    </div>
  )
}