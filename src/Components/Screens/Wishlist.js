import React from "react";
import headerLeftIcon from "../../images/icons/Group45.svg";
import headerRightIcon from "../../images/icons/Group40.svg";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  iconClasses,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import productImage from "../../images/productImage.png";

export const ProductCard = ({ product = null }) => {
  return (
    <Card variant="outlined" className="product-card">
      <div className="image-container">
        <CardMedia
          component="img"
          width="100%"
          image={productImage}
          // alt={product.name}
        />
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton color="inherit">
            <CloseIcon />
          </IconButton>
        </div>
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
          {/* {product.name} */}
          Product name
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
          {/* ${product.price.toFixed(2)} */}
          1234.323
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
      Product_Type: "Gold Coin",
      Metal_Weight: "0.5 gram",
      Metal_Cost: "3092",
      Wastage_Charges: "154",
      GST: "97",
      Final_Cost: "3343",
      Wastage_percentage: "0.025",
    },
    {
      id: 2,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "1 gram",
      Metal_Cost: "6185",
      Wastage_Charges: "154",
      GST: "190",
      Final_Cost: "6529",
      Wastage_percentage: "0.025",
    },
    {
      id: 3,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "2 gram",
      Metal_Cost: "12370",
      Wastage_Charges: "154",
      GST: "375",
      Final_Cost: "12899",
      Wastage_percentage: "0.025",
    },
    {
      id: 4,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "3 gram",
      Metal_Cost: "18555",
      Wastage_Charges: "154",
      GST: "561",
      Final_Cost: "19270",
      Wastage_percentage: "0.025",
    },
    {
      id: 5,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "5 gram",
      Metal_Cost: "30925",
      Wastage_Charges: "185",
      GST: "933",
      Final_Cost: "32043",
      Wastage_percentage: "0.030 ",
    },
    {
      id: 6,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "10 gram",
      Metal_Cost: "61850",
      Wastage_Charges: "309",
      GST: "1865",
      Final_Cost: "64024",
      Wastage_percentage: "0.050 ",
    },
    {
      id: 7,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "15 gram",
      Metal_Cost: "92775",
      Wastage_Charges: "495",
      GST: "2798",
      Final_Cost: "96068",
      Wastage_percentage: "0.080 ",
    },
    {
      id: 8,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "20 gram",
      Metal_Cost: "123700",
      Wastage_Charges: "618",
      GST: "3729",
      Final_Cost: "128047",
      Wastage_percentage: "0.100 ",
    },
    {
      id: 9,
      productImage: productImage,
      Product_Type: "Gold Coin",
      Metal_Weight: "25 gram",
      Metal_Cost: "154625",
      Wastage_Charges: "711",
      GST: "4660",
      Final_Cost: "159996",
      Wastage_percentage: "0.115 ",
    },
    {
      id: 10,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "0.5 gram",
      Metal_Cost: "3092",
      Wastage_Charges: "93",
      GST: "96",
      Final_Cost: "3281",
      Wastage_percentage: "0.015",
    },
    {
      id: 11,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "1 gram",
      Metal_Cost: "6185",
      Wastage_Charges: "93",
      GST: "188",
      Final_Cost: "6466",
      Wastage_percentage: "0.015",
    },
    {
      id: 12,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "2 gram",
      Metal_Cost: "12370",
      Wastage_Charges: "93",
      GST: "374",
      Final_Cost: "12867",
      Wastage_percentage: "0.015",
    },
    {
      id: 13,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "3 gram",
      Metal_Cost: "18555",
      Wastage_Charges: "93",
      GST: "557",
      Final_Cost: "19205",
      Wastage_percentage: "0.015",
    },
    {
      id: 14,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "5 gram",
      Metal_Cost: "30925",
      Wastage_Charges: "155",
      GST: "932",
      Final_Cost: "32012",
      Wastage_percentage: "0.025 ",
    },
    {
      id: 15,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "6 gram",
      Metal_Cost: "37110",
      Wastage_Charges: "155",
      GST: "1118",
      Final_Cost: "38383",
      Wastage_percentage: "0.025 ",
    },
    {
      id: 16,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "7 gram",
      Metal_Cost: "43295",
      Wastage_Charges: "155",
      GST: "1303",
      Final_Cost: "44753",
      Wastage_percentage: "0.025 ",
    },
    {
      id: 17,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "10 gram",
      Metal_Cost: "61850",
      Wastage_Charges: "248",
      GST: "1863",
      Final_Cost: "63961",
      Wastage_percentage: "0.040 ",
    },
    {
      id: 18,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "12 gram",
      Metal_Cost: "74220",
      Wastage_Charges: "248",
      GST: "2234",
      Final_Cost: "76702",
      Wastage_percentage: "0.040 ",
    },
    {
      id: 19,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "15 gram",
      Metal_Cost: "92775",
      Wastage_Charges: "309",
      GST: "2792",
      Final_Cost: "95876",
      Wastage_percentage: "0.050 ",
    },
    {
      id: 20,
      productImage: productImage,
      Product_Type: "Vedhani",
      Metal_Weight: "20 gram",
      Metal_Cost: "123700",
      Wastage_Charges: "402",
      GST: "3723",
      Final_Cost: "127825",
      Wastage_percentage: "0.065",
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

      <div className="wishlist-items-container">
        <Box className="p-3">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
