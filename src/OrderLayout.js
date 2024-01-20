import { Link, Outlet, NavLink } from "react-router-dom";
import {
  Breadcrumbs,
  Grid,
  Box,
  Divider,
  Card,
  CardMedia,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import siteLogo from "./images/icons/logo.svg";
import EastIcon from "@mui/icons-material/East";

const OrderLayout = () => {
  const cartItems = [
    {
      id: 1,
      name: "gold coin",
      image: "https://source.unsplash.com/random/300x300?jewellery=1",
      quantity: 1,
      type: "24KT | 1GM",
      price: 1200,
      quantity: 2,
    },
    {
      id: 2,
      name: "gold coin 2",
      image: "https://source.unsplash.com/random/300x300?jewellery=2",
      quantity: 1,
      type: "24KT | 1GM",
      price: 1200,
      quantity: 2,
    },
    {
      id: 3,
      name: "gold coin 3",
      image: "https://source.unsplash.com/random/300x300?jewellery=3",
      quantity: 1,
      type: "24KT | 1GM",
      price: 1200,
      quantity: 2,
    },
  ];

  return (
    <div className="order-layout d-flex justify-content-center">
      <Grid container className="order-main-wrapper" spacing={3}>
        <Grid item xs={12} md={6} className="form-section p-5">
          <div className="form-section-wrapper">
            <div className="checkout-header">
              <img src={siteLogo} alt="" />
            </div>
            <Breadcrumbs
          separator={
            <NavigateNextIcon sx={{ color: "#000" }} fontSize="small" />
          }
          aria-label="breadcrumb"
        >
          <NavLink
            to="/order/check-out/details"
            activeClassName="active"
            className="breadcrumb-link"
          >
            YOUR DETAILS
          </NavLink>
          <NavLink
            to="/order/check-out/delivery"
            activeClassName="active"
            className="breadcrumb-link"
          >
            DELIVERY
          </NavLink>
          <NavLink
            to="/order/check-out/payment"
            activeClassName="active"
            className="breadcrumb-link"
          >
            PAYMENT
          </NavLink>
        </Breadcrumbs>
            <div className="outlet-wrapper">
              <Outlet />
            </div>
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="shopping-bag-section">
            <div className="shopping-bag p-4">
              <div className="shopping-bag-header d-flex justify-content-between">
                <h4>YOUR SHOPPING BAG</h4>
                <Link to="#">EDIT BAG</Link>
              </div>

              <Divider style={{ backgroundColor: "#666666" }} />

              <div className="cart-items-wrapper">
                {cartItems.map((product) => {
                  return (
                    <div key={product.id}>
                      <Card className="cart-item p-3" sx={{ border: "none" }}>
                        <Grid container spacing={1}>
                          <Grid item xs={4}>
                            <div className="product-image">
                              <CardMedia
                                component="img"
                                alt={name}
                                height="81"
                                width="81"
                                image={product.image}
                              />
                            </div>
                          </Grid>

                          <Grid item xs={4}>
                            <div className="product-information">
                              <Typography variant="h6" component="div">
                                {product.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                fontWeight="bold"
                                color="text.secondary"
                              >
                                &#8377; {product.type}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Quantity: {product.quantity}
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </Card>
                      <Divider style={{ backgroundColor: "#666666" }} />
                    </div>
                  );
                })}
                <div className="w-100 mt-4 order-continue-to-checkout">
                  <div className="apply-code-wrapper">
                    <input
                      type="text"
                      className="w-100 apply-code-input"
                      placeholder="Enter coupon code"
                    />

                    <Button
                      variant="outlined"
                      className="outlined-black btn-apply-code"
                    >
                      APPLY CODE &nbsp;
                      <EastIcon />
                    </Button>
                  </div>

                  <div className="totals">
                    <div className="subtotal total-info">
                      <span>subtotal</span>
                      <span className="text-bold">&#8377; 190</span>
                    </div>

                    <div className="shipping-charges total-info">
                      <span>Shipping charges</span>
                      <span>calculated at next step.</span>
                    </div>

                    <div className="total total-info">
                      <span className="text-bold">Total</span>
                      <span className="text-bold">&#8377; 190</span>
                    </div>
                  </div>

                  <Button
                    className="btn btn-block bg-black btn-submit btn-checkout"
                    fullWidth
                    variant="contained"
                    type="submit"
                  >
                    CONTINUE TO CHECKOUT &nbsp;
                    <EastIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderLayout;
