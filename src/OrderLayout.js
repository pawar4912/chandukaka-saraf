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
  Badge,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import siteLogo from "./images/icons/logo.svg";
import EastIcon from "@mui/icons-material/East";
import { ExpansionCartView } from "./ExpansionCartView";
import { OrderLayoutShoppingBag } from "./Components/Screens/Checkout/OrderLayoutShoppingBag";

const OrderLayout = () => {
  return (
    <div className="order-layout d-flex justify-content-center">
      <Grid container className="order-main-wrapper" spacing={3}>
        <Grid item xs={12} md={6} className="form-section p-5">
          <div className="form-section-wrapper">
            <div className="checkout-header">
              <img src={siteLogo} alt="" />
            </div>

            <ExpansionCartView style={{display: 'none'}} className="expansion-cart-view" />

            <Breadcrumbs
              className="my-5"
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

        <Grid item md={6} className="order-layout-shopping-bag-grid">
         <OrderLayoutShoppingBag />
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderLayout;