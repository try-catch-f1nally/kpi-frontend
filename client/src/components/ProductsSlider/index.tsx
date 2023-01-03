import React, {FC} from 'react';
import Slider, {Settings} from 'react-slick';
import SliderArrow from './SliderArrow';
import ProductCard from '../ProductCard';
import CardSkeleton from '../ProductCard/CardSkeleton';
import {ProductCardData} from '../../redux/product/types';

const sliderSettings: Settings = {
  slidesToShow: 5,
  autoplaySpeed: 5000,
  infinite: false,
  draggable: false,
  prevArrow: <SliderArrow iconClassName="bi-chevron-left"/>,
  nextArrow: <SliderArrow iconClassName="bi-chevron-right"/>,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

interface ProductSliderProps {
  title: string;
  products: ProductCardData[] | undefined;
}

const ProductsSlider: FC<ProductSliderProps> = ({title, products}) => {
  return (
    <>
      <h2>{title}</h2>
      <hr className="my-2 my-sm-3"/>
      <Slider {...sliderSettings}>
        {products
          ? products.map(product => <ProductCard key={product.name} {...product}/>)
          : Array(10).fill(0).map((_, index) => <CardSkeleton key={index}/>)
        }
      </Slider>
    </>
  );
};

export default ProductsSlider;
