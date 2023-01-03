import React, {FC} from 'react';
import {Badge, Button, Col, Container, Row} from 'react-bootstrap';
import HomeBreadcrumb from '../../../../components/HomeBreadcrumb';
import ImgCarousel from '../../../../components/ImgCarousel';
import ProductMemoryButtons from './ProductMemoryButtons';
import ProductColorButtons from './ProductColorButtons';
import ProductRating from './ProductRating';
import {ProductData, productTypeMap} from '../../../../redux/product/types';

const MainBlock: FC<ProductData> = ({
                                      images,
                                      name,
                                      price,
                                      oldPrice,
                                      model,
                                      color,
                                      memory,
                                      reviews,
                                      rating,
                                      availableColors,
                                      availableMemories,
                                      productType,
                                      article
                                    }) => {
  const breadcrumbItems = [
    {text: productTypeMap[productType], link: '/products'},
    {text: name}
  ];

  return (
    <Container className="my-3">
      <HomeBreadcrumb breadcrumbItems={breadcrumbItems}/>
      <section className="bg-dark rounded-1 p-3 p-md-4">
        <Row xs={1} lg={2} className="gy-4">
          <Col>
            <ImgCarousel
              imgNames={images}
              imgRatio="1/1"
              serverPath={process.env.REACT_APP_PRODUCTS_IMG_PATH!}
            />
          </Col>
          <Col>
            <h3>{name} {!oldPrice && <Badge className="fs-5">NEW</Badge>}</h3>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="fs-2 fw-bold me-2">$ {price}</span>
                {oldPrice && <s className="fs-5 text-danger">$ {oldPrice}</s>}
              </div>
              <span className="text-success fw-bold bg-success bg-opacity-25 rounded-3 py-2 px-3">
                Available <i className="bi-check-circle"/>
              </span>
            </div>
            <Badge bg="secondary">ART: {article}</Badge>
            <hr/>
            <h5 className="text-secondary mt-4">Memory Size:</h5>
            <ProductMemoryButtons
              productType={productType}
              model={model} memory={memory} color={color}
              availableMemories={availableMemories}
            />
            <h5 className="text-secondary mt-3">Color:</h5>
            <ProductColorButtons
              productType={productType}
              model={model} memory={memory} color={color}
              availableColors={availableColors}
            />
            <hr/>
            <ProductRating rating={rating} reviews={reviews}/>
            <hr/>
            <Row xs={1} sm={2} className="gy-3">
              <Col>
                <Button size="lg" className="w-100 me-3 fw-bold" variant="light">
                  Quick buy&nbsp;
                  <i className="bi-lightning-charge-fill"/>
                </Button>
              </Col>
              <Col>
                <Button size="lg" className="w-100 fw-bold">
                  Buy&nbsp;
                  <i className="bi-bag-plus-fill"/>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default MainBlock;
