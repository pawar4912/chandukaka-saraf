import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../../services/auth.service";
import EastIcon from "@mui/icons-material/East";
import { myProfile } from "../../../services/profile";

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
  const [selectedAddress, setSelectedAddress] = useState(0)

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) =>  { return { value: currentYear - i,label: currentYear - i } });
  years.push({value: '0000', label: "Select Year"})
  const [open, setOpen] = useState(false);
  const [openEditAddress, setOpenEditAddress] = useState(false);
  const [selectedAddressIdToEdit, setSelectedAddressIdToEdit] = useState(0);

  const handleOpenAddAddressDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenEditAddressDialog = (id) => {
    setSelectedAddressIdToEdit(id)
    setOpenEditAddress(true)
  }

  const handleCloseEditAddressDialog = () => {
    setOpenEditAddress(false)
  };
  const [profileData, setProfileData] = useState({
    id: '',
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

  const handleSubmit = async () => {
    setErrors([])
    try {
      const result = await placeOrder();
      const cashfree = Cashfree({
        mode: process.env.REACT_APP_PAYMENT_GATEWAY_MODE
      });
      let checkoutOptions = {
        paymentSessionId: result.data.payment_session_id,
      }
      cashfree.checkout(checkoutOptions)
      const order_id = result.data.order_id
      navigate("/order/check-out/payment/" + order_id)
    } catch (error) {
      console.log(error)
      // setErrors(error.response.data.message)
    }
  }

  useEffect(() => {
    getProfileData()
    getDataAddress()
  }, [])

  const [deliveryAddress, setDeliveryAddress] = useState([])

  const getDataAddress = async () => {
    try {
      const addressesResult = await getAllAddAddress();
      setDeliveryAddress(addressesResult.data.data)
      addressesResult.data.data.forEach((address, key) => {
        if(address.is_default) {
          setSelectedAddress(key)
        }
      });
    } catch (error) {
      setDeliveryAddress([])
    }
  }

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
              <b>Smita Jain, Smitajain@gmail.com, 9876543210</b>
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
