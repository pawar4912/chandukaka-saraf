import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { isLoggedIn } from "../../../services/auth.service";
import { myProfile } from "../../../services/profile";

export const Payment = () => {
  const navigate = useNavigate();
  const radioStyle = {
    color: 'black',
    '&$checked': {
      color: 'black',
    },
  };

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
  }, [])

  return (
    <div className="payment-wrapper">
      <div className="delivery-details mb-5">
        <b>Delivery details</b>

        <div className="personal-information section-background p-3 d-flex justify-content-between align-items-center">
          <div className="">
            <div className="section-title">Name, email and mobile</div>
            <b>{profileData.first_name} {profileData.last_name}, {profileData.email}, {profileData.mobile}</b>
          </div>
          <div>
            <Link to="#">EDIT</Link>
          </div>
        </div>

        <div className="personal-information section-background p-3 d-flex justify-content-between align-items-center my-2">
          <div className="">
            <div className="section-title">Delivery address</div>
            <b>29 Park Street CHS, Gunawadi Road, Baramati, Dist - Pune</b>
          </div>
          <div>
            <Link to="#">EDIT</Link>
          </div>
        </div>
      </div>

      <div className="payment-method mb-5">
        <b>Select payment methods</b>

        <div className="">
          <FormControl fullWidth style={{ marginLeft: "10px" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="credit-card"
                control={<Radio style={radioStyle}/>}
                label="Credit Card"
                className="section-background my-2"
              />
              <FormControlLabel
                value="debitCard"
                control={<Radio style={radioStyle}/>}
                label="Debit Card"
                className="section-background my-2"
              />
              <FormControlLabel
                value="upi"
                control={<Radio style={radioStyle}/>}
                label="UPI"
                className="section-background"
              />
              <FormControlLabel
                value="netbanking"
                control={<Radio style={radioStyle}/>}
                label="Netbanking"
                className="section-background my-2"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <Button
        className="btn btn-block bg-black btn-submit"
        fullWidth
        variant="contained"
        onClick={() => navigate("/order/check-out/payment")}
      >
        PAY &#8377; 240 &nbsp;
        <EastIcon />
      </Button>
    </div>
  );
};
