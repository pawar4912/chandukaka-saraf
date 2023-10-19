import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import rightArrowIconWhite from '../../images/icons/right-arrow-white.svg';
import CarouselHome from '../CarouselHome';
import ImageSliderHome from '../ImageSliderHome';
import imageSliderHeaderIconRight from '../../images/icons/Group40.svg';
import imageSliderHeaderIconLeft from '../../images/icons/Group45.svg';
import CardImageNormal from '../../images/MaskGroup8.png';
import CardImageLarge from '../../images/MaskGroup24.png';
import CardImageNoPadding from '../../images/MaskGroup18.png';
import useWindowWidthAndHeight from '../../utilities/CustomHooks';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  const windoDimensions = useWindowWidthAndHeight();
  return (
    <div className='col-12'>
      <div>
        <CarouselHome />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={1} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid item xs={11} md={11}>
            <div className="image-slider-header">
              Dazzling Favorites
              {' '}
              <img src={imageSliderHeaderIconRight} alt="React Logo" />
            </div>
          </Grid>
          <Grid item xs={1} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid item xs={10} md={10}>
            <div className="image-slider-description">
              Adorn yourself with the latest trends
              – Explore our curated selection of trending jewelry styles that capture
              the essence of modern allure.
            </div>
          </Grid>
          {/* <Grid item xs={1} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid> */}
          <Grid item xs={1} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid className='extra-empty-container' item xs={1} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid className='favourite-image-slider' item xs={10} md={11}>
            <ImageSliderHome width={295} height={355} CardImage={CardImageNormal} padding={30} CardImageType={"Favourites"}/>
          </Grid>
        </Grid>
      </Box>
      <Box className="large-image-slider-container" sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid className="large-image-slider-test-area" item xs={6} md={4}>
            <div className="image-slider-header">
              Shine bright with our exclusive offers
              {' '}
              <img src={imageSliderHeaderIconRight} alt="React Logo" />
            </div>
            <div className="big-image-slider-description image-slider-description">
              Sparkling Deals Await: Unwrap Irresistible Offers on Captivating Jewellery Pieces.
            </div>
          </Grid>
          <Grid item xs={6} md={7}>
            <ImageSliderHome width={550} height={550} CardImage={CardImageLarge} padding={40} CardImageType={"Offers"} />
          </Grid>
        </Grid>
      </Box>
      <Box className="large-image-slider-container" sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid className="large-image-slider-test-area" item xs={6} md={11}>
            <div className="image-slider-header">
              Discover Your Shine
              {' '}
              <img src={imageSliderHeaderIconRight} alt="React Logo" />
            </div>
            <div className="big-image-slider-description image-slider-description">
              From timeless classics to modern marvels, find your style in our curated categories.
            </div>
          </Grid>
          <Grid item xs={6} md={12}>
            <ImageSliderHome width={450} height={600} CardImage={CardImageNoPadding} padding={0} CardImageType={"Discover"}/>
          </Grid>
        </Grid>
      </Box>
      <Box className="large-image-slider-container" sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid className="large-image-slider-test-area" item xs={6}>
            <div className="image-slider-header text-only-grid-header">
              <img src={imageSliderHeaderIconLeft} alt="React Logo" />
              {'  '}
              Explore Our Store Locations
              {' '}
              <img src={imageSliderHeaderIconRight} alt="React Logo" />
            </div>
            <div className="image-slider-description text-only-grid">
              Discover the allure of our jewelry collection in person – Locate your nearest store for a touch of elegance.
            </div>
            <div className="image-slider-description text-only-grid">
              <button type="button" className="carousel-locate-store-btn">
                LOCATE STORES
                {' '}
                <img src={rightArrowIconWhite} alt="rightArrowIcon" />
              </button>
            </div>
          </Grid>
          <Grid item xs>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
