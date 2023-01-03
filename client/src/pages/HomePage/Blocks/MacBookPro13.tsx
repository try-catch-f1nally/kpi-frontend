import React, {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const MacBookPro13: FC = () => {
  return (
    <section className="bg-black my-5">
      <Container className="py-4">
        <Row xs={1} lg={2}>
          <Col className="d-flex align-items-center">
            <img
              className="mw-100"
              src="./bg-images/macbook-pro-13.jpg"
              alt="macbook-pro-13"
            />
          </Col>
          <Col>
            <div className="p-xl-3 p-xxl-5 text-center">
              <h4 className="fs-1">MacBook Pro 13"</h4>
              <p className="opacity-75 fs-5">
                The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design
                supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced
                performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality
                mics, it’s our most portable pro laptop.
              </p>
              <Link to="/mac?model=Pro13" className="btn btn-outline-primary">Learn more</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MacBookPro13;
