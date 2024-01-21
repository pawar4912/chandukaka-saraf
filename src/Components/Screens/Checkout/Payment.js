import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-wrapper">
      <div className="delivery-details mb-5">
        <b>Delivery details</b>

        <div className="personal-information section-background p-3 d-flex justify-content-between align-items-center">
          <div className="">
            <div className="section-title">Name, email and mobile</div>
            <b>Smita Jain, Smitajain@gmail.com, 9876543210</b>
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
                control={<Radio />}
                label="Credit Card"
                className="section-background my-2"
              />
              <FormControlLabel
                value="debitCard"
                control={<Radio />}
                label="Debit Card"
                className="section-background my-2"
              />
              <FormControlLabel
                value="upi"
                control={<Radio />}
                label="UPI"
                className="section-background"
              />
              <FormControlLabel
                value="netbanking"
                control={<Radio />}
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
