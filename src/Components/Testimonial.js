import React from "react";
import imageSliderHeaderIconRight from '../images/icons/Group40.svg';
import imageSliderHeaderIconLeft from '../images/icons/Group45.svg';
import LeftIcon from '../images/icons/sliderLeftIcon.svg';
import RightIcon from '../images/icons/sliderRightIcon.svg';
import Grid from '@mui/material/Grid';
import useWindowWidthAndHeight from '../utilities/CustomHooks';
import img from '../images/young-indian-woman-wearing-sari.jpg';
import StarFilled from '../images/icons/star-filled.svg'
import { useSnapCarousel } from 'react-snap-carousel';

const TestimonialComponent = ({ item }) => {
  return (
    <div className="testimonial-wrapper">
      <img src={img} alt="img" className="client-img" />
      <div className="feedback-wrapper">
        <p>Absolutely delighted with my experience! The attention to design aspect is evident in the stunning piece I received, perfectly encapsulating the trendy jewellery I adore. Can’t wait to shop here again!</p>
        <div className="d-flex">
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
          <img src={StarFilled} alt="Logo" />
        </div>
        <div className="name-wrapper">
          <hr />
          <small className="client-name">Smita Jain {item}</small>
        </div>
      </div>
    </div>
  )
}

export default function Testimonial() {
  const {
    scrollRef, next, prev,
  } = useSnapCarousel();
  const array = [1, 2, 3, 4, 5, 6, 7];
  const windoDimensions = useWindowWidthAndHeight();

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
        {Array.from({ length: 18 }).map((_, i) => (
          <TestimonialComponent key={i} item={i} />
        ))}
      </ul>
    </div>
  )
}