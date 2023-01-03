import React, {CSSProperties, FC, useState} from 'react';
import Skeleton from 'react-loading-skeleton';

interface PictureWithLoaderProps {
  path: string;
  skeletonRatio: '1/1' | '4/3' | '16/9' | '21/9';
  imgClassName: string;
  imgStyle?: CSSProperties;
}

const PictureWithSkeleton: FC<PictureWithLoaderProps> = ({path, imgClassName, skeletonRatio, imgStyle}) => {
  type ImgLoadStatus = 'idle' | 'loading' | 'success' | 'error';
  const [imgLoadStatus, setIsImgLoadStatus] = useState<ImgLoadStatus>('idle');

  return (
    <>
      {imgLoadStatus === 'idle' &&
        <Skeleton style={{aspectRatio: skeletonRatio, lineHeight: '2'}} containerClassName={`${imgClassName}`}/>
      }

      {(imgLoadStatus === 'idle' || imgLoadStatus === 'success') &&
        <picture>
          <source srcSet={`${process.env.REACT_APP_SERVER_STATIC_URL}${path}.webp`} type="image/webp"/>
          <img
            src={`${path}.jpg`}
            className={imgClassName}
            onLoadStart={() => setIsImgLoadStatus('loading')}
            onLoad={() => setIsImgLoadStatus('success')}
            onError={() => setIsImgLoadStatus('error')}
            style={imgStyle}
            alt=""
          />
        </picture>
      }

      {imgLoadStatus === 'error' &&
        <span
          style={{aspectRatio: skeletonRatio}}
          className={`d-flex align-items-center justify-content-center ${imgClassName}`}
        >
            <i className="bi-card-image fs-2 text-light"/>
        </span>
      }
    </>
  );
};

export default PictureWithSkeleton;
