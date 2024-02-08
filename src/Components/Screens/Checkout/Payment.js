import {
  FormControl,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export const Payment = () => {
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
      console.log(error)
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
