import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export const Delivery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box className="delivery-wrapper">
        <div className="delivery-estimate-section">
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

        <div className="delivery-address-section">
          <b>Delivery Address</b>
          <div className="personal-information section-background p-3">
            <div className="">
              <div className="section-title">Name, email and mobile</div>
              <b>Smita Jain, Smitajain@gmail.com, 9876543210</b>
            </div>
            <div>
              <Link to="#">EDIT</Link>
            </div>
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
                  control={<Radio />}
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
                control={<Radio />}
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
