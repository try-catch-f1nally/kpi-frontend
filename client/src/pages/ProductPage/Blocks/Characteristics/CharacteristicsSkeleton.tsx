import React, {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import classes from '../../ProductPage.module.scss';

const CharacteristicsSkeleton: FC = () => {
  return (
    <Container className="container my-3">
      <section className="bg-dark rounded-1 p-3 p-md-4">
        <h3><Skeleton style={{width: '40%'}}/></h3>
        {Array(6).fill(0).map((item) =>
          <Row className="mt-2">
            <Col xs={12} lg={5} className="d-flex">
              <Skeleton style={{width: Math.random() * 200 + 50}}/>
              <span className={'d-none d-lg-inline ' + classes.dashes}/>
            </Col>
            <Col xs={12} lg={7}>
              <Skeleton style={{width: `${Math.random() * 90 + 10}%`}}/>
            </Col>
          </Row>
        )}
      </section>
    </Container>
  );
};

export default CharacteristicsSkeleton;
