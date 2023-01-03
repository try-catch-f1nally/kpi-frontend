import React, {FC} from 'react';
import {Badge, Card} from 'react-bootstrap';
import {Rating} from 'react-simple-star-rating';
import {Link} from 'react-router-dom';
import LinkWithUnderlineOnHover from '../LinkWithUnderlineOnHover';
import {ProductCardData} from '../../redux/product/types';
import classes from './ProductCard.module.scss';
import PictureWithSkeleton from '../PictureWithSkeleton';

const ProductCard: FC<ProductCardData> = ({name, imgName, rating, reviewsAmount, price, oldPrice, link}) => {
  return (
    <Card bg="dark" className="border-0 h-100">
      <Link to={`/products/${link}`}>
        <PictureWithSkeleton
          path={`${process.env.REACT_APP_PRODUCTS_IMG_PATH}/${imgName}`}
          imgClassName={'card-img-top'}
          skeletonRatio={'1/1'}
        />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between px-2">
        <Card.Title className={'text-center mb-2 ' + classes.cardTitleText}>
          <LinkWithUnderlineOnHover to={`/products/${link}`} className="link-light">
            {name}
          </LinkWithUnderlineOnHover>
        </Card.Title>

        <div className="d-flex align-items-center flex-wrap">
          <div className="mb-2 text-center position-relative w-100">
            <Rating
              readonly
              ratingValue={rating * 20}
              size={20}
              fillColor="#FFC107"
              style={{margin: '-5px 5px 0 0'}}
            />
            <LinkWithUnderlineOnHover className="stretched-link link-light" to={`/products/${link}#reviews`}>
              {reviewsAmount}&nbsp;{reviewsAmount === 1 ? 'review' : 'reviews'}
            </LinkWithUnderlineOnHover>
          </div>
          <span className="fs-4 text-center w-50 text-white" style={{letterSpacing: '1px'}}>
            $&nbsp;{price}
          </span>
          {oldPrice
            ?
            <s className="fs-5 text-center w-50 text-danger" style={{letterSpacing: '1px'}}>
              $&nbsp;{oldPrice}
            </s>
            : <div className="w-50 px-2 text-center"><Badge className="fs-6 w-100">NEW</Badge></div>
          }
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
