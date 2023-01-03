import React, {FC} from 'react';
import ErrorPage from '../ErrorPage';
import {useParams} from 'react-router-dom';
import {useGetProductQuery} from '../../redux/product/product-api';
import MainBlock from './Blocks/MainBlock';
import Characteristics from './Blocks/Characteristics';
import ProductVideo from './Blocks/ProductVideo';
import ReviewsBlock from './Blocks/ReviewsBlock';
import MainBlockSkeleton from './Blocks/MainBlock/MainBlockSkeleton';
import CharacteristicsSkeleton from './Blocks/Characteristics/CharacteristicsSkeleton';

const ProductPage: FC = () => {
  const {id = ''} = useParams();
  const {data: product, isSuccess, isLoading, isError} = useGetProductQuery(id);

  return (
    <main className="my-3 flex-grow-1">
      {isLoading &&
        <>
          <MainBlockSkeleton/>
          <CharacteristicsSkeleton/>
        </>
      }

      {isSuccess &&
        <>
          <MainBlock {...product}/>
          <Characteristics characteristics={product.characteristics}/>
          <ProductVideo videoLink={product.videoLink}/>
          <ReviewsBlock name={product.name} reviews={product.reviews}/>
        </>
      }

      {isError && <ErrorPage/>}
    </main>
  );
};

export default ProductPage;
