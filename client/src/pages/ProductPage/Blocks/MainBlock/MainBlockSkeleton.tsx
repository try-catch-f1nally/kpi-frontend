import React, {FC} from 'react';
import {Badge, Col, Container, Row} from 'react-bootstrap';
import BreadcrumbSkeleton from '../../../../components/HomeBreadcrumb/BreadcrumbSkeleton';
import ImgCarouselSkeleton from '../../../../components/ImgCarousel/ImgCarouselSkeleton';
import Skeleton from 'react-loading-skeleton';

const MainBlockSkeleton: FC = () => {
  return (
    <Container className="my-3">
      <BreadcrumbSkeleton/>
      <section className="bg-dark rounded-1 p-3 p-md-4">
        <Row xs={1} lg={2} className="gy-4">
          <Col>
            <ImgCarouselSkeleton ratio={'1/1'}/>
          </Col>
          <Col>
            <h2><Skeleton/></h2>
            <div className="mb-4">
              <Skeleton className="fs-2"/>
            </div>
            <Skeleton style={{width: 100, fontSize: 20}}/>
            <hr/>
            <h4 className="mt-4 w-50"><Skeleton/></h4>
            <Skeleton style={{height: 45}}/>
            <h4 className="mt-3 w-50"><Skeleton/></h4>
            <Skeleton style={{height: 55}}/>
            <hr/>
            <Skeleton style={{height: 150}}/>
            <hr/>
            <Row xs={1} sm={2} className="gy-3 fs-1">
              <Col>
                <Skeleton/>
              </Col>
              <Col>
                <Skeleton/>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default MainBlockSkeleton;
