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
  Pagination,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import productImage from "../../../images/productImage.png";
import ConfirmationDialog from "./ConfirmationDialog";
import { Link } from "react-router-dom";
import { Paginator } from "../../Common/Paginator";

export const ProductCard = ({ product = null }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfirm = (response) => {
    console.log("User confirmed:", response);
    // Handle the response here
    setIsDialogOpen(false); // Close the dialog after handling the response
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleOpenDialog = () => {
    console.log("dialog opened");
    setIsDialogOpen(true);
  };

  const addToCart = (product) => {
    // Todo: handle the api call for the add to cart functionality
    console.log("Product added to cart")
  }

  return (
    <Card variant="outlined" className="product-card">
      <div className="image-container">
        <CardMedia
          component="img"
          image={product.productImage}
          alt={product.productType}
        />
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton onClick={handleOpenDialog}>
            <CloseIcon />
          </IconButton>
        </div>
        <ConfirmationDialog
          onConfirm={handleConfirm}
          open={isDialogOpen}
          product={product}
          handleClose={handleClose}
        />
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
        <Typography className="product-name">{product.productType}</Typography>
        <Typography color="text.secondary" className="product-price">
          &#8377; {product.finalCost.toFixed(2)}
        </Typography>

        <Link to="#" onClick={() => addToCart(product)} className="add-to-cart-link">
          ADD TO CART
        </Link>
      </CardContent>
    </Card>
  );
};

export const Wishlist = () => {
  const products = [
    {
      id: 1,
      productImage: "https://source.unsplash.com/random/300x300?jewellery=1",
      productType: "Necklace",
      metalWeight: "0.5 gram",
      metalCost: "3092",
      wastageCharges: "154",
      GST: "97",
      finalCost: 3343,
      Wastage_percentage: "0.025",
    },
    {
      id: 2,
      productImage: "https://source.unsplash.com/random/300x300?jewellery=2",
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
      productImage: "https://source.unsplash.com/random/300x300?jewellery=3",
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
      productImage: "https://source.unsplash.com/random/300x300?jewellery=4",
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
      productImage: "https://source.unsplash.com/random/300x300?jewellery=5",
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
      productImage: "https://source.unsplash.com/random/300x300?jewellery=6",
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
      productImage: "https://source.unsplash.com/random/300x300?jewellery=7",
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
      productImage: "https://source.unsplash.com/random/300x300?jewellery=8",
      productType: "Gold Coin",
      metalWeight: "20 gram",
      metalCost: "123700",
      wastageCharges: "618",
      GST: "3729",
      finalCost: 128047,
      Wastage_percentage: "0.100 ",
    },
    {
      id: 9,
      productImage: "https://source.unsplash.com/random/300x300?jewellery=9",
      productType: "Gold Coin",
      metalWeight: "20 gram",
      metalCost: "123700",
      wastageCharges: "618",
      GST: "3729",
      finalCost: 128047,
      Wastage_percentage: "0.100 ",
    },
    {
      id: 10,
      productImage: "https://source.unsplash.com/random/300x300?jewellery=10",
      productType: "Gold Coin",
      metalWeight: "20 gram",
      metalCost: "123700",
      wastageCharges: "618",
      GST: "3729",
      finalCost: 128047,
      Wastage_percentage: "0.100 ",
    },
    {
      id: 11,
      productImage: "https://source.unsplash.com/random/300x300?jewellery=11",
      productType: "Gold Coin",
      metalWeight: "20 gram",
      metalCost: "123700",
      wastageCharges: "618",
      GST: "3729",
      finalCost: 128047,
      Wastage_percentage: "0.100 ",
    },
    {
      id: 12,
      productImage: "https://source.unsplash.com/random/300x300?jewellery=12",
      productType: "Gold Coin",
      metalWeight: "20 gram",
      metalCost: "123700",
      wastageCharges: "618",
      GST: "3729",
      finalCost: 128047,
      Wastage_percentage: "0.100 ",
    },
    {
      id: 13,
      productImage: "https://source.unsplash.com/random/300x300?jewellery=13",
      productType: "Gold Coin",
      metalWeight: "20 gram",
      metalCost: "123700",
      wastageCharges: "618",
      GST: "3729",
      finalCost: 128047,
      Wastage_percentage: "0.100 ",
    },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);
  // todo: refactor above logic for static implementation

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
          <Grid container className="mb-4" spacing={3}>
            {displayedProducts.map((product) => (
              <Grid key={product.id} item xs={6} sm={6} md={3} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

        </Box>
        <Paginator currentPage={currentPage} itemsPerPage={itemsPerPage} productsLength={products.length} handleChangePage={handleChangePage} />
      </div>
    </div>
  );
};
