import { Link, Outlet } from "react-router-dom";
import { Breadcrumbs, Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import siteLogo from "./images/icons/logo.svg";

const OrderLayout = () => {
  return (
    <div className="order-layout d-flex justify-content-center">
      <Grid container spacing={3}>

        <Grid item xs={12} md={6} className="form-section p-5">
          <div className="checkout-header">
            <img src={siteLogo} alt="" />
          </div>

          <Breadcrumbs
          className="order-layout-breadcrumb my-5"
            separator={
              <NavigateNextIcon sx={{ color: "#000" }} fontSize="small" />
            }
            aria-label="breadcrumb"
          >
            <div color="inherit" to="check-out/details">
              YOUR DETAILS
            </div>
            <div color="inherit" to="check-out/delivery">
              DELIVERY
            </div>
            <div color="inherit" to="check-out/payment">
              PAYMENT
            </div>
          </Breadcrumbs>
          <div className="outlet-wrapper">
            <Outlet />
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="shopping-bag-section">
shopping bag	
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderLayout;
