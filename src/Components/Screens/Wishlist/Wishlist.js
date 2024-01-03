import React, { useState } from "react";
import headerLeftIcon from "../../../images/icons/Group45.svg";
import headerRightIcon from "../../../images/icons/Group40.svg";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import productImage from "../../../images/productImage.png";
import ConfirmationDialog from "./ConfirmationDialog";

export const ProductCard = ({ product = null }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfirm = (response) => {
    console.log('User confirmed:', response);
    // Handle the response here
    setIsDialogOpen(false); // Close the dialog after handling the response
  };

  const handleOpenDialog = () => {
    console.log("dialog opened")
    setIsDialogOpen(true);
  };

  return (
    <Card variant="outlined" className="product-card" sx={{ width: 300 }}>
      <div className="image-container">
        <CardMedia
          component="img"
          image={productImage}
          height={300}
        // alt={product.name}
        />
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton color="inherit" onClick={handleOpenDialog}>
            <CloseIcon />
          </IconButton>

        </div>
        <ConfirmationDialog onConfirm={handleConfirm} open={isDialogOpen} />
        <div
          style={{ position: "absolute", bottom: 0, right: 0 }}
          className="favourite-button-container"
        >
          <IconButton style={{ color: "#5b382e" }}>
            <FavoriteIcon />
          </IconButton>
        </div>
      </div>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          style={{
            fontSize: "16px",
            color: "#333333",
            letterSpacing: "1.6px",
          }}
        >
          {product.productType}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            letterSpacing: "1.8px",
          }}
        >
          &#8377; {product.finalCost.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const Wishlist = () => {
  const products = [
    {
      id: 1,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "0.5 gram",
      metalCost: "3092",
      wastageCharges: "154",
      GST: "97",
      finalCost: 3343,
      Wastage_percentage: "0.025",
    },
    {
      id: 2,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "1 gram",
      metalCost: "6185",
      wastageCharges: "154",
      GST: "190",
      finalCost: 6529,
      Wastage_percentage: "0.025",
    },
    {
      id: 3,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "2 gram",
      metalCost: "12370",
      wastageCharges: "154",
      GST: "375",
      finalCost: 12899,
      Wastage_percentage: "0.025",
    },
    {
      id: 4,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "3 gram",
      metalCost: "18555",
      wastageCharges: "154",
      GST: "561",
      finalCost: 19270,
      Wastage_percentage: "0.025",
    },
    {
      id: 5,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "5 gram",
      metalCost: "30925",
      wastageCharges: "185",
      GST: "933",
      finalCost: 32043,
      Wastage_percentage: "0.030 ",
    },
    {
      id: 6,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "10 gram",
      metalCost: "61850",
      wastageCharges: "309",
      GST: "1865",
      finalCost: 64024,
      Wastage_percentage: "0.050 ",
    },
    {
      id: 7,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "15 gram",
      metalCost: "92775",
      wastageCharges: "495",
      GST: "2798",
      finalCost: 96068,
      Wastage_percentage: "0.080 ",
    },
    {
      id: 8,
      productImage: productImage,
      productType: "Gold Coin",
      metalWeight: "20 gram",
      metalCost: "123700",
      wastageCharges: "618",
      GST: "3729",
      finalCost: 128047,
      Wastage_percentage: "0.100 ",
    },
  ];

  return (
    <div className="wishlist">
      <Box sx={{ flexGrow: 1 }} className="text-center mt-5">
        <div className="section-title">
          <img src={headerLeftIcon} alt="" />
          <h2>Your wishlist</h2>
          <img src={headerRightIcon} alt="" />
        </div>

        <small>
          Unlock your desires and keep track of your favourite jewellery items
          in our wishlist , <br /> making your wishes a reality.
        </small>
      </Box>

      <div className="wishlist-items-container container">
        <Box>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};
