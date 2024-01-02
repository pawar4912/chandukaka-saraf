import { Box, Button, Divider, Grid, Rating, TextField } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProductBreadcrumb from '../ProductBreadcrumb'
import productDetailsFullImage from "../../images/product-details-full-image.png";
import heartIcon from "../../images/icons/heart.svg";
import shareImage from "../../images/shareImage.svg";
import RightIcon from '../../images/icons/checkRightIcon.svg';
import whiteArrowRight from '../../images/icons/whiteArrowRight.svg';
import { ProductDetailsQuantityInput } from '../ProductDetailsQuantityInput';
import Carousel from 'react-material-ui-carousel';
import useWindowWidthAndHeight from '../../utilities/CustomHooks';
import productDetailsMobileView from "../../images/productDetailsMobileView.png";
import ProductDetailsTab from '../ProductDetailsTab';
import ProductDetailsAccordion from '../ProductDetailsAccordion';
import imageSliderHeaderIconRight from '../../images/icons/Group40.svg';
import ProductReviewCard from '../ProductReviewCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const imagesList = [productDetailsFullImage, productDetailsFullImage, productDetailsFullImage, productDetailsFullImage];
const reviews = [
    {
        userName: "Smita Jain",
        comment: "Absolutely delighted with my experience! The attention to design aspect is evident in the stunning piece I received, perfectly encapsulating the trendy jewellery I adore. Can’t wait to shop here again!",
        rating: 4,
        date: "4 Dec 2022"
    },
    {
        userName: "Mohik",
        comment: "Product is good no negative weight. Presentation is better than other players in the market also competitive pricing.",
        rating: 2,
        date: "4 Dec 2022"
    },
    ,
    {
        userName: "Vedha",
        comment: "good",
        rating: 3,
        date: "4 Dec 2022"
    },
    ,
    {
        userName: "Leela Gupta",
        comment: "A gift for my mum in law. She loves it. So beautiful.",
        rating: 5,
        date: "4 Dec 2022"
    },
    ,
    {
        userName: "Vedha",
        comment: "good",
        rating: 3,
        date: "4 Dec 2022"
    },
    ,
    {
        userName: "Leela Gupta",
        comment: "A gift for my mum in law. She loves it. So beautiful.",
        rating: 4,
        date: "4 Dec 2022"
    },
    ,
    {
        userName: "Smita Jain",
        comment: "Absolutely delighted with my experience! The attention to design aspect is evident in the stunning piece I received, perfectly encapsulating the trendy jewellery I adore. Can’t wait to shop here again!",
        rating: 4,
        date: "4 Dec 2022"
    },
]
const producDetailsTabData = [
    {
        label: "DESCRIPTION",
        description: [
            "Product Code : GP1 ",
            "Product Name : 1 Grams Ganesha Silver Coin"
        ]
    },
    {
        label: "METAL DETAILS",
        description: [
            "Product Code : GP1 ",
        ]
    }, {
        label: "PRODUCT DETAILS",
        description: [
            "Product Name : 1 Grams Ganesha Silver Coin",
        ]
    }
]
export default function ProductDetails() {
    const windoDimensions = useWindowWidthAndHeight();
    const navigationData = [
        {
            text: "Home",
            path: ""
        },
        {
            text: "Bullion",
            path: "bullion"
        },
        {
            text: "Silver",
            path: "silver"
        },
    ]
    const [ratingValue, setValue] = React.useState(2);
    return (
        <div className='about-us'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} className="product-grid-container">
                    <Grid item xs={12} md={12} className='product-details-page-breadcrumb product-details-header-image-container'>
                        <div className='breadcrumb-container-productpage breadcrumb-container-product-details'>
                            <ProductBreadcrumb navigationData={navigationData} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className='product-details-image-collection-main-desktop'>
                        {windoDimensions[0] >= 768 ? <div className='breadcrumb-container-productpage image-container-product-details'>
                            {imagesList.map(element => (
                                <img className='desktop-product-details-image' src={element} />
                            ))}
                        </div> :
                            <div>
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
                                        imagesList.map((item) => (
                                            <Paper key={item.name} className="carouselPaper" >
                                                <img className="carousel-img" src={windoDimensions[0] <= 768 && `${productDetailsMobileView}`} />
                                            </Paper>
                                        ))
                                    }
                                </Carousel>
                            </div>}
                    </Grid>
                    <Grid item xs={12} md={6} className='product-details-text-collection-main'>
                        <div className='details-page-container-product-details-text'>
                            <div className='product-details-text-container'>
                                <div className='product-details-text-header product-details-text-header-title'>
                                    <div className="product-details-header">
                                        Ganesha Silver Coin
                                    </div>
                                    <div className="product-details-header">
                                        <Button className='product-list-page-heart-icon-button' size="small" color="primary">
                                            <img src={heartIcon} />
                                        </Button>
                                        <Button className='product-list-page-heart-icon-button' size="small" color="primary">
                                            <img src={shareImage} />
                                        </Button>
                                    </div>
                                </div>
                                <div className='product-details-text-header'>
                                    <Rating
                                        className='product-description-details-rating'
                                        name="simple-controlled"
                                        value={ratingValue}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                    <div>
                                        {reviews.length} Reviews
                                    </div>
                                    <Divider className='divider-product-details-reviews' orientation="vertical" />
                                    <div>
                                        <Button className='product-details-write-review-button'>
                                            WRITE A REVIEW
                                        </Button>
                                    </div>
                                </div>
                                <div className='product-details-text-header product-details-product-quality-details'>
                                    <div>
                                        24 KT
                                    </div>
                                    <Divider className='divider-product-details-reviews' orientation="vertical" />
                                    <div>
                                        1 GM
                                    </div>
                                </div>
                                <div className='product-details-text-header product-details-product-quality-details'>
                                    <div className='product-details-price'>
                                        ₹ 94
                                    </div>
                                </div>
                                <div className='product-details-text-header product-details-text-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <Divider className='divider-product-details-description' />
                                {(windoDimensions[0] <= 768) ?
                                    <div className='product-details-mobile-view-container-for-buttons'>
                                        <div className='product-details-text-header product-details-check-availability-container product-details-product-quality-details'>
                                            <div className='product-details-page-quantity-check-availability'>
                                                <div className='product-details-check-availability-title'>
                                                    Check availability
                                                </div>
                                                <div>
                                                    <TextField
                                                        className='product-details-pincode-text-field'
                                                        type='number' //ad this line
                                                        onChange={(e) => setCode(e.target.value)} />
                                                    <Button className="product-details-check-princode-button">
                                                        CHECH <img src={RightIcon} alt="React Logo" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='product-details-page-quantity-quantity'>
                                                <div className='product-details-check-availability-title'>
                                                    Quantity
                                                </div>
                                                <div>
                                                    <ProductDetailsQuantityInput />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='product-details-text-header product-details-product-quality-details'>
                                            <Button className='product-details-page-add-to-cart-button'>
                                                Add To Cart {" "} <img src={RightIcon} alt="React Logo" />
                                            </Button>
                                            <Button className='product-details-page-buy-now-button'>
                                                Buy Now {" "} <img src={whiteArrowRight} alt="React Logo" />
                                            </Button>
                                        </div>
                                    </div> :
                                    <>
                                        <div className='product-details-text-header product-details-check-availability-container product-details-product-quality-details'>
                                            <div className='product-details-page-quantity-check-availability'>
                                                <div className='product-details-check-availability-title'>
                                                    Check availability
                                                </div>
                                                <div>
                                                    <TextField
                                                        className='product-details-pincode-text-field'
                                                        type='number' //ad this line
                                                        onChange={(e) => setCode(e.target.value)} />
                                                    <Button className="product-details-check-princode-button">
                                                        CHECH <img src={RightIcon} alt="React Logo" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='product-details-page-quantity-quantity'>
                                                <div className='product-details-check-availability-title'>
                                                    Quantity
                                                </div>
                                                <div>
                                                    <ProductDetailsQuantityInput />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='product-details-text-header product-details-product-quality-details'>
                                            <Button className='product-details-page-add-to-cart-button'>
                                                Add To Cart {" "} <img src={RightIcon} alt="React Logo" />
                                            </Button>
                                            <Button className='product-details-page-buy-now-button'>
                                                Buy Now {" "} <img src={whiteArrowRight} alt="React Logo" />
                                            </Button>
                                        </div>
                                    </>
                                }
                                <Divider className='divider-product-details-description' />
                                <div className='details-tab-container'>
                                    {(windoDimensions[0] >= 768) ?
                                        <ProductDetailsTab dataList={producDetailsTabData} />
                                        :
                                        <ProductDetailsAccordion dataList={producDetailsTabData} />
                                    }
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {windoDimensions[0] >= 768 && <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>}
                    <Grid className='product-details-reviews' item xs={12} md={10} >
                        <div className='product-details-reviews-container'>
                            <div className="image-slider-header customer-reviews-title">
                                Customer Reviews
                                {' '}
                                <img src={imageSliderHeaderIconRight} alt="React Logo" />
                            </div>
                            <div>
                                <div className='rating-values-customer-review'>
                                    <div className='rating-value'>
                                        {ratingValue}
                                    </div>
                                    <Rating
                                        className='product-description-details-rating'
                                        name="simple-controlled"
                                        value={ratingValue}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    /></div>
                                <div className='based-on-count-review'>
                                    Based on {" "}{reviews.length} Reviews
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button className='product-details-page-add-to-cart-button'>
                                WRITE A REVIEW {" "} <img src={RightIcon} alt="React Logo" />
                            </Button>
                        </div>
                    </Grid>
                    {windoDimensions[0] >= 768 && <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>}
                    {windoDimensions[0] >= 768 && <Grid item xs={10} md={10}>
                        <Divider className='divider-product-details-reviews'/>
                    </Grid>}
                    <Grid className='product-details-reviews' item xs={12} md={10} >
                        {reviews.map( review => (<ProductReviewCard reviewDetails={review} />))}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
