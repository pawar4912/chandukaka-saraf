import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function ProductReviewCard({ reviewDetails }) {
  return (
    <Card className='review-comment-card-container'>
      <CardContent>
        <div className='rating-and-date'>
          <Rating
            className='product-description-details-rating'
            name="simple-controlled"
            value={reviewDetails?.rating}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <div>
          {reviewDetails?.date}
        </div>
        </div>
        <div className='review-user-name'>
          {reviewDetails?.userName}
        </div>
        <div>
          {reviewDetails?.comment}
        </div>
      </CardContent>
    </Card >
  );
}