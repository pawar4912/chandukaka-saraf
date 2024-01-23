import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { getAllAddAddress, myProfile } from "../../../services/profile";
import { isLoggedIn } from "../../../services/auth.service";

export const Delivery = () => {
  const navigate = useNavigate();
  const radioStyle = {
    color: 'black',
    '&$checked': {
      color: 'black',
    },
  };
  const days = Array.from({ length: 31 }, (_, i) => { return { value: i + 1,label: i + 1 } });
  days.push({value: '00', label: "Select Day"})
  const months = [
    {value: '00', label: "Select Month"},
    {value: '01', label: "January"},
    {value: '02', label: "February"},
    {value: '03', label: "March"},
    {value: '04', label: "April"},
    {value: '05', label: "May"},
    {value: '06', label: "June"},
    {value: '07', label: "July"},
    {value: '08', label: "August"},
    {value: '09', label: "September"},
    {value: '10', label: "October"},
    {value: '11', label: "November"},
    {value: '12', label: "December"},
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) =>  { return { value: currentYear - i,label: currentYear - i } });
  years.push({value: '0000', label: "Select Year"})

  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  })

  const getProfileData = async () => {
    if (isLoggedIn()) {
      const result = await myProfile();
      setProfileData({...result.data.data[0]})
    }
  }

  useEffect(() => {
    getProfileData()
    getData()
  }, [])

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await getAllAddAddress();
      setData(result.data.data)
    } catch (error) {
      setData([])
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Box className="delivery-wrapper">
        <div className="delivery-estimate-section mb-5">
          <div className="pincode-section section-background p-3">
            <span>
              <b>Pincode:</b> 413102
            </span>

            <Link to="#">CHANGE</Link>
          </div>
          <div className="estimated-delivery p-3">
            <b>Estimated Delivery:</b>
            Receive as early as
            <span className="delivery-datetime">wednesday 27th June</span>
          </div>
        </div>

        <div className="delivery-address-section mb-5">
          <b>Delivery Address</b>
          <div className="personal-information section-background d-flex justify-content-between align-items-center p-3">
            <div className="">
              <div className="section-title">Name, email and mobile</div>
              <b>{profileData.first_name} {profileData.last_name}, {profileData.email}, {profileData.mobile}</b>
            </div>
            <div>
              <Link to="#">EDIT</Link>
            </div>
          </div>

          <div className="address-section my-2">
            <div className="section-background p-3">
              <div className="section-title">Address 1</div>
              <div className="d-flex justify-content-between align-items-center">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="same"
                    control={<Radio style={radioStyle} />}
                    label="29 Park Street CHS, Gunawadi Road, Baramati, Dist - Pune"
                  />
                </RadioGroup>
                <div>
                  <Link to="#">EDIT</Link>
                </div>
              </div>
            </div>
          </div>

          <span>
            + <Link>ADD NEW ADDRESS</Link>
          </span>
        </div>

        <div className="mb-5">
          <div className="billing-address-section">
            <b>Billing Address</b>
          </div>
          <div className="address-section">
            <div className="address section-background d-flex justify-content-between align-items-center p-3">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="same"
                  control={<Radio style={radioStyle}/>}
                  label="Same as delivery address"
                />
              </RadioGroup>
              <div>
                <Link to="#">EDIT</Link>
              </div>
            </div>
          </div>
          <span>
            + <Link>ADD NEW ADDRESS</Link>
          </span>
        </div>

        <Button
          className="btn btn-block bg-black btn-submit"
          fullWidth
          variant="contained"
          onClick={() => navigate("/order/check-out/payment")}
        >
          CONTINUE TO DELIVERY &nbsp;
          <EastIcon />
        </Button>
      </Box>
    </div>
  );
};
