import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { isLoggedIn } from "../../../services/auth.service";
import { myProfile, getAllAddAddress } from "../../../services/profile";
import { getCartItems } from "../../../services/FrontApp/index.service";

export const Payment = () => {
  const [total, setTotal] = useState(0)
  const navigate = useNavigate();
  const { order_id } = useParams();

  const getCardData = async () => {
    try {
      const result = await getCartItems()
      let totalPrice = 0;
      for (let i = 0; i < result.data.data.length; i++) {
        totalPrice += result.data.data[i].sales_price * result.data.data[i].quantity;
      }
      setTotal(totalPrice)
    } catch (error) {
      setItems([])
    }
  }

  useEffect(() => {
      getCardData()
  }, [])

  const createOrder = async () => {
    var request = {
      "order_amount": "1",
      "order_currency": "INR",
      "customer_details": {
        "customer_id": "node_sdk_test",
        "customer_name": profileData.first_name + ' ' + profileData.last_name,
        "customer_email": profileData.email,
        "customer_phone": profileData.mobile
      },
    }
  
    Cashfree.PGCreateOrder(new Date(), request).then((response) => {
      var a = response.data;
      console.log(a)
    })
      .catch((error) => {
        console.error('Error setting up order request:', error.response.data);
      });
  }

  const [deliveryAddress, setDeliveryAddress] = useState('')

  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  })

  const getData = async () => {
    if (isLoggedIn()) {
      const result = await myProfile();
      setProfileData({...result.data.data[0]})
    }
    const addressesResult = await getAllAddAddress();
    if (addressesResult.data.data.length > 0) {
      const addresses = addressesResult.data.data.filter((data) => {
        return data.is_default == 1;
      });
      if (addresses.length > 0) {
        const address = addresses[0];
        setDeliveryAddress(address.flat_no + ', ' + address.street_name + ', ' + address.city + ' - ' + address.pincode + ', ' + address.country)
      } else {
        const address = addressesResult.data.data[0];
        setDeliveryAddress(address.flat_no + ', ' + address.street_name + ', ' + address.city + ' - ' + address.pincode + ', ' + address.country)
      }
    }
  }

  useEffect(() => {
    getData()
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
        </div>

        <div className="personal-information section-background p-3 d-flex justify-content-between align-items-center my-2">
          <div className="">
            <div className="section-title">Delivery address</div>
            <b>{deliveryAddress}</b>
          </div>
        </div>
      </div>

      <div className="payment-method mb-5">
        <button type="button" id="renderBtn">
          Pay Now
        </button>
      </div>

      <Button
        className="btn btn-block bg-black btn-submit"
        fullWidth
        variant="contained"
        onClick={() => navigate("/order/check-out/payment")}
      >
        PAY &#8377; total &nbsp;
        <EastIcon />
      </Button>
    </div>
  );
};
