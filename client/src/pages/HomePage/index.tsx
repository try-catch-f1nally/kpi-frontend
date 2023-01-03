import React, {FC} from 'react';
import {Container} from 'react-bootstrap';
import ImgCarousel from '../../components/ImgCarousel';
import ImgCarouselSkeleton from '../../components/ImgCarousel/ImgCarouselSkeleton';
import ProductsSlider from '../../components/ProductsSlider';
import OutgoingBlock from '../../components/OutgoingBlock';
import AppleProducts from './Blocks/AppleProducts';
import MacBookPro13 from './Blocks/MacBookPro13';
import IPhone13Pro from './Blocks/IPhone13Pro';
import {useGetProductsQuery} from '../../redux/product/product-api';
import {useGetCarouselImagesQuery} from '../../redux/promo/promo-api';
import classes from './HomePage.module.scss';

const HomePage: FC = () => {
  const {data: carouselImages, isSuccess, isLoading} = useGetCarouselImagesQuery();
  const {data: topProducts} = useGetProductsQuery({sort: 'rating', limit: 10});
  const {data: newProducts} = useGetProductsQuery({sort: 'new', limit: 10});

  return (
    <main className="flex-grow-1">
      {isSuccess &&
        <ImgCarousel
          imgNames={carouselImages}
          imgRatio="21/9"
          serverPath={process.env.REACT_APP_PROMO_IMG_PATH!}
        />
      }
      {isLoading && <ImgCarouselSkeleton ratio={'21/9'}/>}

      <Container className="my-5">
        <ProductsSlider title="Top Rating. The products you love." products={topProducts}/>
      </Container>

      <Container className="my-5">
        <ProductsSlider title="The latest. Take a look at what’s new, right now." products={newProducts}/>
      </Container>

      <OutgoingBlock classNames={{enter: classes.bottomSlide, enterDone: classes.opacity1}}>
        <AppleProducts/>
      </OutgoingBlock>

      <OutgoingBlock classNames={{enter: classes.fade, enterDone: classes.opacity1}}>
        <IPhone13Pro/>
      </OutgoingBlock>

      <OutgoingBlock classNames={{enter: classes.rightSlide, enterDone: classes.opacity1}}>
        <MacBookPro13/>
      </OutgoingBlock>
    </main>
  );
};

export default HomePage;
