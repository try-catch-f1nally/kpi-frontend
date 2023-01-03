import React, {FC} from 'react';
import {Container} from 'react-bootstrap';

const ProductVideo: FC<{ videoLink: string }> = ({videoLink}) => {
  return (
    <Container className="my-3">
      <section className="bg-dark rounded-1 border border-secondary border-opacity-10">
        <div className="position-relative overflow-hidden w-100" style={{paddingTop: '56.25%'}}>
          <iframe
            className="position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100"
            src={`https://www.youtube.com/embed/${videoLink}`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </Container>
  );
};

export default ProductVideo;
