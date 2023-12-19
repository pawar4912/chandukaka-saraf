import React from 'react'
import storeLocaterTitleImage from "../../images/storeLocaterTitleImage.png";
import { Button, Grid, TextField } from '@mui/material';
import fillWhiteLeftIcon from '../../images/icons/fillWhiteLeftIcon.svg';
import fillWhiteRightIcon from '../../images/icons/fillWhiteRightIcon.svg';
import googleMapAPI from "../../images/googleMapAPI.png";
import { Item } from '../Item';
import FAQs from '../Common/FAQs';

const dataList = [
    {
        title: "BARAMATI",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "RAVIVAR PETH",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "CHINCHWAD",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "CHANDAN NAGAR",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "AKLUJ",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "SATARA",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "KARAD",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "HADAPSAR",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "PUNE-SATARA ROAD",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "BARAMATI MIDC",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo:"18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },

  ]

export default function FindAStore() {
    return (
        <div className='col-12 about-us find-store-main-container'>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12} className='product-dash-board-header-image-container find-store-title-image' style={{ backgroundImage: `url(${storeLocaterTitleImage})` }}>
                    <div className='product-dash-board-image-header-text-container find-store-header-text-container'>
                        <div className="product-dash-board-header text-only-grid-header">
                            <img src={fillWhiteLeftIcon} alt="React Logo" />
                            {'  '}
                            Store Locator
                            {' '}
                            <img src={fillWhiteRightIcon} alt="React Logo" />
                        </div>
                        <div className="product-dash-board-description">
                            Come and say hello. Find your nearest store and check its opening hours and contact details.
                        </div>
                        <div className="find-store-change-location">
                            <TextField placeholder='Enter Pincode or city' className='location-change-text-field' />
                            <Button className='location-change-button'>CHANGE</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1} md={1}>
                    <Item className="empty-container-section">xs=6 md=4</Item>
                </Grid>
                <Grid className='all-store-container' item xs={12} md={5}>
                    <div className='all-store-titles'>
                        ALL STORES
                    </div>
                    <div className='store-locations-acordion'>
                        <FAQs dataList={dataList} isContactusPage={false} />
                    </div>
                    
                </Grid>
                <Grid className='find-store-google-map-container' item xs={12} md={5}>
                    <img className='google-map' src={googleMapAPI} />
                </Grid>
                <Grid item xs={1} md={1}>
                    <Item className="empty-container-section">xs=6 md=4</Item>
                </Grid>
            </Grid>
        </div>
    )
}
