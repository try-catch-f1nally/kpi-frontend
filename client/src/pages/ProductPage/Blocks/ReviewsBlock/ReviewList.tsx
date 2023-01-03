import React, {FC} from 'react';
import {Rating} from 'react-simple-star-rating';
import {Button} from 'react-bootstrap';
import {Review} from '../../../../redux/product/types';


const ReviewList: FC<{ reviews: Review[] }> = ({reviews}) => {
  return (
    <>
      {reviews.map((review, index) =>
        <article className={'bg-dark rounded-1 p-3 p-md-4' + (index !== 0 ? ' mt-3 mt-md-4' : '')} key={index}>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="bi-people-fill fs-4"> {review.authorName}</div>
            <div className="text-secondary fs-6"> {review.date.toLocaleDateString('uk')}</div>
          </div>
          <Rating size={20} ratingValue={review.rating * 20} className="mb-2" readonly/>
          <span className="ms-1">{review.rating}</span>
          <div style={{textAlign: 'justify'}}>{review.comment}</div>
          <Button variant="danger" className="d-block px-3 ms-auto mt-2">
            Delete <i className="bi-trash-fill"/>
          </Button>
        </article>
      )}
    </>
  );
};

export default ReviewList;
