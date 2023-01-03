import React, {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import {Review} from '../../../../redux/product/types';

interface ReviewsBlockProps {
  name: string;
  reviews: Review[];
}

const ReviewsBlock: FC<ReviewsBlockProps> = ({name, reviews}) => {
  return (
    <Container className="my-5" id="reviews">
      <h3>Reviews about {name}</h3>
      <hr className="my-2 my-sm-3"/>
      <Row className="gy-3 gy-md-4">
        <Col xs={12} lg={5}>
          <ReviewForm/>
        </Col>
        <Col xs={12} lg={7}>
          <ReviewList reviews={reviews}/>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewsBlock;
