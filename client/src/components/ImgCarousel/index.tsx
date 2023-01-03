import React, {FC} from 'react';
import {Carousel} from 'react-bootstrap';
import PictureWithSkeleton from '../PictureWithSkeleton';

interface ImgCarousel {
  imgNames: string[];
  imgRatio: '1/1' | '4/3' | '16/9' | '21/9';
  serverPath: string;
}

const ImgCarousel: FC<ImgCarousel> = ({imgNames, imgRatio, serverPath}) => {
  return (
    <Carousel>
      {imgNames.map(imgName =>
        <Carousel.Item key={imgName}>
          <PictureWithSkeleton
            path={`${serverPath}/${imgName}`}
            imgClassName={'d-block w-100'}
            skeletonRatio={imgRatio}
            imgStyle={{objectFit: 'cover', aspectRatio: imgRatio}}
          />
        </Carousel.Item>)
      }
    </Carousel>
  );
};

export default ImgCarousel;
