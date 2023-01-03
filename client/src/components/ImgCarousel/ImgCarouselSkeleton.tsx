import React, {FC} from 'react';
import {Carousel} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const ImgCarouselSkeleton: FC<{ ratio: '1/1' | '4/3' | '16/9' | '21/9' }> = ({ratio}) => {
  return (
    <Carousel>
      {Array(5).fill(0).map(item =>
        <Carousel.Item>
          <Skeleton style={{aspectRatio: ratio}}/>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default ImgCarouselSkeleton;
