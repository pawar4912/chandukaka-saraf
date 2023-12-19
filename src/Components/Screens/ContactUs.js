import { Box, Checkbox, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react'
import SectionTitleWithArrows from '../Common/SectionTitleWithArrows';
import rightArrowIcon from '../../images/icons/right-arrow.svg';
import useWindowWidthAndHeight from '../../utilities/CustomHooks';
import FAQs from '../Common/FAQs';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const dataList = [
    {
        title: "Do I need to sign up for an account to place an order?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "How do I know that the products you sell are BIS Hallmarked?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Are the colors of products shown on the website accurate?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "How do I know if an item is in stock?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Is it safe to use my credit card online at CS Jewellers?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Does CS Jewellers ship to multiple addresses?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Do I need to sign for my order?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Can I change my shipping address after my order has been dispatched?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Can I add items to an existing order?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    }
  ]

export default function ContactUs() {
    const windoDimensions = useWindowWidthAndHeight();
    return (
        <div className='about-us'>
            <Box className="contact-us-container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    {windoDimensions[0] > 768 &&
                        <Grid item xs={1} md={3}>
                            <Item className="empty-container-section">xs=6 md=4</Item>
                        </Grid>}
                    <Grid className='contact-us-center' item xs={12} md={6}>
                        <SectionTitleWithArrows textMessage={"Need assistance?"} arrowSides={"Both"} />
                        <div className='contact-us-description'>
                            Send an email to &nbsp;<div className='decoration-contact-us-underline'>care@csjewellers.com</div> &nbsp;or call us on &nbsp; <div className='decoration-contact-us-underline'> 1800 267 0999 </div>&nbsp;anytime! We will get back to you as soon as we can!
                        </div>
                    </Grid>
                    {windoDimensions[0] > 768 &&
                        <>
                            <Grid item xs={1} md={3}>
                                <Item className="empty-container-section">xs=6 md=4</Item>
                            </Grid>
                            <Grid item xs={1} md={4}>
                                <Item className="empty-container-section">xs=6 md=4</Item>
                            </Grid>
                        </>
                    }
                    <Grid className='contact-us-center' item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {windoDimensions[0] > 768? <div className='contact-us-one-line-form-field'>
                                <TextField className='text-field text-field-name-contact-us' required id="outlined-basic" label="First Name" variant="outlined" />
                                <TextField className='text-field text-field-name-contact-us' required id="outlined-basic" label="First Name" variant="outlined" />
                            </div>: 
                            <>
                                <div className='contact-us-one-line-form-field'>
                                    <TextField className='text-field text-field-email-contact-us' required id="outlined-basic" label="First Name" variant="outlined" />
                                </div>
                                <div className='contact-us-one-line-form-field'>
                                    <TextField className='text-field text-field-email-contact-us' required id="outlined-basic" label="First Name" variant="outlined" />
                                </div>
                            </>
                            }
                            <div className='contact-us-one-line-form-field'>
                                <TextField fullWidth className='text-field text-field-email-contact-us' required id="outlined-basic" label="Email" variant="outlined" />
                            </div>
                            <div className='contact-us-one-line-form-field'>
                                <TextField fullWidth className='text-field text-field-email-contact-us' required id="outlined-basic" label="Mobile" variant="outlined" />
                            </div>
                            <div className='contact-us-one-line-form-field'>
                                <TextField multiline rows={4} className='text-field text-field-email-contact-us' required id="outlined-basic" label="What would you like us to assist you with?*" variant="outlined" />
                            </div>
                            <div className='contact-us-one-line-form-field term-and-condition-section'>
                                <div className='checkbox-contact-us-page'>
                                    <Checkbox />
                                </div>
                                <div className='checkbox-contact-us-page-text'>
                                    *I have read and accepted the&nbsp;<div className='decoration-contact-us-underline'>terms and conditions</div>&nbsp;and&nbsp;<div className='decoration-contact-us-underline'> privacy policy </div>
                                </div>
                            </div>
                            <div className='contact-us-one-line-form-field'>
                                <button type="button" className="carousel-explore-now-btn">
                                    SUBMIT
                                    {' '}
                                    <img src={rightArrowIcon} alt="rightArrowIcon" />
                                </button>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={4}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                </Grid>
            </Box>
            <Box className="contact-us-container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={1} md={3}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                    <Grid className='contact-us-center' item xs={10} md={6}>
                        <SectionTitleWithArrows textMessage={"FAQs"} arrowSides={"Both"} />
                    </Grid>
                    <Grid item xs={1} md={3}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={10} md={10}>
                        <FAQs dataList={dataList} />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
