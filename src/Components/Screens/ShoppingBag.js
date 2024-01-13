import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import {
  Badge,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Box,
  Grid,
  Button,
  Paper
} from "@mui/material";
import shoppingBagLogo from "../../images/icons/shopping-bag.svg";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EastIcon from "@mui/icons-material/East";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: "20vw !important", // Customizable width
  height: "100%", // Full-screen height
  border: "2px solid red",
  "& .MuiDrawer-paper": {
    width: "25vw !important", // Customizable width
    height: "100%", // Full-screen height
    border: "3px solid green",
  },
}));

export const CartItem = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: "gold coin",
    image: "https://source.unsplash.com/random/300x300?jewellery=2",
    quantity: 1,
    price: 1200,
  });
  const { id, name, image, quantity, price } = product;

  const handleRemove = () => {
    // Implement logic to remove the item from the cart
    console.log(`Remove item with id ${id}`);
  };

  const handleIncreaseQuantity = () => {
    product.quantity = product.quantity + 1;
    // Implement logic to update the cart or state with increased quantity
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      // Implement logic to update the cart or state with decreased quantity
    }
  };

  return (
    <Card className="cart-item p-4">
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <div className="product-image">
            <CardMedia
              component="img"
              alt={name}
              height="81"
              width="81"
              image={image}
            />
          </div>
        </Grid>

        {/* <CardContent> */}
        <Grid item xs={4}>
          <div className="product-information">
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${price}
            </Typography>
          </div>
        </Grid>

        <Grid item xs={4}>
          <Box className="card-actions" display="flex" alignItems="center">
            <IconButton onClick={handleRemove} aria-label="remove">
              <CloseIcon />
            </IconButton>
            <Box
              className="quantity-handler"
              display="flex"
              alignItems="center"
            >
              <IconButton
                onClick={handleDecreaseQuantity}
                aria-label="remove quantity"
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1">{product.quantity}</Typography>
              <IconButton
                onClick={handleIncreaseQuantity}
                aria-label="add quantity"
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        {/* </CardContent> */}
      </Grid>

      <Divider></Divider>
    </Card>
  );
};

export const ShoppingBag = ({ open, handleDrawer }) => {
  const toggleDrawer = () => {
    console.log("In toggle");
    handleDrawer();
  };

  return (
    <div className="shopping-bag p-4">
      <StyledDrawer
        anchor="right"
        className="MuiDrawer.paper"
        open={open}
        onClose={toggleDrawer}
      >
        <div className="shopping-bag-header d-flex justify-content-between p-3">
          <Badge badgeContent={4} color="primary">
            <img src={shoppingBagLogo} />
          </Badge>

          <Typography>YOUR SHOPPING BAG</Typography>

          <IconButton aria-label="close" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>

        <Divider />

        <CartItem></CartItem>

        <Paper elevation={4} className="w-100 continue-to-checkout p-3">

          <div className="apply-code-wrapper">
            <input
              type="text"
              className="w-100 apply-code-input"
              placeholder="Enter coupon code"
            />

            <Button variant="outlined" className="outlined-black btn-apply-code">
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


        </Paper>

        {/* <List>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Drawer Item 1" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Drawer Item 2" />
          </ListItem>
        </List> */}
      </StyledDrawer>
    </div>
  );
};
