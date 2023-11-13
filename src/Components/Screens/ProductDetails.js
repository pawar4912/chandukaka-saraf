import { Box, Button, Divider, Grid, Rating, TextField } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProductBreadcrumb from '../ProductBreadcrumb'
import productDetailsFullImage from "../../images/product-details-full-image.png";
import heartIcon from "../../images/icons/heart.svg";
import shareImage from "../../images/shareImage.svg";
import RightIcon from '../../images/icons/checkRightIcon.svg';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { ProductDetailsQuantityInput } from '../ProductDetailsQuantityInput';

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
        rating: 4
    },
    {
        userName: "Mohik",
        comment: "Product is good no negative weight. Presentation is better than other players in the market also competitive pricing.",
        rating: 4
    },
    ,
    {
        userName: "Vedha",
        comment: "good",
        rating: 4
    },
    ,
    {
        userName: "Leela Gupta",
        comment: "A gift for my mum in law. She loves it. So beautiful.",
        rating: 4
    },
    ,
    {
        userName: "Vedha",
        comment: "good",
        rating: 4
    },
    ,
    {
        userName: "Leela Gupta",
        comment: "A gift for my mum in law. She loves it. So beautiful.",
        rating: 4
    },
    ,
    {
        userName: "Smita Jain",
        comment: "Absolutely delighted with my experience! The attention to design aspect is evident in the stunning piece I received, perfectly encapsulating the trendy jewellery I adore. Can’t wait to shop here again!",
        rating: 4
    },
]
export default function ProductDetails() {
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
                    <Grid item xs={12} md={12} className='product-details-header-image-container'>
                        <div className='breadcrumb-container-productpage breadcrumb-container-product-details'>
                            <ProductBreadcrumb navigationData={navigationData} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className='product-details-image-collection-main-desktop'>
                        <div className='breadcrumb-container-productpage image-container-product-details'>
                            {imagesList.map(element => (
                                <img className='desktop-product-details-image' src={element} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className='product-details-text-collection-main'>
                        <div className='breadcrumb-container-product-details-text'>
                            <div className='product-details-text-container'>
                                <div className='product-details-text-header'>
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
                                <div className='product-details-text-header '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <Divider className='divider-product-details-description' />
                                <div className='product-details-text-header product-details-product-quality-details'>
                                    <div>
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
                                    <div>
                                        <div className='product-details-check-availability-title'>
                                            Quantity
                                        </div>
                                        <div>
                                            <ProductDetailsQuantityInput />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
