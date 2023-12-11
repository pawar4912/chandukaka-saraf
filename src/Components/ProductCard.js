import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import heartIcon from "../images/icons/heart.svg";

export default function ProductCard({ productImage, productNmae, isFavourite, newArrival, productPrice }) {
  return (
    <Card className='product-page-product-card-container' sx={{ maxWidth: 345 }}>
      <CardActionArea className='product-page-product-card-action-area'>
        <CardMedia
          component="img"
          height="260"
          width="285"
          image={productImage}
          alt="green iguana"
        />
        <CardContent>
          <div className='product-list-page-product-title'>
            {productNmae}
          </div>
          <div>
            {productPrice}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
