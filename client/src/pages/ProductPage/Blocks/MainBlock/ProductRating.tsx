import React, {FC} from 'react';
import {Rating} from 'react-simple-star-rating';
import {ProgressBar} from 'react-bootstrap';
import {Review} from '../../../../redux/product/types';

interface ProductRatingProps {
  rating: number;
  reviews: Review[]
}

const ProductRating: FC<ProductRatingProps> = ({rating, reviews}) => {
  let ratingMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]]);
  reviews.forEach(
    (review) => ratingMap.set(review.rating, Number(ratingMap.get(review.rating)) + 1)
  );
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column justify-content-center w-50">
        <div className="display-3 text-center">{rating}</div>
        <div className="text-center">
          <Rating ratingValue={rating * 20} size={25} readonly/>
        </div>
        <a href="#reviews" className="fs-4 text-center link-secondary text-decoration-none">
          {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
        </a>
      </div>
      <div className="w-50">
        {Array.from(ratingMap.entries()).reverse().map((item) =>
          <div className="d-flex align-items-center mt-1 mt-sm-2">
            {item[0]}★
            <div className="ms-2 w-100">
              <ProgressBar now={item[1] / reviews.length * 100} label={item[1]} className="rounded-1"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductRating;
