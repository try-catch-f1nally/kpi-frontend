import React, {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Footer: FC = () => {
  return (
    <footer className="pt-3 text-light">
      <Container>
        <Row>
          <Col
            sm="6" md="auto" lg="3" xl
            className="mb-3 mb-lg-0 d-flex justify-content-center justify-content-sm-start justify-content-xl-center"
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start">
              <p className="text-primary mb-1">Information for customers</p>
              <ul className="list-unstyled mb-1">
                <li><a className="link-light text-decoration-none" href="#">Payment and Delivery</a></li>
                <li><a className="link-light text-decoration-none" href="#">Return of Goods</a></li>
                <li><a className="link-light text-decoration-none" href="#">Warranty</a></li>
                <li><a className="link-light text-decoration-none" href="#">About iGadgets</a></li>
              </ul>
            </div>
          </Col>
          <Col
            sm="6" md lg="2" xl
            className="mb-3 mb-lg-0 d-flex justify-content-center justify-content-sm-start justify-content-xl-center"
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start">
              <p className="text-primary mb-1">Contact Us</p>
              <ul className="list-unstyled mb-1">
                <li className="mb-1">
                  <small>Mon-Sat: <br className="d-none d-lg-block d-xl-none"/>8:00 AM-7:00 PM</small>
                </li>
                <li>
                    <a className="link-light text-decoration-none" href="tel:0-800-707-07-07">0-800-707-07-07</a>
                </li>
                <li>
                  <a href="mailto:support@igadget.ua" className="link-light mb-2 text-decoration-none">
                    support@igadget.ua
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            sm="6" md="auto" lg="2" xl
            className="mb-3 mb-lg-0 d-flex justify-content-center justify-content-sm-start justify-content-xl-center"
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start mt-sm-2 mt-md-0">
              <p className="text-primary mb-1">Download App</p>
              <ul className="list-unstyled mb-1">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    <img src="google-play-badge.png" width="120" alt="google-play-badge"/>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <img src="app-store-badge.svg" alt="app-store-badge"/>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            sm="6" md="auto" lg="2" xl
            className="mb-3 mb-lg-0 d-flex justify-content-center justify-content-sm-start justify-content-xl-center"
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start mt-sm-2 mt-md-0">
              <p className="text-primary mb-2">Follow Us</p>
              <div>
                <TwitterIcon/>
                <FacebookIcon/>
                <TelegramIcon/>
                <br className="d-none d-md-block d-xl-none"/>
                <InstagramIcon/>
                <YouTubeIcon/>
              </div>
            </div>
          </Col>
          <Col
            lg="3" xl
            className="d-flex justify-content-center align-items-lg-center order-lg-first"
          >
            <div className="d-inline-block text-center">
              <a href="#" className="text-decoration-none text-white fs-4">
                <span className="text-primary fw-bold">i</span>Gadgets
              </a>
              <br className="d-none d-lg-block"/>
              <span className="text-white mb-2">&copy; 2015-2022</span>
              <div>
                <img src="mastercard-logo.svg" alt="mastercard-verified"/>
                <img src="visa-logo.svg" alt="visa-verified"/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const TwitterIcon: FC = () => {
  return (
    <a href="#" className="btn p-1 me-2 mb-2 fs-4 lh-0" style={{background: '#1DA1F2'}}>
      <i className="bi-twitter text-white"/>
    </a>
  );
}

const FacebookIcon: FC = () => {
  return (
    <a href="#" className="btn p-1 me-2 mb-2 fs-4 lh-0" style={{background: '#3b5998'}}>
      <i className="bi-facebook text-white"/>
    </a>
  );
}

const TelegramIcon: FC = () => {
  return (
    <a href="#" className="btn p-1 me-2 mb-2 fs-4 lh-0 bg-white">
      <i className="bi-telegram" style={{color: '#229ED9'}}/>
    </a>
  );
}

const InstagramIcon: FC = () => {
  return (
    <a href="#" className="btn p-1 me-2 mb-2 fs-4 lh-0" style={{
      background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
      borderTopColor: '#285AEB'
    }}>
      <i className="bi-instagram text-white"/>
    </a>
  );
}

const YouTubeIcon: FC = () => {
  return (
    <a href="#" className="btn p-1 mb-2 fs-4 lh-0 bg-white">
      <i className="bi-youtube" style={{color: '#ff0000'}}/>
    </a>
  );
}

export default Footer;
