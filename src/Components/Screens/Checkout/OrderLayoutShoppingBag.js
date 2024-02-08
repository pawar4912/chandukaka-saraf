import {
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export const OrderLayoutShoppingBag = () => {
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
    <div className="shopping-bag-wrapper-section">
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
                             {product.type}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Quantity: {product.quantity}
                          </Typography>
                        </div>
                      </Grid>

                      <Grid container xs={4} className="d-flex justify-content-center align-items-center">
                        <Typography variant="body2" color="text.secondary">
                          <b style={{fontSize: '16px', fontWeight: 'bolder'}}> &#8377; {product.price}</b>
                        </Typography>
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
                onClick={() => navigate("/order/check-out/delivery")}
              >
                CONTINUE TO CHECKOUT &nbsp;
                <EastIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
