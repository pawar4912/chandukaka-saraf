import React from 'react'
import storeLocaterTitleImage from "../../images/storeLocaterTitleImageCropped.png";
import { Button, Grid } from '@mui/material';
import fillWhiteLeftIcon from '../../images/icons/fillWhiteLeftIcon.svg';
import fillWhiteRightIcon from '../../images/icons/fillWhiteRightIcon.svg';
import FAQs from '../FAQs';

const dataList = [
    {
        title: "BARAMATI",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "RAVIVAR PETH",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "CHINCHWAD",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "CHANDAN NAGAR",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "AKLUJ",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "SATARA",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "KARAD",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "HADAPSAR",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "PUNE-SATARA ROAD",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },
    {
        title: "BARAMATI MIDC",
        description: "Kacheri Road, Mahaveer Path, Gandhi Chowk, Baramati, Maharashtra 413102.",
        tollFreeNo: "18002670999",
        workingHours: "Tue - Sun: 9am - 8pm",
        holiday: "Monday closed"
    },

]

export default function FindAStore() {
    return (
        <div className='find-store-main-container'>
            <div className='section-title' style={{ backgroundImage: `url(${storeLocaterTitleImage})` }}>
                <div class="section-contents">
                    <div className="header-title">
                        <img src={fillWhiteLeftIcon} alt="React Logo" />
                        <h4>Store Locator</h4>
                        <img src={fillWhiteRightIcon} alt="React Logo" />
                    </div>
                    <div className="section-info">
                        Come and say hello. Find your nearest store and check its opening hours and contact details.
                    </div>
                    <div className="find-store-change-location">
                        <input type="text" placeholder='Enter Pincode or city' sx={{ border: 'none' }} className='' />
                        <Button className='location-change-button'>FIND STORES</Button>
                    </div>
                </div>


            </div>

            <Grid container spacing={3} className='store-main-content'>
                <Grid className='all-store-container' item xs={12} md={5}>
                    <div className='all-store-titles p-3'>
                        ALL STORES
                    </div>
                    <div className='store-locations-acordion p-3'>
                        <FAQs dataList={dataList} isContactusPage={false} />
                    </div>
                </Grid>
                <Grid className='find-store-google-map-container p-3' item xs={12} md={5}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60661.32857524303!2d74.4954973486328!3d18.148565999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a03f0e3848f7%3A0xd462645f9e003e87!2sChandukaka%20Saraf%20%26%20Sons%20Pvt.%20Ltd%20-%20Baramati!5e0!3m2!1sen!2sin!4v1705214502765!5m2!1sen!2sin"  style={{border:0, height: '100%', width: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
            </Grid>
        </div>
    )
}
