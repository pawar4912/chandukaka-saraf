import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CarouselHome from '../CarouselHome';
import ImageSliderHome from '../ImageSliderHome';
import imageSliderHeaderIcon from '../../images/icons/Group40.svg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <>
      <CarouselHome />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={11}>
            <div className="image-slider-header">
              Dazzling Favorites
              {' '}
              <img src={imageSliderHeaderIcon} alt="React Logo" />
            </div>
          </Grid>
          <Grid item xs={6} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={11}>
            <div className="image-slider-description">
              Adorn yourself with the latest trends
              – Explore our curated selection of trending jewelry styles that capture
              the essence of modern allure.
            </div>
          </Grid>
          <Grid item xs={6} md={1}>
            <Item className="empty-container-section">xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={11}>
            <ImageSliderHome />
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default Home;
