import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToWishlist } from '../services/FrontApp/index.service';

export default function ProductCard({ productImage, productName, id = 0, newArrival, productPrice }) {
  const addToFavorite = async () => {
    try {
      await addToWishlist(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className='product-page-product-card-container' sx={{ maxWidth: 345 }}>
      <CardActionArea className='product-page-product-card-action-area'>
        <div className="image-container">
          <CardMedia
            component="img"
            height="260"
            width="285"
            className="images"
            image={productImage}
            alt="green iguana"
          />
          <div
            style={{ position: "absolute", bottom: 0, right: 0 }}
            className="favourite-button-container"
          >
            <IconButton style={{ color: "#666666" }} onClick={addToFavorite}>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
        </div>
        <CardContent>
          <div className='product-name'>
            {productName}
          </div>
          <div className='product-price'>
            ₹ {productPrice}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
