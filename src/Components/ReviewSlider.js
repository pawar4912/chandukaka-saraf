import * as React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import PropTypes from 'prop-types';
import ImageSliderCardHome from './ImageSliderCardHome';
import LeftIcon from '../images/icons/sliderLeftIcon.svg';
import RightIcon from '../images/icons/sliderRightIcon.svg';
import { Box, Grid } from '@mui/material';
import CustomRating from './Rating';

export default function ReviewSlider({ height = 550, width = 700, CardImage, padding = 0, Item }) {
    const {
        scrollRef, next, prev,
    } = useSnapCarousel();

    return (
        <>
            <div className={(padding == 0 ? ('image-slider-navigation-icon image-slider-navigation-icon-no-width') : 'image-slider-navigation-icon')}>
                <button className="arrow-icon-generic" type="button" onClick={() => prev()}>
                    <img src={LeftIcon} alt="React Logo" />
                </button>
                <button className="arrow-icon-generic" type="button" onClick={() => next()}>
                    <img src={RightIcon} alt="React Logo" />
                </button>
            </div>
            <ul
                className="review-slider-component"
                ref={scrollRef}
                style={{
                    display: 'flex',
                    overflow: 'auto',
                    scrollSnapType: 'x mandatory',
                    width: '70%'
                }}
            >
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <div className="image-slider-header text-only-grid-header review-slider-main-div">
                        <img className='review-slider-image' src={CardImage} alt="React Logo" />
                        <div className='review-details-card'>
                            <Box className="large-image-slider-container treasured-stories-background" sx={{ flexGrow: 1 }} >
                                <Grid container spacing={3}>
                                    <Grid item xs={6} md={1}>
                                        <Item className="empty-container-section">xs=6 md=4</Item>
                                    </Grid>
                                    <Grid className="large-image-slider-test-area review-message treasured-stories-header" item xs={10}>
                                        Absolutely delighted with my experience! The attention to design aspect is evident in the stunning piece I received, perfectly encapsulating the trendy jewellery I adore. Can’t wait to shop here again!
                                    </Grid>
                                    <Grid item xs={6} md={1}>
                                        <Item className="empty-container-section">xs=6 md=4</Item>
                                    </Grid>
                                    <Grid item xs={6} md={1}>
                                        <Item className="empty-container-section">xs=6 md=4</Item>
                                    </Grid>
                                    <Grid className="large-image-slider-test-area review-message treasured-stories-header" item xs={11}>
                                        <CustomRating />
                                    </Grid>
                                    <Grid item xs={6} md={1}>
                                        <Item className="empty-container-section">xs=6 md=4</Item>
                                    </Grid>
                                    <Grid className="large-image-slider-test-area" item xs={6} md={11}>
                                        <div className="review-slider-header">
                                            --Smita Jain
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </div>
                ))}
            </ul>
        </>
    );
}
